import { useEffect, useState } from 'react';
import styled from 'styled-components/native';
import * as Location from 'expo-location';

import ThemeSwitch from '@components/organisms/ThemeSwitch';
import City from '@components/organisms/City';
import Weather from '@components/organisms/Weather';

import { globalPaddingSide } from '~/styles/Global';

const Main = (props) => {
  const [ok, setOk] = useState(true);
  const [days, setDays] = useState([]);
  const [city, setCity] = useState('Loading...');
  const [placeMark, setPlaceMark] = useState(null);

  const API_KEY = 'fd6147ab3e0e99703e490e6629929727';  // free api key

  const getWeather = async () => {
    const {granted} = await Location.requestForegroundPermissionsAsync();
    if(!granted) {
      setOk(false);
    }
    const {coords: {latitude, longitude}} = await Location.getCurrentPositionAsync({accuracy: 5});
    const location = await Location.reverseGeocodeAsync({latitude, longitude}, {useGoogleMaps: false});
    setCity(location[0].city ?? location[0].region ?? location[0].country);
    setPlaceMark(location[0].name);

    // const response = await fetch(`https://api.openweathermap.org/data/2.5/current?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`)
    // const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`)
    const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`)
    const data = await response.json();
    const weatherList = data.list?.filter((weather) => {
      if(weather.dt_txt.includes('12:00:00')) {
        return weather;
      }
    });
    setDays(weatherList);
  };

  useEffect(() => {
    getWeather();
  }, []);

  const data = {
    city,
    placeMark,
    days,
  }

  return (
    <StyledViewContainer>
      <ThemeSwitch themeHandler={props.themeHandler} />
      <City data={data} />
      <Weather data={data} />
    </StyledViewContainer>
  );
};

// 1. When use GlobalThemeProvider (I made lol)
// import { StyleSheet } from 'react-native'
// import { useGlobalTheme } from 'src/contexts/Theme';
// const styles = () => {
//   const { theme } = useGlobalTheme();
//   return StyleSheet.create({
//     container: {
//       flex: 1,
//       backgroundColor: theme.colors.background,
//     },
//   });
// };

// 2. When use styled-components
export const StyledViewContainer = styled.View`
  padding: 0 ${globalPaddingSide}px;
  flex: 1;
  background-color: ${(props) => props.theme.colors.background};
`;

export default Main;
