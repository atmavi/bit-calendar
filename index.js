
let $= el => document.querySelectorAll(el);
let days= $('.day');

//SET THE DAYS OF THE MONTH (NUMBERS)
days.forEach((day, index)=> {
    day.textContent=index+1;
});

