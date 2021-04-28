export const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

export const isValidInput = value => {
  return value.length > 0 ? true : false
}

export const isDisabled = (email, pass, name, checkbox) => {
  if(email && pass && name && checkbox){
    return false
  } else {
    return true
  }
} 