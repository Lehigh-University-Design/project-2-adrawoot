document.addEventListener("DOMContentLoaded", function() {
    var currentStep = 1; // Track the current step
  
    // Function to handle arrow clicks
    document.querySelectorAll(".arrow").forEach(function(arrow) {
      arrow.addEventListener("click", function() {
        var stepNumber = currentStep;
  
        if (arrow.id === "nextArrow" || arrow.id === "arrow") {
          stepNumber++;
        } else if (arrow.id === "backArrow") {
          stepNumber--;
        }
  
        navigateToStep(stepNumber);
      });
    });
  
    // Function to navigate to a specific step
    function navigateToStep(stepNumber) {
      var currentStepElement = document.getElementById("step" + currentStep);
      var nextStepElement = document.getElementById("step" + stepNumber);
  
      if (nextStepElement) { // Check if the next step exists
        currentStepElement.style.display = "none"; // Hide current step
        nextStepElement.style.display = "block"; // Display next step
        currentStep = stepNumber; // Update current step
      }
    }
  });