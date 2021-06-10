const calendar = document.querySelector('.calendar');
const now = new Date();
const timeZone = 'ET';

const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

//*** DATA ***//
const data = [
    ['Real Estate Prelicensing', new Date('5/5/2021'), '12:00 pm', 'M, W, F', 'Phoenix'],
    ['Real Estate Prelicensing', new Date('6/3/2021'), '10:00 am', 'M, T, Th', 'Tucson'],
    ['Real Estate Prelicensing', new Date('7/3/2021'), '11:00 am', 'T, Th', 'Tempe'],
    ['Real Estate Prelicensing', new Date('7/23/2021'), '11:00 am', 'M, T, Th', 'Tucson'],
    ['Real Estate Prelicensing', new Date('8/5/2021'), '11:00 am', 'M, T, Th, F', 'Tucson'],
    ['Mortgage Broker Licensing', new Date('8/10/2021'), '9:00 am', 'M, T, Th, F', 'Phoenix'],
    ['Continuing Education', new Date('9/6/2021'), '3:00 pm', 'M, Th, F', 'Phoenix'],
    ['Real Estate Prelicensing', new Date('9/29/2021'), '5:00 pm', 'M, T, Th, F', 'Tucson'],
    ['Real Estate Prelicensing', new Date('10/25/2021'), '6:00 pm', 'M, W, F', 'Tempe']
];

// Filter data into new array of upcoming courses
const upcomingCourses = data.filter(upcomingCourse => now < upcomingCourse[1]);

// Render front end markup
const createMarkup = function createMarkup(upcomingCourses) {
    upcomingCourses.forEach((upcomingCourse, index) => {

        if(index > 7) return; // Set limit for number of calendar entries

        const markup = `
        <div class="calendar__single-container">

            <div class="calendar__single-content-container">

                <div class="calendar__date-container">
                    <div class="calendar__date--month">${monthNames[upcomingCourse[1].getMonth()]}</div>
                    <div class="calendar__date--day">${upcomingCourse[1].getDate()}</div>
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
                            <div class="calendar__bubble"><i class="fas fa-calendar-alt"></i> ${upcomingCourse[3]}</div>
                        </div>
                        <div class="calendar__bubble-container">
                            <div class="calendar__bubble"><i class="fas fa-location-arrow"></i> ${upcomingCourse[4]}</div>
                        </div>
                    </div>

                </div>

            </div>
                        
            <div class="btn-container">
                <a href="#" class="btn">Register Now</a>
            </div>
            
        </div>`;

        // Inject markup onto page
        calendar.insertAdjacentHTML('beforeend', markup);   

    // }
    });

};
createMarkup(upcomingCourses);