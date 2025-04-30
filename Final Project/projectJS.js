const meals = ['Breakfast', 'Snack 1', 'Lunch', 'Snack 2', 'Dinner'];
const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

window.onload = () => {
  const container = document.getElementById('mealInputs');
  days.forEach(day => {
    container.innerHTML += `<h4>${day}</h4>`;
    meals.forEach(meal => {
      const id = `${day}_${meal}`.replace(/\s/g, '');
      container.innerHTML += `
        <label>${meal}: 
          <input type="text" id="${id}">
        </label><br>`;
    });
    container.innerHTML += `<hr>`;
  });
};

function validateEmail(email) {
  return /\S+@\S+\.\S+/.test(email);
}

function generateMealPlan() {
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const goal = document.getElementById('goal').value.trim();

  if (!validateEmail(email)) {
    alert('Please enter a valid email address.');
    return;
  }

  let newWindow = window.open();
  newWindow.document.write(`<html><head><title>${name}'s Meal Plan</title></head><body>`);
  newWindow.document.write(`<h1>Weekly Meal Plan for ${name}</h1>`);
  newWindow.document.write(`<p>Email: ${email}</p><p>Goal: ${goal}</p><hr>`);

  days.forEach(day => {
    newWindow.document.write(`<h3>${day}</h3><ul>`);
    meals.forEach(meal => {
      const id = `${day}_${meal}`.replace(/\s/g, '');
      const mealValue = document.getElementById(id).value.trim();
      newWindow.document.write(`<li><strong>${meal}:</strong> ${mealValue}</li>`);
    });
    newWindow.document.write(`</ul><hr>`);
  });

  newWindow.document.write(`</body></html>`);
  newWindow.document.close();
}
