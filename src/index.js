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
      excecises: [
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
      excecises: ["Squats", "Lunges", "Deadlifts", "Leg Press", "Leg Curls", "Standing Calf Raises", "Seated Calf Raises"],
  
    },
    {
      part: "Core",
      excecises: [
        "Planks",
        "Abdominal Crunches",
        "Leg Raises",
        "Bicycle Crunches",
        "Russian Twists",
      ],
    },
    {
      part: "Cardio",
      excecises: [
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
    divPart.setAttribute('id', 'WorkoutPart')
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
    let excercisesDiv = document.createElement("div");
    excercisesDiv.classList.add("excercises")
    divButton.appendChild(excercisesDiv);

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

    const h2day = document.createElement("h2");
    h2day.textContent = dayName.innerText;

    document.getElementById("planner").appendChild(day);
    day.appendChild(h2day);

    fillInTheDayBox(day,workout); 
  }



  function chooseWorkout(workoutName, workout,  exerciseDiv) {

    const selectWorkout = workout.find((element) => element.part === workoutName);

     // Check if workout was found
    if (!selectWorkout) {
      console.error('Workout not found:', workoutName);
      return; // Exit the function if no workout is found
    }
    
    const workoutPart = document.createElement("p");
    workoutPart.innerText = selectWorkout.part;
    exerciseDiv.appendChild(workoutPart);


    const exercises = selectWorkout.exercises; 
    exercises.forEach((exercise) => {
      let optionElement = document.createElement("button");
      optionElement.textContent = exercise;
      optionElement.classList.add("buttonExercise"); 
      exerciseDiv.appendChild(optionElement);
    });
  }


  // function chooseWorkout(workoutName, workout) {
  //   const checklistDiv = document.createElement("div");
  //   checklistDiv.classList.add("workoutChecklist");
  //   const selectWorkout = workout.find((element) => element.part === workoutName);
  //   const workoutPart = document.createElement("p")
  //   workoutPart.innerText = selectWorkout.part;
  //   checklistDiv.appendChild(workoutPart);
  
  //   console.log(selectWorkout);
  //   // Loop through each exercise in the workout
  //   const exercise = selectWorkout.excercises;
  //   exercise.forEach((exercise) => {
  //     console.log(`Inside for in loop for ${exercise}`);
  //     const checkbox = document.createElement("INPUT");
  //     checkbox.type = "checkbox";
  //     checkbox.value = exercise;
  //     checkbox.id = exercise.toLowerCase().replace(/\s+/g, "-"); // Set unique ID for each checkbox
  //     checkbox.classList.add("exerciseCheckbox");
  
  //     // Create a label for the checkbox
  //     const label = document.createElement("label");
  //     label.textContent = exercise;
  //     label.setAttribute("for", checkbox.id);
  
  //     // Append checkbox and label to the checklist div
  //     checklistDiv.appendChild(checkbox);
  //     checklistDiv.appendChild(label);
  //   });
    
  //   // Append checklist div to the day div
    // const dayDiv = document.querySelector(".dayInPlanner");
    // const clearOrRemoveBtnDiv = document.getElementById("ClearOrRemoveBtn");
    // dayDiv.insertBefore(checklistDiv, clearOrRemoveBtnDiv);
 
  // }




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
  console.log("Button inside day div is clicked" + clickedElement.textContent);
  const  exerciseDiv = clickedElement.closest(".excercisesDiv");
  chooseWorkout(clickedElement.textContent, workout,  exerciseDiv);
  
  }
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
    // Button inside day div is clicked
    console.log("Button Save inside day div is clicked");

    // Perform further actions if needed
  }
});

//Click on Workouts CLEAR day button inside day div
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
        emailInput.style.borderColor = 'red'; // Change border color to red for invalid email
        if(emailError) emailError.style.display = 'block'; // Show error message if email is invalid
      }
      window.alert(message); // Show alert with the validation message
      return false; // Form is not valid
    } else {
      if(emailError) emailError.style.display = 'none'; // Hide error message if email is valid
      emailInput.style.borderColor = 'initial'; // Reset border color for valid email
      return true; // Form is valid
    }
  }

  // Remove disabling/enabling logic from input and checkbox listeners
  nameInput.addEventListener('input', function() {
    emailInput.style.borderColor = 'initial'; // Reset border color when user starts typing
    if(emailError) emailError.style.display = 'none'; // Optionally, hide error message
  });
  
  emailInput.addEventListener('input', function() {
    emailInput.style.borderColor = 'initial'; // Reset border color when user starts typing
    if(emailError) emailError.style.display = 'none'; // Optionally, hide error message
  });
  
  agreementCheckbox.addEventListener('change', function() {
    // This could be used for additional logic when the checkbox state changes
  });

  // Adjust functionality to the print button to check form validity before printing
  printButton.addEventListener('click', function() {
    if (checkFormValidity()) {
      window.print(); // Print the document only if the form is valid
    }
  });
};
