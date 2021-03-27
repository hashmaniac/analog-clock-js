//declare clockhands variables
const secondHand = document.querySelector('.seconds-hand');
const minsHand = document.querySelector('.minute-hand');
const hourHand = document.querySelector('.hour-hand');

  //functions to rotate clock hands
  function setDate() {
    //get new date each day
    const now = new Date();
    //get the seconds of each day
    const seconds = now.getSeconds();
    //calculate the degrees for seconds (+ the initial 90 degrees set on css) 
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    //add rotate style the seconds hand
    //use back ticks `` to them the template literals
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    //get the minutes of each day
    const mins = now.getMinutes();
    //calculate the degrees for minutes + (the maximum degrees a second covers -this slows down the minute hand) + (the initial 90 degrees set on css)
    const minsDegrees = ((mins / 60) * 360) + ((seconds/60)*6) + 90;
    //add rotate style the minutea hand
    //use back ticks `` to them the template literals
    minsHand.style.transform = `rotate(${minsDegrees}deg)`;

    //get the hours of each day
    const hour = now.getHours();
    //calculate the degrees for hours + () + (the initial 90 degrees set on css)
    const hourDegrees = ((hour / 12) * 360) + ((mins/60)*30) + 90;
    //add rotate style the hour hand
    //use back ticks `` to them the template literals
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
  }
  //call the set date function for each 1000 millisecond interval
  setInterval(setDate, 1000);

  setDate();