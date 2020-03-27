let $all= el => document.querySelectorAll(el);
let $= el => document.querySelector(el);

// HEADER TEXT
function headerText(m, y) {
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

    //GET PREV MONTH
    let prevMonth= daysInMonth(m-1,y);

    daysOnMonth.forEach((day, index)=> {
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
}


$('.date-jump__btn').addEventListener('click', ()=> {
    let mm= $('.date-jump__month').value;
    let yyyy= $('.date-jump__year').value;
    console.log(mm, yyyy);
    setDaysInCalendar(mm, yyyy);
});


////////////////////////////
WIP
////////////////////////////
// $('.day--prev').forEach(day =>{
//     day.addEventListener('click', ()=> {
//         view.mm--;
//     })
// })



let today= new Date();
let view= {
    mm: today.getMonth()+1,
    yy: today.getFullYear()
}

console.log(view.mm, view.yy)

window.onload= setDaysInCalendar(view.mm, view.yy);
