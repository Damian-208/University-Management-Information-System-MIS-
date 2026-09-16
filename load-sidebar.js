// active element
// <a href="class-routine.html" class="nav-link menu-active"><i class="flaticon-calendar"></i><span>Name</span></a>\
function loadSidebar(){
    document.getElementById("loadSidebar").innerHTML = ('\
    <div class="sidebar-main sidebar-menu-one sidebar-expand-md sidebar-color">\
        <div class="mobile-sidebar-header d-md-none">\
            <div class="header-logo">\
                <a href="index.html"><img src="img/logo1.png" alt="logo"></a>\
            </div>\
        </div>\
        \
        <div class="sidebar-menu-content">\
            <ul class="nav nav-sidebar-menu sidebar-toggle-view" >\
                <li class="nav-item">\
                    <a id="sidebar-dashboard" href="student-dashboard.html" class="nav-link"><i class="flaticon-dashboard"></i><span>Dashboard</span></a>\
                </li>\
                <li class="nav-item" id="Curriculum">\
                    <a id="sidebar-curriculum" href="student-curriculum.html" class="nav-link"><i class="flaticon-technological"></i><span>Curriculum</span></a>\
                </li>\
                <li class="nav-item">\
                    <a id="sidebar-course-registration" href="student-course-registration.html" class="nav-link"><i class="flaticon-books"></i><span>Course Registration</span></a>\
                <li class="nav-item">\
                    <a id="sidebar-timetable" href="student-timetable.html" class="nav-link"><i class="flaticon-calendar"></i><span>Timetable</span></a>\
                </li>\
                <li class="nav-item">\
                    <a id="sidebar-transcript" href="student-transcript.html" class="nav-link"><i class="flaticon-shopping-list"></i><span>Transcript</span></a>\
                </li>\
                \
                <li class="nav-item">\
                    <a id="sidebar-logout" href="login.html" class="nav-link"><i class="flaticon-turn-off"></i><span>Logout</span></a>\
                </li>   \
                <li><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br></li> \
            </ul>\
        </div>\
    </div>')
        
}
loadSidebar();
