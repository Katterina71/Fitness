const Weekdays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  
  const workout = {
    "Upper Body": {
      chest: [
        "Push-Ups", "Bench Press", "Incline Dumbbell Press", "Chest Flyes"
      ],
      back: ["Pull-Ups", "Deadlifts", "Bent-Over Rows", "Lat Pulldowns"],
      shoulders: [
        ("Front-Squat",
        "Overhead Press",
        "Lateral Raises",
        "Front Raises",
        "Shrugs")
      ]
    },
    "Lower Body": {
      legs: ["Squats", "Lunges", "Deadlifts", "Leg Press", "Leg Curls"],
      calves: ["Standing Calf Raises", "Seated Calf Raises"]
    },
    "Core":{
      core: [
        "Planks",
        "Abdominal Crunches",
        "Leg Raises",
        "Bicycle Crunches",
        "Russian Twists"
      ]
    }
    ,
    "Cardio": {
      cardio:[
        "Jogging",
        "Running",
        "Cycling",
        "Swimming",
        "Circuit Training",
        "HIIT",
        "Yoga"
      ]
    }
};
  
const days = document.getElementById("days");
const planner = document.getElementById("planner");
  // function randomWorkout() {
  //   return workout[Math.floor(Math.random() * workout.length)];
  // }
  
  // Add days on the page
  function weekdays(days) {
    const dFrag = document.createDocumentFragment();
    for (let i in days) {
      let day = document.createElement("button");
      day.classList.add("buttonDay");
      day.textContent = days[i];
      document.getElementById("days").appendChild(day);
    }
    document.getElementById("days").appendChild(dFrag);
  }
  
//   function fillInTheDayBox(dayName,day) 


  // Create filled for choosen week day
  function createDayPlanner(dayName) {
    const day = document.createElement("div");
    day.classList.add("dayInPlanner");
    // day.textContent = dayName.innerText;

    const h2day = document.createElement("h2");
    h2day.textContent = dayName.innerText;

    document.getElementById("planner").appendChild(day);
    day.appendChild(h2day);

    fillInTheDayBox(dayName,day) 
  }

weekdays(Weekdays); 


const weekDaysDiv = document.getElementById("days");
console.log(weekDaysDiv);
weekDaysDiv.addEventListener("click", function (event) {
  event.preventDefault();
  if (event.target.nodeName !== "BUTTON") {
    return;
  }
  else {
    if (event.target.classList.contains("choosenDay")) { return}
    else {
    event.target.classList.add("choosenDay");
    console.log(event.target.classList);
    createDayPlanner(event.target);
    return;
    }}
});

// Remove all week
document.getElementById("startPlanningBtn").addEventListener("click", function(e) {
    e.preventDefault();

   const allDays = planner.querySelectorAll(".dayInPlanner");
   allDays.forEach(element => {
       element.remove();
   });
   
   const weekDaysButton = days.querySelectorAll(".buttonDay");
   weekDaysButton.forEach(element => {
       element.classList.remove("choosenDay");
   });
}) 