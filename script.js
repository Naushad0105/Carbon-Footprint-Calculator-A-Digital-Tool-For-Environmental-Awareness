// ✅ Check if JS is connected
alert("✅ JavaScript connected!");

function calculateFootprint() {
  // Transportation
  const carMiles = +document.getElementById('carMiles').value || 0;
  const carType = +document.getElementById('carType').value;
  const publicTransport = +document.getElementById('publicTransport').value || 0;
  const flights = +document.getElementById('flights').value || 0;

  const transportTotal = carMiles * carType + publicTransport * 0.089 + flights * 90;

  // Home Energy
  const electricity = +document.getElementById('electricity').value || 0;
  const naturalGas = +document.getElementById('naturalGas').value || 0;
  const renewable = +document.getElementById('renewable').value || 0;

  const energyTotal = electricity * 0.92 * (1 - renewable / 100) + naturalGas * 5.3;

  // Food
  const redMeat = +document.getElementById('redMeat').value || 0;
  const poultry = +document.getElementById('poultry').value || 0;
  const plantBased = +document.getElementById('plantBased').value || 0;
  const foodWaste = +document.getElementById('foodWaste').value || 0;
  const localFood = +document.getElementById('localFood').value || 0;

  const foodTotal =
    redMeat * 6.61 +
    poultry * 1.65 +
    plantBased * 0.45 +
    foodWaste * 2.5 -
    ((redMeat + poultry + plantBased) * (localFood / 100) * 0.15);

  // Lifestyle
  const clothing = +document.getElementById('clothing').value || 0;
  const deliveries = +document.getElementById('deliveries').value || 0;
  const electronics = +document.getElementById('electronics').value || 0;
  const recycling = +document.getElementById('recycling').value;

  const lifestyleTotal =
    clothing * 20 +
    deliveries * 0.5 +
    electronics * 300 -
    ((clothing + deliveries) * recycling * 0.3);

  // Total calculation
  const total = transportTotal + energyTotal + foodTotal + lifestyleTotal;
  const annual = (total * 52) / 1000;

  // Display results
  document.getElementById('transResult').textContent = transportTotal.toFixed(1);
  document.getElementById('energyResult').textContent = energyTotal.toFixed(1);
  document.getElementById('foodResult').textContent = foodTotal.toFixed(1);
  document.getElementById('lifestyleResult').textContent = lifestyleTotal.toFixed(1);
  document.getElementById('totalResult').textContent = total.toFixed(1);
  document.getElementById('annualResult').textContent = annual.toFixed(1);

  generateTips({ carMiles, flights, redMeat, foodWaste, clothing });
  document.getElementById('results').style.display = 'block';
}

function generateTips(data) {
  const tipsContainer = document.getElementById('tipsContainer');
  tipsContainer.innerHTML = "<h3>🌱 Personalized Tips</h3>";

  if (data.carMiles > 200)
    tipsContainer.innerHTML += <p>🚗 Try carpooling or using public transport more.</p>;
  if (data.flights > 0)
    tipsContainer.innerHTML += <p>✈ Reduce air travel where possible.</p>;
  if (data.redMeat > 3)
    tipsContainer.innerHTML += <p>🍖 Try reducing red meat meals.</p>;
  if (data.foodWaste > 3)
    tipsContainer.innerHTML += <p>🗑 Plan meals to avoid food waste.</p>;
  if (data.clothing > 0)
    tipsContainer.innerHTML += <p>👕 Buy fewer clothes — support sustainable fashion.</p>;

  if (tipsContainer.innerHTML === "<h3>🌱 Personalized Tips</h3>")
    tipsContainer.innerHTML += <p>🌟 Excellent! You’re already eco-friendly!</p>;
}

function resetForm() {
  document.querySelectorAll('input, select').forEach(el => (el.value = ''));
  document.getElementById('results').style.display = 'none';
}