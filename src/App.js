import React from "react";
import Info from "./components/info";
import Form from "./components/form";
import Weather from "./components/weather";

const WEATHER_API_KEY = "3b6dce91ff3ad9b05470760e22c1b993";
const NEWS_API_KEY = "7c9e8e7c5c024427a457fd441ad18561";
const initialState = {
  temp: undefined,
  city: undefined,
  country: undefined,
  sunset: undefined,
  error: undefined,
  flag: undefined,
  news_name: undefined,
  news_title: undefined,
  news_description: undefined,
  news_url: undefined,
  news_error: undefined
};

class App extends React.Component {
  constructor(state) {
    super(state);
    this.state = initialState;
  }

  reset() {
    this.setState(initialState);
  }

  getNews = async e => {
    e.preventDefault();

    const country = this.state.country;

    const newsApi_url = await fetch(
      `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${NEWS_API_KEY}`
    )
      .then()
      .catch();

    const news = await newsApi_url.json();

    this.setState({ news_error: "Error while getting news :(" });

    let index = Math.floor(Math.random() * 20);

    this.setState({
      news_name: news.articles[index].source.name,
      news_title: news.articles[index].title,
      news_description: news.articles[index].description,
      news_url: news.articles[index].url,
      news_error: undefined
    });
  };

  getWeather = async e => {
    e.preventDefault();

    this.reset();

    const city = e.target.elements.city.value;

    if (city) {
      const weatherApi_url = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${WEATHER_API_KEY}&units=metric`
      )
        .then()
        .catch(
          this.setState({
            error: "Enter a valid City name!!!"
          })
        );

      const data = await weatherApi_url.json();

      let flag_url =
        "https://www.countryflags.io/" + data.sys.country + "/shiny/64.png";

      const sunset = data.sys.sunset;
      const date = new Date();
      date.setTime(sunset);
      var sunset_date =
        date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

      this.setState({
        temp: data.main.temp,
        city: data.name,
        country: data.sys.country,
        sunset: sunset_date,
        error: undefined,
        flag: flag_url
      });
    } else {
      this.setState({
        error: "Enter a City name!"
      });
    }
  };

  render() {
    return (
      <div>
        <Info />
        <Form weatherMethod={this.getWeather} />
        <Weather
          newsMethod={this.getNews}
          temp={this.state.temp}
          city={this.state.city}
          country={this.state.country}
          sunset={this.state.sunset}
          error={this.state.error}
          flag={this.state.flag}
          news_name={this.state.news_name}
          news_title={this.state.news_title}
          news_description={this.state.news_description}
          news_url={this.state.news_url}
          news_error={this.state.news_error}
        />
      </div>
    );
  }
}

export default App;
