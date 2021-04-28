import {useEffect, useState} from 'react';
import {useInput} from '.';
import {isValidEmail, isValidInput} from '../methods';
export const useLoginInputController = () => {
  const [propsName] = useInput('');
  const [propsEmail] = useInput('');
  const [propsPassword] = useInput('');
  const [validEmail, setValidEmail] = useState(false);
  const [validPass, setValidPass] = useState(false);
  const [validName, setValidName] = useState(false);

  useEffect(() => {
    if (isValidEmail(propsEmail.value)) {
      setValidEmail(true);
    } else {
      setValidEmail(false);
    }
  }, [propsEmail.value]);

  useEffect(() => {
    if (isValidInput(propsPassword.value)) {
      setValidPass(true);
    } else {
      setValidPass(false);
    }
  }, [propsPassword.value]);

  useEffect(() => {
    if (isValidInput(propsName.value)) {
      setValidName(true);
    } else {
      setValidName(false);
    }
  }, [propsName.value]);
 
  return [propsName, propsEmail, propsPassword, validEmail, validPass, validName];
};
