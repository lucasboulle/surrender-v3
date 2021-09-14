import styled from 'styled-components';
import {Colors} from '../../utils/Colors';

export const RowContainer = styled.div`
  color: #fffff; 
  display: flex;
  justify-content: center;
  flex-direction: row;
`;

export const Container = styled.div`
  color: ${Colors.pink};
  background: ${Colors.background};
  width: 100%;
  height: 59%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: sretch;
  padding: 0 0 0 0;
`;

export const MainTitle = styled.h1`
  font-size: 60px;
`

export const Footer = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
`
