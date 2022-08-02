function displayTemperature (response) { 
    console.log(response.data);
   let temperatureElement = document.querySelector("#temperature");
   let cityElement = document.querySelector("#city");
   let descriptionElement = document.querySelector("#description");
 temperatureElement.innerHTML = Math.round (response.data.main.temp);
 cityElement.innerHTML = response.data.name;
 descriptionElement.innerHTML = response.data.weather[0].description;
}


let apiKey = "bfe99896cbfe0c5d96be05f646b9fa10";
let urlApi = `http://api.openweathermap.org/data/2.5/weather?q=Harrow,uk&appid=${apiKey}&units=metric`;

axios.get(urlApi).then(displayTemperature);