import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import propTypes from "prop-types";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const weatherOptions = {
  Thunderstorm: {
    iconName: "weather-lightning",
    gradient: ["#bc4e9c", "#C06C84"],
    title: "Thunder! Be Careful!",
    subtitle: "Be Careful!"
  },
  Drizzle: {
    iconName: "weather-fog",
    gradient: ["#bc4e9c", "#f80759"],
    title: "Drizzle",
    subtitle: "I Can't See Anything!"
  },
  Rain: {
    iconName: "weather-pouring",
    gradient: ["#a8c0ff", "#3f2b96"],
    title: "Rain",
    subtitle: "Let's stuck in Home"
  },
  Snow: {
    iconName: "weather-snowy",
    gradient: ["#a8c0ff", "#3f2b96"],
    title: "Snow",
    subtitle: "Snowman wil die after sunrise"
  },
  Clear: {
    iconName: "weather-sunny",
    gradient: ["#ad5389", "#3c1053"],
    title: "Clear and Sunny",
    subtitle: "Don't Coding. get outside!"
  },
  Clouds: {
    iconName: "weather-cloudy",
    gradient: ["#a8c0ff", "#3f2b96"],
    title: "Clouds",
    subtitle: "Study CloudComputing"
  },
  Mist: {
    iconName: "weather-fog",
    gradient: ["#a8c0ff", "#3f2b96"],
    title: "Mist",
    subtitle: "Listening Jazz <Mist>"
  },
  Smoke: {
    iconName: "weather-fog",
    gradient: ["#ad5389", "#3c1053"],
    title: "Smoke",
    subtitle: "Are you Smoke againk, Doe?"
  },
  Haze: {
    iconName: "weather-fog",
    gradient: ["#a8c0ff", "#3f2b96"],
    title: "Haze",
    subtitle: "Be Careful!"
  },
  Dust: {
    iconName: "weather-fog",
    gradient: ["#ad5389", "#3c1053"],
    title: "Dust",
    subtitle: "Dust in Wind"
  },
  Fog: {
    iconName: "weather-fog",
    gradient: ["#ad5389", "#3c1053"],
    title: "Foggy",
    subtitle: "Be Careful!"
  },
  Sand: {
    iconName: "weather-fog",
    gradient: ["#ad5389", "#3c1053"],
    title: "Sand",
    subtitle: "what?! where are you now?"
  }
};

export default function Weather({ temp, condition }) {
  return (
    <LinearGradient
      colors={weatherOptions[condition].gradient}
      style={styles.container}
    >
      <StatusBar barStyle="light-content" />
      <View style={styles.half}>
        <MaterialCommunityIcons
          name={weatherOptions[condition].iconName}
          size={100}
          color="white"
          style={styles.icon}
        />
        <Text style={styles.text}>{temp}°C</Text>
      </View>
      <View style={styles.half}>
        <Text style={styles.title}>{weatherOptions[condition].title}</Text>
        <Text style={styles.subtitle}>
          {weatherOptions[condition].subtitle}
        </Text>
      </View>
    </LinearGradient>
  );
}

Weather.propTypes = {
  temp: propTypes.number.isRequired,
  condition: propTypes.oneOf([
    "Thunderstorm",
    "Drizzle",
    "Rain",
    "Snow",
    "Atmosphere",
    "Clear",
    "Clouds",
    "Mist",
    "Smoke",
    "Haze",
    "Dust",
    "Fog",
    "Sand"
  ]).isRequired
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  icon: {
    marginBottom: 10
  },
  half: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    fontSize: 25,
    color: "white"
  },
  title: {
    color: "white",
    fontSize: 34,
    fontWeight: "300",
    marginBottom: 10
  },
  subtitle: {
    color: "white",
    fontWeight: "800",
    fontSize: 16
  }
});
