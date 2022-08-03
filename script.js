function formateDate(timestamp) {
 let date = new Date(timestamp);
 let hours = date.getHours();
 if (hours < 10) {
  hours = `0${hours}`;
}
 let minutes = date.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}
 let days = [
  "Sunday", 
  "Tuesday", 
  "Wednesday", 
  "Thursday", 
  "Friday",
  "Saturday"];

 let day = date.getDay();
 return `${day} ${hours}:${minutes}`;
}





function displayTemperature (response) { 
    console.log(response.data);
   let temperatureElement = document.querySelector("#temperature");
   let cityElement = document.querySelector("#city");
   let descriptionElement = document.querySelector("#description");
   let humidityElement = document.querySelector("#humidity");
    let windElement = document.querySelector("#wind");
    let dateElement = document.querySelector("#date");
 temperatureElement.innerHTML = Math.round (response.data.main.temp);
 cityElement.innerHTML = response.data.name;
 descriptionElement.innerHTML = response.data.weather[0].description;
 humidityElement.innerHTML = response.data.main.humitidy;
 windElement.innerHTML = Math.round (response.data.wind.speed);
 dateElement.innerHTML = formateDate(response.data.dt);
}


let apiKey = "bfe99896cbfe0c5d96be05f646b9fa10";
let urlApi = `http://api.openweathermap.org/data/2.5/weather?q=Harrow,uk&appid=${apiKey}&units=metric`;

axios.get(urlApi).then(displayTemperature);