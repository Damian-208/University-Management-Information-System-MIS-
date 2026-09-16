# University-Management-Information-System-MIS-
Full-stack academic portal featuring role-based dashboards for students and advisors, dynamic course registration, attendance tracking, and schedule visualization using JavaScript (ES6+), jQuery, DataTables, FullCalendar, and Bootstrap.

# University Academic & Management Information System (MIS)

## 📌 Executive Summary
The **Academic & Management Information System (MIS)** is a full-stack administrative platform engineered to streamline university workflows, automated course registration, and student-advisor interactions[cite: 1]. Designed with a role-based access architecture, the system provides separate operational portals for **Academic Advisors** and **Students** to manage course loads, verify grades, track financial statuses, and manage class schedules[cite: 1].

The platform emphasizes lightweight, performant frontend architecture—utilizing asynchronous script loaders, data tables, and dynamic visual calendar engines without relying on heavy frontend framework overhead[cite: 1].

---

## 🛠️ Tech Stack & Key Libraries

* **Core Stack:** HTML5, Modern CSS3, JavaScript (ES6+)[cite: 1]
* **UI Scaffolding & Layout:** Bootstrap, Popper.js, Modernizr[cite: 1]
* **Data Grids & Table Management:** DataTables, Select2[cite: 1]
* **Scheduling & Timetables:** FullCalendar, Moment.js, Datepicker[cite: 1]
* **Data Visualization & Analytics:** Chart.js, jQuery CounterUp[cite: 1]
* **Dynamic Loading Architecture:** Custom JavaScript script modularization (`load-navbar.js`, `load-sidebar-advisor.js`)[cite: 1]

---

## 🚀 Role-Based Features & System Architecture

### 🎓 Student Self-Service Portal
* **Interactive Student Dashboard:** Real-time visibility into active semester modules, academic notifications, and weekly event timetables (`student-dashboard.html`, `STD dashboard.html`)[cite: 1].
* **Course Registration Engine:** Interactive module selection interface with dropdown query filters and form validations (`student-course-registration.html`)[cite: 1].
* **Academic Transcript & Progress Evaluation:** Dynamic grade tracker providing historical credit evaluation and performance metrics (`student-transcript.html`)[cite: 1].
* **Curriculum & Schedule Viewers:** Structured view of degree requirements and weekly timetable routines (`student-curriculum.html`, `student-timetable.html`)[cite: 1].

### 👨‍🏫 Advisor Administrative Portal
* **Advisor Operations Center:** Centralized analytics dashboard displaying aggregate student stats, calendar alerts, and pending action items (`advisor-dashboard.html`, `advdash.html`)[cite: 1].
* **Course Approval Module:** Dedicated workflow interface for reviewing, approving, or flagging student course registration requests (`advisor-course-confirmation.html`, `advisor-course-confirmation-details.html`)[cite: 1].
* **Student Performance Directory:** Detailed roster directory for inspecting student profiles, academic histories, and semester results (`advisor-students-details.html`, `advisor-students-results.html`)[cite: 1].
* **Class & Schedule Management:** Integrated scheduling portal for allocating lecture hours and managing module timetables (`advisor-classes-timetables.html`)[cite: 1].

### 🔒 Shared Modules & Administrative Utilities
* **Authentication Gateways:** Secure login interfaces customized for faculty and student entry paths (`login.html`, `advlogin.html`)[cite: 1].
* **Attendance & Roster Tracking:** Administrative sheets for logging class rosters and student attendance records (`RecordSheet.html`, `roster.html`)[cite: 1].
* **Financial Overview:** Account view detailing fee structures, outstanding balances, and tuition payments (`finanical.html`)[cite: 1].

---

## 📂 Repository File Structure

```text
├── assets & vendor scripts
│   ├── Chart.min.js                  # Analytics charting library[cite: 1]
│   ├── fullcalendar.min.js           # Event schedule & calendar rendering engine[cite: 1]
│   ├── jquery.dataTables.min.js      # Advanced table sorting & search library[cite: 1]
│   ├── select2.min.js                # Enhanced input selection & drop-down queries[cite: 1]
│   └── bootstrap.min.js              # Layout scaffolding & UI components[cite: 1]
├── Advisor Modules
│   ├── advdash.html                  # Advisor overview dashboard[cite: 1]
│   ├── advisor-course-confirmation.html # Course approval workflow[cite: 1]
│   └── advisor-students-results.html # Student results evaluation interface[cite: 1]
├── Student Modules
│   ├── student-dashboard.html        # Main student portal page[cite: 1]
│   ├── student-course-registration.html # Module selection tool[cite: 1]
│   └── student-transcript.html       # Academic history display[cite: 1]
└── Architecture & Loaders
    ├── load-navbar.js                # Dynamic navigation loader[cite: 1]
    ├── load-sidebar-advisor.js       # Asynchronous sidebar injector[cite: 1]
    └── main.js                       # Primary application runtime script[cite: 1]
