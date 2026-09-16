// active element
// <a href="class-routine.html" class="nav-link menu-active"><i class="flaticon-calendar"></i><span>Name</span></a>\
function loadSidebar(){
    document.getElementById("loadSidebarAdvisor").innerHTML = ('\
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
                    <a id="sidebar-dashboard" href="advisor-dashboard.html" class="nav-link"><i class="flaticon-dashboard"></i><span>Dashboard</span></a>\
                </li>\
                <li class="nav-item" id="advisor-timetables">\
                    <a id="sidebar-students-details" href="advisor-students-details.html" class="nav-link"><i class="flaticon-technological"></i><span>Students Details</span></a>\
                </li>\
                <li class="nav-item">\
                    <a id="sidebar-course-confirmation" href="advisor-course-confirmation.html" class="nav-link"><i class="flaticon-shopping-list"></i><span>Course Confirmation</span></a>\
                </li>\
                <li class="nav-item" id=advisor-classes-timetables>\
                    <a id="sidebar-classes-timetables" href="advisor-classes-timetables.html" class="nav-link"><i class="flaticon-calendar"></i><span>Classes Timetables</span></a>\
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
