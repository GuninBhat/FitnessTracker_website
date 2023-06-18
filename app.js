// Sign Up Form Submission
const signupForm = document.getElementById("signup-form");
signupForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form submission

  // Get form values
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Perform signup logic here (e.g., API request)
  // ...

  // Add animation and transition to the signup form
  signupForm.style.opacity = 0;
  signupForm.style.transform = "translateY(-100px)";

  setTimeout(() => {
    window.location.href = "dashboard.html"; // Redirect to dashboard.html after animation
  }, 500); // Adjust the delay time as needed
});

// Activity Form Submission
const activityForm = document.getElementById("activity-form");
activityForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form submission

  // Get form values
  const activity = document.getElementById("activity").value;
  const steps = document.getElementById("steps").value;
  const calories = document.getElementById("calories").value;
  const distance = document.getElementById("distance").value;

  // Perform activity logging logic here (e.g., API request)
  // ...

  // Add activity log to the list with animation
  const activityLog = document.getElementById("activity-log");
  const listItem = document.createElement("li");
  listItem.innerText = `${activity} - Steps: ${steps} | Calories: ${calories} | Distance: ${distance} km`;
  listItem.style.opacity = 0;
  listItem.style.transform = "translateX(-100px)";

  activityLog.appendChild(listItem);

  setTimeout(() => {
    listItem.style.opacity = 1;
    listItem.style.transform = "translateX(0)";
  }, 100); // Adjust the delay time as needed

  // Clear the form fields
  activityForm.reset();
});
