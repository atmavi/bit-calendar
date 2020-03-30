let $all= el => document.querySelectorAll(el);
let $= el => document.querySelector(el);

let today= new Date();
let view= {
    mm: today.getMonth()+1,
    yy: today.getFullYear()
};

// MOVING TO NEXT AND PREV MONTH
let nav= {
    next: function() {
        view.mm++;
            if(view.mm>= 13){
                view.mm=1;
                view.yy++;
        }
        setDaysInCalendar(view.mm, view.yy);
    },
    prev: function() {
        view.mm--;
            if(view.mm<= 0){
                view.mm=12;
                view.yy--;
            }
        setDaysInCalendar(view.mm, view.yy);
    }
}

window.onload= setDaysInCalendar(view.mm, view.yy);


// HEADER TEXT
function headerText(m, y) {
    let date= new Date(`${m} 1, ${y}`);
    let headerYear= $('.header__year');
    headerYear.textContent= date.getFullYear();

    let headerMonth= $('.header__month');
    headerMonth.textContent= monthName(date);
}

// NAV BUTTONS
$('.nav__left').addEventListener('click', ()=> nav.prev());
$('.nav__right').addEventListener('click', ()=> nav.next());

//FORMAT MONTH NAME
function monthName(date) {
    let mOptions = { month: 'long'};
    return new Intl.DateTimeFormat('en-US', mOptions).format(date);
}

//GET DAYS IN MONTH
function daysInMonth (month, year) { 
    return new Date(year, month, 0).getDate();
} 

//GET DAY ON THE WEEK OF THE FIRST DATE
function firstDay(m, y, d=1) {
    return new Date(`${m} ${d} ${y}`).getDay();
}


//SET THE DAYS OF THE MONTH (NUMBERS)
function setDaysInCalendar(m, y) {
    let days = daysInMonth(m,y);
    let start = firstDay(m,y);

    headerText(m,y);

    let numOfBox= Math.ceil((days+start)/7);
    let calDays= '';
    for(let i=0; i<numOfBox*7; i++){
        calDays+= '<div class="day"></div>';
    }
    $('.month-days').innerHTML=calDays;

    //GET PREV MONTH
    let prevMonth= daysInMonth(m-1,y);
    
    //SET DAYS TO CALENDAR
    $all('.day').forEach((day, index)=> {
        if(index<start){
            day.textContent= (prevMonth-(start-1))+index;
            day.classList.add('day--prev');
        }else if(index>=days+start){
            day.textContent= index-days+1;
            day.classList.add('day--next');
        }else{
            day.textContent= index-start+1;
            day.classList.add('day--active');
        }
    });
    // ADD CLICK EVENT ON EACH DATE FROM PREV MONTH
    $all('.day--prev').forEach(day => {
        day.addEventListener('click', ()=> {
            nav.prev();
        });
    });
    // ADD CLICK EVENT ON EACH DATE FROM NEXT MONTH
    $all('.day--next').forEach(day => {
        day.addEventListener('click', ()=> {
            nav.next();
        });
    });
}

$('.date-jump__btn').addEventListener('click', ()=> {
    let mm= $('.date-jump__month').value;
    let yyyy= $('.date-jump__year').value;
    setDaysInCalendar(mm, yyyy);
});