import React, { useState, useEffect } from 'react';
import * as moment from 'moment'

import * as Styled from './cardDetails.styled';
import {
  placeholders,
  numbersOnlyRegex,
  submitButtonLabel,
} from './constants';

type onChangeCardNoProps = {
  e: React.ChangeEvent<HTMLInputElement>,
  setState: React.Dispatch<React.SetStateAction<number | undefined>>
};

const onChangeNumber = (props: onChangeCardNoProps): void => {
  const { e, setState } = props;
  const { value } = e.target;
  if (numbersOnlyRegex) setState(parseInt(value))
}

const validateNumber = (value = 0, length: number) => value.toString().length === length

export default () => {
  const [cardNumber, setCardNumber] = useState<number | undefined>(undefined);
  const [cvc, setCvc] = useState<number | undefined>(undefined);
  const [expiry, setExpiry] = useState<moment.Moment | undefined>(undefined);
  const isFormValid = () => {
    if (validateNumber(cardNumber, 16) && validateNumber(cvc, 3) && expiry) {
      return true
    }
    return false
  }
  
  const user = {
    firstName: 'Firsty',
    lastName: 'Lastington',
  };
  return (
    <Styled.Container>
      <Styled.Welcome>
        {`Welcome ${user.firstName}`}
      </Styled.Welcome>
      <Styled.CardNumber
        onChange={e => onChangeNumber({ e, setState: setCardNumber })}
        value={cardNumber || undefined}
        maxLength={16}
        placeholder={placeholders.cardNumber}
      />
      <Styled.Row>
        <Styled.Cvc
          onChange={e => onChangeNumber({ e, setState: setCvc })}
          value={cvc || undefined}
          maxLength={3}
          placeholder={placeholders.cvc} />
        <Styled.Expiry
          value={expiry}
          onChange={value => setExpiry(value || undefined)}
          placeholder={placeholders.expiry}
          format="MM/YY"
        />
      </Styled.Row>
      <Styled.Submit
        type="primary"
        disabled={!isFormValid()}
        onClick={
          () => console.log(`cardNumber: ${cardNumber}\ncvc: ${cvc} expiry: ${expiry}`)
        }
      >
        {submitButtonLabel}
      </Styled.Submit>
    </Styled.Container>
  )
}
