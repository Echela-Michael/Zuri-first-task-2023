// Get references to the elements
const currentDayElement = document.getElementById("currentDay"); 
const currentUTCElement = document.getElementById("currentUTC"); 
  

// Function to update the current day
    function updateCurrentDay() {
      const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]; 
      const currentDate = new Date(); 
      const currentDayOfWeek = daysOfWeek[currentDate.getUTCDay()]; 
      currentDayElement.textContent = currentDayOfWeek; 
  } 

// Function to update the current UTC time
    function updateCurrentUTC() {
      const currentUTCTime = new Date(); 
      const currentTimeString = currentUTCTime.toISOString(); 
      currentUTCElement.textContent = currentUTCTime; 
  
  } 

// Call the functions to update the current day and UTC time
updateCurrentDay();
updateCurrentUTC();
