import { styled } from 'styled-components/native';

import { StyledTextTheme } from '~/styles/Global';

const City = (props) => {
  const { city, placeMark } = props.data;

  return (
    <StyledViewContainer>
      <StyledTextCityName>{city}</StyledTextCityName>
      <StyledTextPlaceMark>{placeMark}</StyledTextPlaceMark>
    </StyledViewContainer>
  );
};

export const StyledViewContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors.background};
`;

export const StyledTextCityName = styled(StyledTextTheme)`
  font-size: 68px;
  font-weight: 600;
`;

export const StyledTextPlaceMark = styled(StyledTextTheme)`
  font-size: 25px;
  font-weight: 500;
`;

export default City;
