import {useState} from 'react';

export const useInput = (initialState = '') => {
  const [value, setState] = useState(initialState);
  return [{value, onChangeText: setState}, () => setState(initialState)];
};
