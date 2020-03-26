let $all= el => document.querySelectorAll(el);
let $= el => document.querySelector(el);

// HEADER TEXT
function headerText(m, y) {
    let d=1;
    let date= new Date(`${m} 1, ${y}`);

    let headerYear= $('.header__year');
    headerYear.textContent= date.getFullYear();

    let headerMonth= $('.header__month');
    headerMonth.textContent= monthName(date);
}

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

    

    //SET THE DAYS OF THE MONTH (NUMBERS)
    let daysOnMonth= $all('.day');
    let numbered= start+ days;

    daysOnMonth.forEach((day, index)=> {
        day.textContent=index<start|| index>=numbered ? '' : index-start+1;
    });
}


$('.date-jump__btn').addEventListener('click', ()=> {
    let mm= $('.date-jump__month').value;
    let yyyy= $('.date-jump__year').value;
    console.log(mm, yyyy);
    setDaysInCalendar(mm, yyyy);
});

function dateJump() {
    
    
}

let today= new Date();

// setDaysInCalendar(today.getMonth(), today.getFullYear());
setDaysInCalendar(10, 1995);
