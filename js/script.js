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


    // Chat message sending logic for Group Chat
  const chatInput = document.getElementById('chatInput');
  const sendBtn = document.getElementById('sendBtn');
  const chatContainer = document.getElementById('chatContainer');

  // Utility function to get current time formatted as h:mm AM/PM
  function getCurrentTime() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;
    return `${hours}:${minutes < 10 ? '0' + minutes : minutes} ${ampm}`;
  }

  function sendMessage() {
    const messageText = chatInput.value.trim();
    if (messageText === "") return; // Do nothing if input is empty

    // Create new message element
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', 'sent');
    
    const messageContentDiv = document.createElement('div');
    messageContentDiv.classList.add('message-content');
    
    const messagePara = document.createElement('p');
    messagePara.textContent = messageText;
    
    const messageTimeSpan = document.createElement('span');
    messageTimeSpan.classList.add('message-time');
    messageTimeSpan.textContent = getCurrentTime();
    
    messageContentDiv.appendChild(messagePara);
    messageContentDiv.appendChild(messageTimeSpan);
    messageDiv.appendChild(messageContentDiv);
    
    // Append the new message to the chat container
    chatContainer.appendChild(messageDiv);

    // Clear input and scroll to bottom
    chatInput.value = "";
    chatContainer.scrollTop = chatContainer.scrollHeight;
  }

  // Send message on button click
  if (sendBtn) {
    sendBtn.addEventListener('click', sendMessage);
  }

  // Also send message on "Enter" key press
  if (chatInput) {
    chatInput.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        sendMessage();
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
  