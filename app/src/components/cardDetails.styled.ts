import styled from 'styled-components';
import { Input, DatePicker, Button } from 'antd';

const { MonthPicker } = DatePicker;


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
  padding: 20px;
  max-width: 500px;
  justify-content: center;
`;

export const Welcome = styled.div`
  margin: 20px 0 0;
  font-size: 42px;
  text-align: center;
`;

export const CardNumber = styled(Input)`
  margin: 100px 0 0;
`;

export const Row = styled.div`
  display: flex;
  justify-content: end;
`;

export const Cvc = styled(Input)`
  width: 54px;
  margin: 20px 16px 0 0; 
`;

export const Expiry = styled(MonthPicker)`
  width: 100px;
  margin: 20px 0 0;
`

export const Submit = styled(Button)`
  margin: 60px 0 0;
`;
