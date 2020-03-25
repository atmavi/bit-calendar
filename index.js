
let $all= el => document.querySelectorAll(el);
let $= el => document.querySelector(el);


//FORMAT MONTH NAME
function monthName(date) {
    let mOptions = { month: 'long'};
    return new Intl.DateTimeFormat('en-US', mOptions).format(date);
}

//header
let headerYear= $('.header__year');
headerYear.textContent= new Date().getFullYear();

let headerMonth= $('.header__month');
headerMonth.textContent= monthName(new Date);

let days= $all('.day');

//SET THE DAYS OF THE MONTH (NUMBERS)
days.forEach((day, index)=> {
    day.textContent=index+1;
});

