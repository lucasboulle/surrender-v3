import styled from 'styled-components';
import { Colors } from '../../utils/Colors';

export const Container = styled.div`
color: ${Colors.pink};
background: ${Colors.background};
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
align-items: sretch;
justidy-content: flex-start;
padding: 0 0 0 0;
`;

export const ImageContainer = styled.div`
  color: #2e3440;
  background: #434c5e;
  width: 100%;
  height: 17%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: sretch;
  padding: 0 0 0 0;
`;

export const CardsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const CardsRowContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`
