  const calendar = document.querySelector('.calendar');
  const now = new Date();
  const timeZone = 'ET';

  const monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
  ];

  const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  //*** DATA ***//
  const data = [
      ['Real Estate Prelicensing', new Date('7/12/2021'), '6:00 pm', 'M, T, W', 'Phoenix', 'Sold Out', '/real-estate-licensing/california/#live-stream-packages-container'],
      ['Real Estate Prelicensing', new Date('8/23/2021'), '11:00 am', 'M, T, W', 'Tucson', 'Register', '/real-estate-licensing/california/#live-stream-packages-container'],
      ['Real Estate Prelicensing', new Date('9/11/2021'), '11:00 am', 'Sat, Sun', 'Tempe', 'Register', '/real-estate-licensing/california/#live-stream-packages-container'],
      ['Real Estate Prelicensing', new Date('9/20/2021'), '6:00 pm', 'M, T, W', 'Tempe', 'Register', '/real-estate-licensing/california/#live-stream-packages-container']
  ];

  // Filter data into new array of upcoming courses
  const upcomingCourses = data.filter(upcomingCourse => now < upcomingCourse[1]);

  // Add schedule headline and sub-headline
  const headlines = `
    <div class="schedule-headline-container">
      <h3 class="schedule-headline-title">Register for Your Livestream Course</h3>
      <p class="schedule-headline-subtitle">Get great real estate education in real time as you enjoy the benefits of a classroom experience from the comfort of home. Select the livestream course option that works best for you.</p>
    </div>
  `;
  calendar.insertAdjacentHTML('beforebegin', headlines);

  // Render front end markup
  const createMarkup = function createMarkup(upcomingCourses) {
      upcomingCourses.forEach((upcomingCourse, index) => {

          if(index > 5) return; // Set limit for number of calendar entries

          const markup = `
          <div class="calendar__single-container">
               <div class="calendar__single-content-container">
                  
                  <div class="calendar__single-content-container--inner">
                      <div class="calendar__date-container">
                          <div class="calendar__date--month">${monthNames[upcomingCourse[1].getMonth()]}</div>
                          <div class="calendar__date--day">${upcomingCourse[1].getDate()}</div>
                      </div>
                  </div>

                  <div class="calendar__content-rows-container">

                      <div class="calendar__content-row calendar__content-row-1">
                          <p class="calendar__content-row-text">
                              <span class="calendar__content-row--date">${dayNames[upcomingCourse[1].getDay()]}, ${monthNames[upcomingCourse[1].getMonth()]} ${upcomingCourse[1].getDate()}</span> @ 
                              <span class="calendar__content-row--time">${upcomingCourse[2]}</span> <span class="calendar__content-row--time-zone">${timeZone}</span>
                          </p>
                      </div>

                      <div class="calendar__content-row calendar__content-row-2">
                          <h4 class="calendar__course-title">${upcomingCourse[0]}</h4>
                      </div>

                      <div class="calendar__content-row calendar__content-row-3">
                          <div class="calendar__bubble-container">
                              <div class="calendar__bubble"><img class="calendar__bubble-icon" src="/wp-content/uploads/2021/07/Calendar-icon.png"> ${upcomingCourse[3]}</div>
                          </div>
                          <div class="calendar__bubble-image-container">
                            <img src="https://www.alliedschools.com/wp-content/uploads/2021/07/Discount-Ribbon2.png">
                          </div>
                          <!--<div class="calendar__bubble-container">
                              <div class="calendar__bubble"><i class="fas fa-location-arrow"></i> ${upcomingCourse[4]}</div>
                          </div>-->
                      </div>

                  </div>

              </div>
                            
              <div class="btn-container">
                  <a href="${upcomingCourse[6]}" class="btn ${upcomingCourse[5] === 'Sold Out' ? 'btn-disabled' : ''}">${upcomingCourse[5] === 'Sold Out' ? 'Sold Out' : 'Register'}</a>
              </div>
                
          </div>`;

          // Inject markup onto page
          calendar.insertAdjacentHTML('beforeend', markup);

      });

  };
  createMarkup(upcomingCourses);