const subBtn = document.getElementById("btn");
const userInput = document.getElementById("selectLocation");
const locationSearch = document.getElementById("locationSearch");
const icon = document.getElementById("icon")
const locationName = document.getElementById("location");
const temp = document.getElementById("temp");
const humidity = document.getElementById("humidity");

subBtn.addEventListener('click', () => {
  getData();
});

function getData () {
  fetch(`https://api.weatherapi.com/v1/current.json?key=dadde46a779548ae9bc203817222908&q=${userInput.value}&aqi=no
  `)
  .then(response => response.json())
  .then(data => {
    locationSearch.innerHTML = `${data.location.name}`
    icon.src = `${data.current.condition.icon}`
    locationName.innerHTML = `${data.location.region}`
    temp.innerHTML = `${data.current.temp_f}`
    humidity.innerHTML = `${data.current.humidity}%`
  });
};