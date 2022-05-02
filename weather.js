let container = document.getElementById("container");
let API_KEY = "52c789f6ba95da827e4e18b8dbb1590f";
async function getWeatherData() {
  try {
    let city = document.getElementById("city").value;
    let res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );

    let data = await res.json();
    console.log(data);
    displayData(data);
  } catch (error) {
    console.log(error);
  }
}

function displayData(data) {
  container.innerHTML = "";
  cont.innerHTML = "";

  let Card = document.createElement("div");
  let img = document.createElement('img');
  img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThfDpiAF6u0ULqdkC81sGqpcCZQHRftazzug&usqp=CAU"
  let name = document.createElement("p");
  name.textContent = "City : " + data.name;
  let temp = document.createElement("p");
  temp.textContent = "Temperature : " + data.main.temp + "°C";
  let humidity = document.createElement("p");
  humidity.textContent = "Humidity : " + data.main.humidity;
  let pressure = document.createElement("p");
  pressure.textContent = "Pressure : " + data.main.pressure;
  let windspeed = document.createElement("p");
  windspeed.textContent = "windspeed : " + data.wind.speed;
  let sunrise = document.createElement("p");
  sunrise.textContent = "Sunrise : " + data.sys.sunrise;
  let sunset = document.createElement("p");
  sunset.textContent = "Sunset : " + data.sys.sunset;
  let description = document.createElement("p");

 
  description.textContent = "description : " + data.weather[0].description;
//   if(description.innerText ==  "clear sky"){
//   var img =url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz-BmHfl4y5j751P0jl0GRPqCQVwGUIM_ReA&usqp=CAU")
// }else{
//     var img =url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz-BmHfl4y5j751P0jl0GRPqCQVwGUIM_ReA&usqp=CAU")
// }
  Card.append(img,name, temp, humidity, pressure,sunrise,sunset,description);
  let iframe = document.createElement("iframe");
  iframe.src = `https://maps.google.com/maps?q=${data.name}&t=&z=15&ie=UTF8&iwloc=&output=embed`;
  iframe.width = 600;
  iframe.height = 450;
  
document.querySelector('#container').append(Card,iframe)
document.querySelector('#cont').append(iframe)



}