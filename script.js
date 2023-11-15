// import fetch from "node-fetch";

let weather = {
  apikey: "5f1740777a163deff3a16d4e2ff3fd3b",
  // "bd5e378503939ddaee76f12ad7a97608",
};
// 5f1740777a163deff3a16d4e2ff3fd3b -orignal

// https://api.openweathermap.org/data/2.5/weather?q=Hyderabad&appid=bd5e378503939ddaee76f12ad7a97608
// {"coord":{"lon":78.4744,"lat":17.3753},"weather":[{"id":721,"main":"Haze","description":"haze","icon":"50n"}],"base":"stations",
// "main":{"temp":300.38,"feels_like":301.95,"temp_min":299.88,"temp_max":300.38,"pressure":1016,"humidity":65},"visibility":4000,"wind":{"speed":5.14,"deg":80},"clouds":{"all":40},"dt":1699533672,
// "sys":{"type":1,"id":9214,"country":"IN","sunrise":1699490869,"sunset":1699531920},"timezone":19800,"id":1269843,"name":"Hyderabad","cod":200}

// async function weatherApp() {
//     await fetch(
//         "https://api.openweathermap.org/data/2.5/weather?q=" + "Hydearbad" +
//         "&units=metric&appid=" +
//         this.apiKey
//     )
//         .then((response) => {
//             if (!response.ok) {
//                 alert("No weather found.");
//                 throw new Error("No weather found.");
//             }
//             return response.json();
//         })
//         .then((data) => this.displayWeather(data));

//     console.log(data)
// }

async function fetchData(city) {
  try {
    const response = await fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      city +
      "&units=metric&appid=" +
      weather.apikey
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    console.log("Data fetched successfully:", data);

    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity, pressure } = data.main;
    const { speed } = data.wind;

    document.querySelector(".city").innerText = "Weather in " + name;

    document.querySelector(".icon").src =
      "https://openweathermap.org/img/wn/" + icon + ".png";

    document.querySelector(".description").innerText = description;

    document.querySelector(".temp").innerText = temp + "°C";

    document.querySelector(".humidity").innerText =
      "Humidity: " + humidity + "%";

    document.querySelector(".pressure").innerText =
      "pressure: " + pressure + "%";

    document.querySelector(".wind").innerText =
      "Wind speed: " + speed + " km/h";

    // document.querySelector(".weather").classList.remove("loading");
    let add = document.querySelector(".weather");
    console.log(add);
    // document.body.style.backgroundImage =
    //   "url('https://source.unsplash.com/1600x900/?" + name + "')";
  } catch (error) {
    console.error(
      "There has been a problem with your fetch operation:",
      error.message
    );
  }
}

function search() {
  this.fetchData(document.querySelector(".search-bar").value);
}

document.querySelector(".search button").addEventListener("click", function () {
  search();
});

document
  .querySelector(".search-bar")
  .addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
      search();
    }
  });

fetchData("Hyderabad");

// console.log(data);

// async function fetchData(url) {
//     return fetch(url)
//       .then(response => {
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         return response.json();
//       })
//       .then(data => {
//         console.log(data)
//         return data;
//       })
//       .catch(error => {
//         console.error('There has been a problem with your fetch operation:', error);
//         throw error; // Rethrow the error for further handling, if necessary
//       });
//   }

// let weatherData = {
//   apiKey: "API KEY GOES HERE",
//   fetchWeather: function (city) {
//     fetch(
//       "https://api.openweathermap.org/data/2.5/weather?q=" +
//         city +
//         "&units=metric&appid=" +
//         this.apiKey
//     )
//       .then((response) => {
//         if (!response.ok) {
//           alert("No weather found.");
//           throw new Error("No weather found.");
//         }
//         return response.json();
//       })
//       .then((data) => this.displayWeather(data));
//   },
//   displayWeather: function (data) {
//     const { name } = data;
//     const { icon, description } = data.weather[0];
//     const { temp, humidity } = data.main;
//     const { speed } = data.wind;
//     document.querySelector(".city").innerText = "Weather in " + name;
//     document.querySelector(".icon").src =
//       "https://openweathermap.org/img/wn/" + icon + ".png";
//     document.querySelector(".description").innerText = description;
//     document.querySelector(".temp").innerText = temp + "°C";
//     document.querySelector(".humidity").innerText =
//       "Humidity: " + humidity + "%";
//     document.querySelector(".wind").innerText =
//       "Wind speed: " + speed + " km/h";
//     document.querySelector(".weather").classList.remove("loading");
//     document.body.style.backgroundImage =
//       "url('https://source.unsplash.com/1600x900/?" + name + "')";
//   },
//   search: function () {
//     this.fetchWeather(document.querySelector(".search-bar").value);
//   },
// };

// document.querySelector(".search button").addEventListener("click", function () {
//   weatherData.search();
// });

// document
//   .querySelector(".search-bar")
//   .addEventListener("keyup", function (event) {
//     if (event.key == "Enter") {
//       weatherData.search();
//     }
//   });

// weatherData.fetchWeather("Denver");
