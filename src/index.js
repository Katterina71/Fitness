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
      exercises: [
        "Push-Ups",
        "Bench Press",
        "Incline Dumbbell Press",
        "Chest Flyes",
        "Pull-Ups",
        "Deadlifts",
        "Bent-Over Rows",
        "Lat Pulldowns",
      ],
    },
    {
      part: "Lower Body",
      exercises: ["Squats", "Lunges", "Deadlifts", "Leg Press", "Leg Curls", "Standing Calf Raises", "Seated Calf Raises"],
  
    },
    {
      part: "Core",
      exercises: [
        "Planks",
        "Abdominal Crunches",
        "Leg Raises",
        "Bicycle Crunches",
        "Russian Twists",
      ],
    },
    {
      part: "Cardio",
      exercises: [
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
const registration = document.getElementsByClassName("registration");

//array for choosen exsecises:
let exercisesArray = [];

  
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
  

  // Add choosen day of week and create div with elements
  function fillInTheDayBox(day, workout) {
    // Add buttons with workout's types
    const divPart = document.createElement("div");
    const firstP = day.querySelector("h2"); // Gets the first <p> element within the <div>
    const firstPText = firstP.textContent;
    divPart.setAttribute("id", `${firstPText} workout`);
  
    day.appendChild(divPart);
    workout.forEach((element) => {
        let optionElement = document.createElement("button");
        optionElement.textContent = element.part;
        optionElement.classList.add("buttonWorkOutPart");
        divPart.appendChild(optionElement);
      });

    // Add div for future excesises block
    const divButton = document.createElement("div");
    divButton.setAttribute('id', 'ClearOrRemoveBtn')
    day.appendChild(divButton);

    

    // Add div with buttons Save and Remove Day
    let exercisesDiv = document.createElement("div");
    exercisesDiv.classList.add("excercises")
    divButton.appendChild(exercisesDiv);

    // Add training plan
    let trainingPlan = document.createElement("div");
    trainingPlan.classList.add("trainingPlan")
    divButton.appendChild(trainingPlan);

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
    day.setAttribute("id", `${dayName.innerText}`);

    const h2day = document.createElement("h2");
    h2day.textContent = dayName.innerText;

    document.getElementById("planner").appendChild(day);
    day.appendChild(h2day);

    fillInTheDayBox(day,workout); 
  }


  // Add excesises 
  function chooseWorkout(workoutName, workout,  exerciseDiv) {

    
    const selectWorkout = workout.find((element) => element.part === workoutName);
    // console.log(selectWorkout);

    // Check if workout was found
    if (!selectWorkout) {
      console.error("Workout not found:", workoutName);
      return; // Exit the function if no workout is found
    }
  
    const exercisesDiv = document.createElement("div")
    // exercisesDiv.setAttribute = ('id', `${selectWorkout}`)
    exercisesDiv.setAttribute = ('id', 'training');
    
    const workoutPart = document.createElement("p");
    workoutPart.innerText = selectWorkout.part;
    exercisesDiv.appendChild(workoutPart);

    const exercises = selectWorkout.exercises;
    exercises.forEach((exercise) => {
      let optionElement = document.createElement("button");
      optionElement.textContent = exercise;
      optionElement.classList.add("buttonExercises");
      optionElement.setAttribute('id', `${exercise}`)
      exercisesDiv.appendChild(optionElement);
    });

    exerciseDiv.appendChild(exercisesDiv);
  }


  function saveWorkout(exerciseDiv, trainingPlan) {
  // const header = document.createElement('h2');
  // header.textContent = "My training plan: ";
  // trainingPlan.appendChild(header);

    const exercisesAll = Array.from(exerciseDiv.children);
  
    exercisesAll.forEach((element) => {
      const exercisesDiv = Array.from(element.children);

      exercisesDiv.forEach((elementButton) => {
        // console.log("elementButton", elementButton);
  
        if (elementButton.classList.contains("choosenExercise")) {
          let exercises = document.createElement("p");
          exercises.textContent = elementButton.innerText;
          trainingPlan.appendChild(exercises);
        }
      });
    });
    trainingPlan.style.padding = "20px"
  }



weekdays(Weekdays);


// Fill div days with Week Days from Array
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

// Click on WORKOUT button inside day div
document.getElementById("planner").addEventListener("click", function (event) {
  event.preventDefault();
  const clickedElement = event.target;

  if (
    clickedElement.nodeName === "BUTTON" &&
    clickedElement.closest(".dayInPlanner") && clickedElement.closest(".buttonWorkOutPart")
  ) {
  // console.log("Button inside day div is clicked" + clickedElement.textContent);

  // const parentDiv = clickedElement.parentNode;
  // console.log(`Parent div is: ` + parentDiv);
  // console.log(`Parent div is id: ` + parentDiv.id);
  // const parentDivUpper = parentDiv.parentNode;
  // console.log(`Parent div upper is: ` + parentDivUpper);
  // console.log(`Parent div upper is id: ` + parentDivUpper.id);

  clickedElement.disabled = true;

  const parentDiv = clickedElement.parentNode.parentNode;
  const parentDivElement = document.getElementById(parentDiv.id);
  const exerciseDiv = parentDivElement.querySelector(".excercises");

  chooseWorkout(clickedElement.textContent, workout,  exerciseDiv);
  
  }
});

// Choose exersices 
document.getElementById("planner").addEventListener("click", function (event) {
  event.preventDefault();
  const clickedElement = event.target;
  if (
    clickedElement.nodeName === "BUTTON" &&
    clickedElement.closest(".dayInPlanner") && clickedElement.closest(".buttonExercises") || clickedElement.closest(".choosenExercise")
  ) {
    if (event.target.classList.contains("choosenExercise")) { 
      event.target.classList.remove("choosenExercise");
      event.target.classList.add("buttonExercises"); return}
    else {
    event.target.classList.remove("buttonExercises");
    event.target.classList.add("choosenExercise");
    return;
    }}
});

//Click on Workouts REMOVE DAY button inside day div
document.getElementById("planner").addEventListener("click", function (event) {
  event.preventDefault();
  const clickedElement = event.target;

  if (
    clickedElement.nodeName === "BUTTON" &&
    clickedElement.closest(".dayInPlanner") && clickedElement.closest(".buttonWorkOutRemove")
  ) {
    const dayDiv = clickedElement.closest(".dayInPlanner");
        dayDiv.remove();
        const weekDaysButton = days.querySelectorAll(".buttonDay");
        weekDaysButton.forEach(element => {
            element.classList.remove("choosenDay");
        });
  }
});

//Click on Workouts SAVE day button inside day div
document.getElementById("planner").addEventListener("click", function (event) {
  event.preventDefault();
  const clickedElement = event.target;
  if (
    clickedElement.nodeName === "BUTTON" &&
    clickedElement.closest(".dayInPlanner") && clickedElement.closest(".buttonWorkOutSave")
  ) {
    // console.log("Button Save inside day div is clicked");

  const parentDiv = clickedElement.parentNode.parentNode;
  const parentDivElement = document.getElementById(parentDiv.id);
  const exerciseDiv = parentDivElement.querySelector(".excercises");
  const trainingPlan = parentDivElement.querySelector(".trainingPlan");
  
 if (!trainingPlan.querySelector('h2')) 
 { const header = document.createElement('h2');
 header.textContent = "My training plan: ";
 trainingPlan.appendChild(header);}



  saveWorkout(exerciseDiv, trainingPlan);

  while (exerciseDiv.firstChild) {
    exerciseDiv.removeChild(exerciseDiv.firstChild);
  }
  // clickedElement.disabled = true;
  }
});

//Click on Workouts CLEAR day button inside day div
// document.getElementById("planner").addEventListener("click", function (event) {
//   event.preventDefault();
//   const clickedElement = event.target;
//   if (
//     clickedElement.nodeName === "BUTTON" &&
//     clickedElement.closest(".dayInPlanner") && clickedElement.closest(".buttonWorkOutClear")
//   ) {
//     console.log("Button Clear inside day div is clicked");
//   }
// });



//validation form
window.onload = function() {
  const form = document.getElementById('registrationForm');
  const printButton = document.querySelector('.buttonPrint');
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const agreementCheckbox = document.getElementById('agreement');
  const emailError = document.getElementById('emailError'); // Ensure this element exists in your HTML

  // Function to validate email format
  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
    return re.test(String(email).toLowerCase());
  }

  // Function to check the form's validity
  function checkFormValidity() {
    const isEmailValid = validateEmail(emailInput.value.trim());
    const isFormFilled = nameInput.value.trim() && emailInput.value.trim() && agreementCheckbox.checked;

    if (!isFormFilled || !isEmailValid) {
      let message = "Please make sure all fields are filled.";
      if (!isEmailValid) {
        message += " Also, ensure the email address is correct.";
        emailInput.style.borderColor = 'red'; 
        if(emailError) emailError.style.display = 'block'; // Show error message if email is invalid
      }
      window.alert(message); // Show alert with the validation message
      return false; // Form is not valid
    } else {
      if(emailError) emailError.style.display = 'none'; 
      emailInput.style.borderColor = 'initial'; 
      return true; // Form is valid
    }
  }

  // Remove disabling/enabling logic from input and checkbox listeners
  nameInput.addEventListener('input', function() {
    emailInput.style.borderColor = 'initial'; 
  });
  
  emailInput.addEventListener('input', function() {
    emailInput.style.borderColor = 'initial'; // Reset border color when user starts typing
  });
  
  // Adjust functionality to the print button to check form validity before printing
  printButton.addEventListener('click', function() {
    if (checkFormValidity()) {
      window.print(); 
    }
  });
};
