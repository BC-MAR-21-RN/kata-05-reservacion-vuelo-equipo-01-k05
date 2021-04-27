import {useEffect, useState} from 'react';
import {useInput} from '.';
import {isValidEmail} from '../methods';
export const useLoginInputController = () => {
  const [porpsName] = useInput('');
  const [propsEmail] = useInput('');
  const [propsPassword] = useInput('');
  const [validEmail, setValidEmail] = useState(false);

  useEffect(() => {
    if (isValidEmail(propsEmail.value)) {
      setValidEmail(true);
    } else {
      setValidEmail(false);
    }
  }, [propsEmail.value]);
 
  return [porpsName, propsEmail, propsPassword, validEmail];
};
