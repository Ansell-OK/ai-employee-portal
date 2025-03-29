// script.js

document.addEventListener("DOMContentLoaded", function() {
    // ========== Sidebar Toggle ==========
    const sidebarToggle = document.getElementById('sidebarToggle');
    const sidebar = document.querySelector('.sidebar');
    
    if (sidebarToggle) {
      sidebarToggle.addEventListener('click', () => {
        sidebar.classList.toggle('show');
      });
    }
  
    // ========== Notification Dropdown ==========
    const notificationIcon = document.getElementById('notificationIcon');
    const notificationDropdown = document.getElementById('notificationDropdown');
  
    if (notificationIcon && notificationDropdown) {
      notificationIcon.addEventListener('click', () => {
        notificationDropdown.style.display =
          notificationDropdown.style.display === 'block' ? 'none' : 'block';
      });
      // Close dropdown if clicked outside
      document.addEventListener('click', (e) => {
        if (!notificationIcon.contains(e.target) && !notificationDropdown.contains(e.target)) {
          notificationDropdown.style.display = 'none';
        }
      });
    }
  
    // ========== FullCalendar Setup (Dashboard) ==========
    const calendarEl = document.getElementById('calendar');
    if (calendarEl) {
      // Example usage of FullCalendar
      let calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        headerToolbar: {
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay'
        },
        events: [
          // Sample events
          {
            title: 'Design Review',
            start: '2025-07-25T14:00:00'
          },
          {
            title: 'Team Lunch',
            start: '2025-07-26T12:00:00'
          },
          {
            title: 'Code Freeze',
            start: '2025-07-30'
          }
        ]
      });
      calendar.render();
    }
  });
  