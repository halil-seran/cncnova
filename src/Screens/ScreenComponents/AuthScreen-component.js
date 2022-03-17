import styled from "styled-components/native";

export const Screen = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background: #f1faee;
`;
export const AnimationWrapper = styled.View`
  width: 400px;
  height: 400px;
  position: absolute;
  top: 20px;
  padding: 10px;
`;
export const Card = styled.View`
  background: #ffb703;
  border-radius: 15px;
  width: 90%;
  height: 25%;
  align-items: center;
  padding: 4px;
  margin-top: 100px;
`;
export const Title = styled.Text`
  font-weight: bold;
  font-size: 18px;
  margin: 2px;
`;
export const BottomButtons = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-around;
`;
export const Button = styled.Pressable`
  width: 160px;
  height: 35px;
  align-items: center;
  justify-content: center;
  background: #e63946;
  border-radius: 10px;
`;
export const ButtonText = styled.Text`
  font-size: 15px;
  letter-spacing:1px;
    color: #f1faee;
`;
