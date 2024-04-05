const Weekdays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  
  const workout = [
    {
      part: "Upper Body",
      chest: ["Push-Ups", "Bench Press", "Incline Dumbbell Press", "Chest Flyes"],
      back: ["Pull-Ups", "Deadlifts", "Bent-Over Rows", "Lat Pulldowns"],
      shoulders: [
        "Front-Squat",
        "Overhead Press",
        "Lateral Raises",
        "Front Raises",
        "Shrugs",
      ],
    },
    {
      part: "Lower Body",
      legs: ["Squats", "Lunges", "Deadlifts", "Leg Press", "Leg Curls"],
      calves: ["Standing Calf Raises", "Seated Calf Raises"],
    },
    {
      part: "Core",
      core: [
        "Planks",
        "Abdominal Crunches",
        "Leg Raises",
        "Bicycle Crunches",
        "Russian Twists",
      ],
    },
    {
      part: "Cardio",
      cardio: [
        "Jogging",
        "Running",
        "Cycling",
        "Swimming",
        "Circuit Training",
        "HIIT",
        "Yoga",
      ],
    },
  ];
  
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
  
  // function workouts(workout) {
  //   const workoutDiv = document.getElementById("workout");
  //   workout.forEach((element) => {
  //     let optionElement = document.createElement("button");
  //     optionElement.textContent = element.part;
  //     optionElement.classList.add("buttonWorkOutPart");
  //     workoutDiv.appendChild(optionElement);
  //   });
  // }



  function fillInTheDayBox(day, workout) {
    // let selectBodyPart = document.createElement("select");
    
    // workout.forEach((element) => {
    //   console.log(element);
    //   let optionElement = document.createElement("option");
    //   optionElement.value = element.part;
    //   optionElement.textContent = element.part;
    //   selectBodyPart.appendChild(optionElement);
    // });
    // day.appendChild(selectBodyPart);
    const divPart = document.createElement("div");
    divPart.setAttribute('id', 'WorkoutPart')
    day.appendChild(divPart);
    workout.forEach((element) => {
        let optionElement = document.createElement("button");
        optionElement.textContent = element.part;
        optionElement.classList.add("buttonWorkOutPart");
        divPart.appendChild(optionElement);
      });


    const divButton = document.createElement("div");
    divButton.setAttribute('id', 'ClearOrRemoveBtn')
    day.appendChild(divButton);

    let saveDay = document.createElement("button");
    saveDay.textContent = "Save";
    saveDay.classList.add("buttonWorkOutSave")
    divButton.appendChild(saveDay);

    let removeDay = document.createElement("button");
    removeDay.textContent = "Remove day";
    removeDay.classList.add("buttonWorkOutRemove")
    divButton.appendChild(removeDay);

  }


  // Create filled for choosen week day
  function createDayPlanner(dayName,workout) {
    const day = document.createElement("div");
    day.classList.add("dayInPlanner");
    // day.textContent = dayName.innerText;

    const h2day = document.createElement("h2");
    h2day.textContent = dayName.innerText;

    document.getElementById("planner").appendChild(day);
    day.appendChild(h2day);

    fillInTheDayBox(day,workout); 
  }

weekdays(Weekdays);
// workouts(workout); 


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
    createDayPlanner(event.target,workout);
    return;
    }}
});

// Remove all week
document.getElementById("removeAll").addEventListener("click", function(e) {
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

// Click on Workouts button inside day div
document.getElementById("planner").addEventListener("click", function (event) {
  event.preventDefault();
  const clickedElement = event.target;

  if (
    clickedElement.nodeName === "BUTTON" &&
    clickedElement.closest(".dayInPlanner") && clickedElement.closest(".buttonWorkOutPart")
  ) {
    // Button inside day div is clicked
    console.log("Button inside day div is clicked");
  

    // Perform further actions if needed
  }
});

//Click on Workouts Remove day button inside day div
document.getElementById("planner").addEventListener("click", function (event) {
  event.preventDefault();
  const clickedElement = event.target;

  if (
    clickedElement.nodeName === "BUTTON" &&
    clickedElement.closest(".dayInPlanner") && clickedElement.closest(".buttonWorkOutRemove")
  ) {

    const div = document.getElementById("ClearOrRemoveBtn").parentElement;
     div.remove();
     const weekDaysButton = days.querySelectorAll(".buttonDay");
     weekDaysButton.forEach(element => {
         element.classList.remove("choosenDay");
     });
  }
});

//Click on Workouts Save day button inside day div
document.getElementById("planner").addEventListener("click", function (event) {
  event.preventDefault();
  const clickedElement = event.target;

  if (
    clickedElement.nodeName === "BUTTON" &&
    clickedElement.closest(".dayInPlanner") && clickedElement.closest(".buttonWorkOutSave")
  ) {
    // Button inside day div is clicked
    console.log("Button Save inside day div is clicked");

    // Perform further actions if needed
  }
});

//Click on Workouts Clear day button inside day div
document.getElementById("planner").addEventListener("click", function (event) {
  event.preventDefault();
  const clickedElement = event.target;

  if (
    clickedElement.nodeName === "BUTTON" &&
    clickedElement.closest(".dayInPlanner") && clickedElement.closest(".buttonWorkOutClear")
  ) {
    // Button inside day div is clicked
    console.log("Button Clear inside day div is clicked");

    // Perform further actions if needed
  }
});