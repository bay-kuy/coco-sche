import { Calendar} from '@fullcalendar/core';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';


document.addEventListener('turbolinks:load', () => {
  const calendarEl = document.getElementById('calendar');

  const calendar = new Calendar(calendarEl, {
    themeSystem: 'bootstrap5',
    plugins: [ timeGridPlugin, interactionPlugin ],

    locale: 'ja',
    timeZone: 'Asia/Tokyo',
    firstDay: 1,
    headerToolbar: {
      start: '',
      center: 'title',
      end: 'today prev,next' 
    },
    expandRows: true,
    stickyHeaderDates: true,
    buttonText: {
       today: '今日'
    }, 
    allDayText: '終日',
    height: "auto",
    });

  const submit = document.getElementById("submit");
  submit.addEventListener("click", (e) => {
    e.preventDefault();
    const form = document.getElementById("form");
    const formData = new FormData(form);
    const XHR = new XMLHttpRequest();
    XHR.open("POST", "/schedules", true);
    XHR.responseType = "json";
    XHR.send(formData);
  });

  calendar.render();
  
});