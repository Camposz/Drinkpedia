import { LinearGradient } from "expo-linear-gradient";
import styled from "styled-components/native";

const Fundo = styled(LinearGradient).attrs({
  colors: ["#2F0743", "#302b63", "#2F0743"],
})`
  display: flex;
  flex: 1;
  justify-content: center;
  opacity: 1;
`;

const CardGradient = styled(LinearGradient).attrs({
  colors: ["#2F0743", "#2F0743"],
})`
  display: flex;
  flex-direction: row;
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 10px;
  margin-top: 10px;
  align-items: center;
`;

const Titulo = styled.Text`
  font-size: 50px;
  text-align: center;
  font-weight: 100;
  color: azure;
`;
const SubTitulo = styled.Text`
  font-size: 25px;
  font-weight: 100;
  color: azure;
`;
const Texto = styled.Text`
  font-size: 14px;
  font-weight: 100;
  color: azure;
`;

export { Fundo, Titulo, SubTitulo, Texto, CardGradient };
