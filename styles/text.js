import styled from 'styled-components/native'
import { textSecondary } from '../utils/colors'

export const DeckCards = styled.Text`
  text-align: center;
  font-size: 18;
  color: #888;
  margin-left: 40;
  margin-right: 40;
  margin-top: 10;
  margin-bottom: 40;
`

export const TextTitle = styled.Text`
  text-align: center;
  font-size: 22;
  color: ${textSecondary};
  margin-left: 30;
  margin-right: 30;
  margin-top: 40;
`
export const TextInputField = styled.TextInput`
  margin-top: 20;
  font-size: 22;
  margin-left: 20;
  margin-right: 20;
  margin-bottom: 20;
`

export const TextHighlight = styled.Text`
  text-align: center;
  text-decoration: underline;
  font-weight: bold;
  font-size: 20;
  color: #000;
  margin: 30px;
`
