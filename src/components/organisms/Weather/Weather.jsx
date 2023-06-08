import { Dimensions } from 'react-native';
import { styled, useTheme } from 'styled-components/native';

import { Fontisto } from '@expo/vector-icons';

import {
  globalPaddingSide,
  StyledTextTheme,
} from '~/styles/Global';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

const ICONS = {
  'Clear': 'day-sunny',
  'Clouds': 'cloudy',
  'Atmosphere': 'cloudy-gusts',
  'Snow': 'snow',
  'Rain': 'rains',
  'Drizzle': 'rain',
  'Thunderstorm': 'lightning',
}

const Weather = (props) => {
  const theme = useTheme();
  const { days } = props.data;

  return (
    <StyledScrollViewContainer
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
    >
    {
      days.length === 0 ? (
        <StyledViewDayLoading
          screenWidth={SCREEN_WIDTH}
        >
          <StyledActivityIndicator color="white" size="large" />
        </StyledViewDayLoading>
      ) : (
        days.map((day, index) => (
          <StyledViewDay
            key={index}
            screenWidth={SCREEN_WIDTH}
          >
            <StyledTextDayTime>
            {
              new Date(day.dt*1000).toISOString().substring(0, 10)
            }
            </StyledTextDayTime>
            <StyledTextTemperature>
            {
              parseFloat(day.main.temp).toFixed(1)
            }
            </StyledTextTemperature>
            <StyledViewDescriptionWrapper>
              <Fontisto name={ICONS[day.weather[0].main]} size={68} color={theme.mode === 'dark' ? 'white' : 'black'}
                style={{
                  alignSelf: 'center',
                  marginTop: 10,
                }}
              />
              <StyledViewDescriptionTextWrapper>
                <StyledTextMainDescription>{day.weather[0].main}</StyledTextMainDescription>
                <StyledTextSubDescription>{day.weather[0].description}</StyledTextSubDescription>
              </StyledViewDescriptionTextWrapper>
            </StyledViewDescriptionWrapper>
          </StyledViewDay>
        ))
      )
    }
    </StyledScrollViewContainer>
  );
};

export const StyledScrollViewContainer = styled.ScrollView`
  flex: 2.2;
  background-color: ${(props) => props.theme.colors.background};
`;

export const StyledActivityIndicator = styled.ActivityIndicator`
  margin-top: 40px;
`;

export const StyledViewDay = styled.View`
  width: ${(props) => props.screenWidth - (globalPaddingSide*2)}px;
  align-items: center;
  margin-top: 40px;
  `;

export const StyledViewDayLoading = styled(StyledViewDay)`
  align-items: center;
`;

export const StyledTextDayTime = styled(StyledTextTheme)`
  font-size: 25px;
  width: 100%;
  text-align: center;
`;

export const StyledTextTemperature = styled(StyledTextTheme)`
  font-size: 120px;
  font-weight: 500;
`;

export const StyledViewDescriptionWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 25px;
`;

export const StyledViewDescriptionTextWrapper = styled.View`
  align-items: flex-start;
`;

export const StyledTextMainDescription = styled(StyledTextTheme)`
  font-size: 45px;
`;

export const StyledTextSubDescription = styled(StyledTextTheme)`
  font-size: 25px;
  margin-left: 5px;
`;

export default Weather;
