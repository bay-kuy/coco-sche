import { Calendar} from '@fullcalendar/core';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid'


document.addEventListener('turbolinks:load', function() {
  var calendarEl = document.getElementById('calendar');

  var calendar = new Calendar(calendarEl, {
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

    dateClick: function(info){
    },
    eventClick: function(info){
    },
    eventClassNames: function(arg){
    },
    dateClick: function(info){
            const year  = info.date.getFullYear();
            const month = (info.date.getMonth() + 1);
            const day   = info.date.getDate();

            $.ajax({
                type: 'GET',
                url:  '/events/new',
            }).done(function (res) {
                $('.modal-body').html(res);

                $('#event_start_1i').val(year);
                $('#event_start_2i').val(month);
                $('#event_start_3i').val(day);

                $('#event_end_1i').val(year);
                $('#event_end_2i').val(month);
                $('#event_end_3i').val(day);


                $('#modal').fadeIn();

            }).fail(function (result) {
                alert("failed");
            });
    },

    });

  calendar.render();
});