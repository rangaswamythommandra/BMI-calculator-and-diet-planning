function calculateBMI() {
    const name = document.getElementById("name").value;
    const age = parseFloat(document.getElementById("age").value);
    const gender = document.getElementById("gender").value;
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value) / 100; // Convert height to meters
  
    if (isNaN(age) || isNaN(weight) || isNaN(height)) {
      showToast("Please enter valid numeric values for age, weight, and height.");
      return;
    }
  
    if (age <= 0 || weight <= 0 || height <= 0) {
      showToast("Please enter positive values for age, weight, and height.");
      return;
    }
  
    const bmi = weight / (height * height);
  
    let status = "";
    if (bmi < 18.5) {
      status = "Under-Weight";
    } else if (bmi >= 18.5 && bmi < 24.9) {
      status = "Normal";
    } else {
      status = "Over-Weight";
    }
  
    const result = `${name}'s BMI: ${bmi.toFixed(2)} (Status: ${status})`;
    document.getElementById("result").textContent = result;
  
    // Display diet plan based on BMI status
    const dietPlan = getDietPlan(status);
    document.getElementById("diet-plan").textContent = `Diet Plan: ${dietPlan}`;
    
    // Show toast notification with the BMI status
    showToast(`BMI Status: ${status}`);
  }
  
  function getDietPlan(status) {
    if (status === "Under-Weight") {
      return "Follow Under Weight diet plan ";
    } else if (status === "Over-Weight") {
      return "Follow Over Weight diet plan ";
    } else {
      return "Follow Normal diet plan";
    }
  }
  
  function showToast(message) {
    Toastify({
      text: message,
      duration: 3000,
      newWindow: true,
      close: true,
      gravity: "top",
      position: "right",
      stopOnFocus: true,
    }).showToast();
  }
  
  function showDietPlan() {
    const statusMatch = document.getElementById("result").textContent.match(/\(Status: (.+?)\)/);
    
    if (statusMatch) {
      const status = statusMatch[1];
      let dietPlan = "";
  
      if (status === "Under-Weight") {
        dietPlan = "Diet Plan for Under-Weight:<br><br>" +
          "1. Consume more calories: Aim to eat more calories than your body burns through daily activities.<br>" +
          "2. High-protein foods: Include lean meats, poultry, fish, eggs, dairy products, nuts, seeds, and legumes to promote muscle growth.<br>" +
          "3. Nutrient-dense foods: Opt for whole grains, fruits, and vegetables for added vitamins and minerals.<br>" +
          "4. Healthy fats: Incorporate sources like avocados, nuts, and olive oil for extra calories.<br>" +
          "5. Frequent meals: Eat regular, well-balanced meals and snacks throughout the day.<br>" +
          "6. Consult a dietitian: Consider consulting a registered dietitian for personalized guidance.";
      } else if (status === "Over-Weight") {
        dietPlan = "Diet Plan for Over-Weight:<br><br>" +
          "1. Calorie reduction: Aim to consume fewer calories than your body needs to create a caloric deficit.<br>" +
          "2. Balanced diet: Focus on a variety of foods, including fruits, vegetables, lean proteins, whole grains, and healthy fats.<br>" +
          "3. Portion control: Be mindful of portion sizes to prevent overeating.<br>" +
          "4. Regular exercise: Incorporate regular physical activity into your routine to support weight loss.<br>" +
          "5. Limit processed and sugary foods: Avoid or minimize highly processed and sugary foods.<br>" +
          "6. Consult a dietitian: Consider consulting a registered dietitian for personalized weight loss guidance.";
      } else {
        dietPlan = "Diet Plan for Normal BMI:<br><br>" +
          "1. Maintain a balanced diet: Continue to eat a variety of foods from all food groups.<br>" +
          "2. Regular exercise: Engage in regular physical activity to maintain overall health and fitness.<br>" +
          "3. Portion control: Keep an eye on portion sizes to maintain a healthy weight.<br>" +
          "4. Whole foods: Emphasize whole, unprocessed foods for optimal nutrition.<br>" +
          "5. Stay hydrated: Ensure you drink an adequate amount of water daily.<br>";
      }
  
      // Open a new page with the detailed diet plan and add CSS for styling
      const newWindow = window.open("", "_blank");
      newWindow.document.write(`
      <!DOCTYPE html>
      <html>
      <head>
        <title>Diet Plan</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            margin: 20px;
            background-color: rgb(174, 210, 255); /* Light Blue */
          }
          h2 {
            color: #333;
            text-align: center;
          }
          p {
            font-size: 16px;
            line-height: 1.5;
            padding: 10px;
            background-color: rgb(228, 241, 255); /* Pale Blue */
            border: 1px solid #ccc;
            border-radius: 5px;
            box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
          }
        </style>
      </head>
      <body>
        <h2>Diet Plan for ${status}:</h2>
        <p>${dietPlan}</p>
      </body>
      </html>
      
      `);
    }
  }
  