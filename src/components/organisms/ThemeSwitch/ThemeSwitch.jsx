import { View } from 'react-native'
import { styled, useTheme } from 'styled-components/native';

import { StyledTextTheme } from '~/styles/Global';

const ThemeSwitch = (props) => {
  const { isDarkMode, setIsDarkMode } = props.themeHandler;

  const toggleSwitch = () => {
    setIsDarkMode(!isDarkMode);
  }

  const theme = useTheme();

  return (
    <StyledViewContainer>
      <View>
        <StyledTextSwitchLabel>Dark Mode</StyledTextSwitchLabel>
      </View>
      <View>
        <StyledSwitch
          trackColor={{ false: theme.colors.switch.track.off, true: theme.colors.switch.track.on }}
          thumbColor={theme.colors.switch.thumb}
          ios_backgroundColor={theme.colors.switch.iosBackground}
          onValueChange={toggleSwitch}
          value={isDarkMode}
        />
      </View>
    </StyledViewContainer>
  )
}

export const StyledViewContainer = styled.View`
  flex: .3;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;

export const StyledTextSwitchLabel = styled(StyledTextTheme)`
  font-size: 20px;
`;

export const StyledSwitch = styled.Switch`
  margin-left: 10px;
`;

export default ThemeSwitch;
