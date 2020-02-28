import React from "react";
import { Alert } from "react-native";
import Loading from "./Loading";
import Weather from "./Weather";
import * as Location from "expo-location";
import Axios from "axios";

const API_KEY = "fc07cbb2e877851d87c52bd6ac473321";

export default class App extends React.Component {
  state = {
    isLoading: true
  };
  getweather = async (latitude, longitude) => {
    await fetch(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${API_KEY}&units=metric`
    )
      .then(res => {
        return res.json(); //Promise 반환
      })
      .then(json => {
        console.log(json); // 서버에서 주는 json데이터가 출력 됨
      });
  };
  getLocation = async () => {
    try {
      await Location.requestPermissionsAsync();
      const {
        coords: { latitude, longitude }
      } = await Location.getCurrentPositionAsync();
      this.getweather(latitude, longitude);
      this.setState({ isLoading: false });
    } catch (error) {
      console.log(error);
      Alert.alert("What?", "Please accept request 😢");
    }
  };
  componentDidMount() {
    this.getweather();
    this.getLocation();
  }
  render() {
    const { isLoading } = this.state;
    return isLoading ? <Loading /> : <Weather />;
  }
}
