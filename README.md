# OpenCode Academy — University Portal

**A role-based student information system front-end, covering the full course registration lifecycle from prerequisite checking through advisor approval.**

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-4-7952B3?logo=bootstrap&logoColor=white)](https://getbootstrap.com/)
[![jQuery](https://img.shields.io/badge/jQuery-3.3.1-0769AD?logo=jquery&logoColor=white)](https://jquery.com/)

---

University portals are deceptively hard interfaces. Course registration is not a shopping cart — it is a rules engine wearing a form. A student cannot take a course whose prerequisite they failed, cannot skip a course they must retake, and cannot finalize anything without an advisor signing off. The interface has to make those constraints legible at a glance, or students register for the wrong things and advisors spend the semester unwinding it.

This project is a front-end implementation of that problem: two distinct role-based experiences — **student** and **academic advisor** — sharing a common design system, wired together across a complete registration workflow.

> **Scope note:** This is a front-end prototype. All data is mocked in the markup and there is no server, database, or real authentication. It is a UI and interaction-design project, not a production system. See [Limitations](#limitations) for a candid account of what that means.

<!-- Add a screenshot or GIF here — this is the single highest-impact addition you can make.
     Best option: a short GIF of the registration flow, showing a locked prerequisite-failed
     course next to a selectable one, then the advisor confirmation screen.
![Portal walkthrough](docs/demo.gif)
-->

---

## Table of contents

- [The registration workflow](#the-registration-workflow)
- [Role-based experiences](#role-based-experiences)
- [Architecture notes](#architecture-notes)
- [Design iteration](#design-iteration)
- [Tech stack](#tech-stack)
- [Running locally](#running-locally)
- [Project structure](#project-structure)
- [Limitations](#limitations)
- [Roadmap](#roadmap)
- [Credits](#credits)

---

## The registration workflow

The core interaction the whole portal is built around. Registration is modelled as a two-stage process with a validation gate in front of it.

```
┌─────────────────────────────────────────────────────────────────┐
│  STUDENT                                                        │
│                                                                 │
│  Available Courses                                              │
│    ├── prerequisite passed  →  selectable  [✓]                  │
│    ├── prerequisite failed  →  locked, marked Mandatory          │
│    └── course previously failed → auto-added to retake list      │
│                          │                                      │
│                          ▼  Add                                 │
│  Registered Courses                                             │
│    ├── mandatory retakes (non-removable)                        │
│    └── newly selected electives                                 │
│                          │                                      │
│                          ▼  Confirm                             │
├─────────────────────────────────────────────────────────────────┤
│  ADVISOR                                                        │
│                                                                 │
│  Course Confirmation  →  per-student detail view  →  Confirm    │
└─────────────────────────────────────────────────────────────────┘
```

**Prerequisite gating.** Each row in the available-courses table carries both the course's own status and its prerequisite's status. The two combine to determine affordance: a satisfied prerequisite yields a checkbox, an unsatisfied one strips the checkbox entirely and labels the row `Mandatory`. The constraint is expressed by the absence of a control rather than by an error message after the fact — the student cannot construct an invalid selection in the first place.

**Mandatory retakes.** Courses the student previously failed are pre-populated into the registered list without a removal control, so a retake cannot be accidentally dropped.

**Advisor approval.** Nothing is final on submission. The advisor's confirmation view lists students with pending registrations, drills into each one's selected courses, and confirms independently. This mirrors how the process actually works at a university, where the student's submission is a request rather than a transaction.

---

## Role-based experiences

The two roles enter through separate login pages and never share navigation — each gets its own sidebar, navbar, and page set.

### Student

| Page | What it does |
|---|---|
| **Dashboard** | Today's timetable alongside a profile summary — department, standing, assigned advisor, CGPA |
| **Curriculum** | The full eight-semester degree plan, so the student can see where a course sits in the overall program |
| **Course Registration** | The prerequisite-gated selection flow described above |
| **Timetable** | Weekly schedule grid with `rowspan`-merged multi-hour blocks |
| **Transcript** | Seven semesters of completed coursework with per-semester breakdown |
| **Financial** | Tuition and payment status |

### Advisor

| Page | What it does |
|---|---|
| **Dashboard** | Advisee roster, profile details, and a month-view calendar |
| **Students Details** | Searchable student list with toggleable result panels — pick a student, choose whether to view their academic record, their timetable, or both |
| **Course Confirmation** | Queue of pending registrations, with a per-student detail view for approval |
| **Classes Timetables** | Schedules across eight class groups |
| **Class Schedules** | Institution-wide schedule view |

---

## Architecture notes

### Shared chrome without a build step

Every page needs the same navbar and sidebar. Rather than duplicating that markup across twenty files — where one nav change means twenty edits — the shared chrome is injected at runtime:

```html
<div id="loadNavbar"></div>
<div id="loadSidebar"></div>

<script src="js/load-navbar.js"></script>
<script src="js/load-sidebar.js"></script>
```

Each page then declares its own position in the navigation:

```html
<script>
  document.getElementById("sidebar-course-registration").className = "nav-link menu-active";
</script>
```

This is a partials pattern reached without a template engine, bundler, or framework — a pragmatic choice for a static project, and one that kept the navigation to a single source of truth per role. Advisor pages load `load-navbar-advisor.js` and `load-sidebar-advisor.js` instead, which is what keeps the two role experiences cleanly separated.

### Custom calendar widget

The advisor dashboard's month calendar is written from scratch in vanilla JavaScript rather than pulled from a library. It computes the first weekday of the month, emits leading empty cells to align the grid, renders each day into a CSS Grid layout, tags the current date for highlighting, and supports forward and backward month navigation:

```js
const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();

let dayOfWeek = firstDayOfMonth.getDay();
if (dayOfWeek === 0) dayOfWeek = 7;   // shift Sunday to end of week
```

### Timetable rendering

Weekly schedules use `rowspan` to merge consecutive time slots into single visual blocks, so a two-hour class reads as one block rather than two identical adjacent cells — the same way a printed timetable does.

---

## Design iteration

The repository preserves two generations of the interface, which is worth noting because the delta is the point.

**First iteration** — hand-written CSS (`style.css`), absolutely-positioned login boxes, a custom flexbox dashboard, the hand-rolled calendar. Everything built from nothing. It works, and it taught the layout fundamentals, but absolute positioning made it brittle across viewport sizes.

**Second iteration** — rebuilt on a Bootstrap admin design system, with DataTables for sortable and paginated tables, Select2 for searchable dropdowns, FullCalendar, and Chart.js. The page count roughly tripled and the visual consistency improved sharply, because the effort moved from reinventing layout primitives to modelling the actual domain.

The first-generation files are kept deliberately rather than deleted.

---

## Tech stack

| Layer | Technology |
|---|---|
| Markup & styling | HTML5, CSS3, Bootstrap 4 |
| Scripting | Vanilla JavaScript, jQuery 3.3.1 |
| Tables | DataTables (sorting, pagination) |
| Form controls | Select2 |
| Calendars | FullCalendar, plus a custom vanilla-JS month view |
| Charts | Chart.js |
| Utilities | Moment.js, Modernizr, Waypoints, CounterUp |

---

## Running locally

No build step and no dependencies to install — it is a static site.

```bash
git clone https://github.com/<your-username>/opencode-academy-portal.git
cd opencode-academy-portal
```

Serve it over HTTP rather than opening the files directly, since the runtime navbar and sidebar injection needs a proper origin:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.

### Demo credentials

Authentication is a client-side stub for demonstration only.

| Role | Identifier | Password |
|---|---|---|
| Student | `19701112` | `112233` |
| Advisor | `0975523` | `123` |

---

## Project structure

```
.
├── index.html                              # Student login (first iteration)
├── advlogin.html                           # Advisor login (first iteration)
├── login.html                              # Unified login (second iteration)
│
├── student-dashboard.html                  # ─┐
├── student-curriculum.html                  #  │
├── student-course-registration.html         #  ├─ Student experience
├── student-timetable.html                   #  │
├── student-transcript.html                  # ─┘
│
├── advisor-dashboard.html                   # ─┐
├── advisor-students-details.html            #  │
├── advisor-students-results.html            #  ├─ Advisor experience
├── advisor-course-confirmation.html         #  │
├── advisor-course-confirmation-details.html #  │
├── advisor-classes-timetables.html          # ─┘
│
├── load-navbar.js / load-sidebar.js         # Shared chrome, student
├── load-navbar-advisor.js / ...             # Shared chrome, advisor
├── style.css                                # Custom styles
└── ...                                      # First-iteration pages, vendor libraries
```

---

## Limitations

Stated plainly, because knowing where a prototype ends is part of having built one.

- **No backend.** All data is hardcoded in the markup. Nothing persists between page loads.
- **Authentication is decorative.** Credentials are compared in client-side JavaScript, which means they are visible to anyone who opens DevTools. This is a demo stub, not a security mechanism, and would be replaced entirely by server-side session handling.
- **Asset paths need restructuring.** Pages reference `css/`, `js/`, `img/`, and `fonts/` directories. The repository currently stores these files flat at the root, so styles and scripts will not resolve until the folders are recreated.
- **Registration state is not wired end to end.** The prerequisite gating and approval stages are modelled in the markup and partially in script, but selections do not yet flow through to the advisor's confirmation queue as live data.
- **Markup hygiene.** Several tables contain unclosed `<tr>` elements and duplicate `id` attributes, and one page (`record.html`) is an empty placeholder.
- **Filenames are inconsistent.** A mix of spaced, camelCase, and kebab-case names across the two iterations; one file with a space in its name breaks a link.
