import styled from "styled-components/native";
import { Button } from "react-native-paper";

export const Screen = styled.KeyboardAvoidingView`
  flex: 1;
  justify-content: center;
  align-items: center;
  background: #f1faee;
`;
export const Card = styled.View`
  padding-top: 10px;
  background-color: #ffb703;
  border-radius: 15px;
  width: 90%;
  align-items: center;
  height: 300px;
  margin-top: 70px;
`;
export const Title = styled.Text`
  font-weight: bold;
  font-size: 18px;
  margin: 2px;
`;
export const RegisterButton = styled.Pressable`
  width: 250px;
  height: 35px;
  align-items: center;
  justify-content: center;
  background: #e63946;
  border-radius: 10px;
  margin-top: 10px;
`;
export const ButtonText = styled.Text`
  font-size: 15px;
  letter-spacing: 1px;
  color: #f1faee;
`;
export const BackButton = styled(Button).attrs({
    color: "black"
  })`
    padding: 5px;
  `;
export const BackButtonTitle = styled.Text`
font-size: 18px;
`; 