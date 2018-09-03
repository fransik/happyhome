export function getFormElements(form) {
  const elements = [];

  Object.keys(form).forEach(key => {
    elements.push({
      id: key,
      config: form[key]
    });
  });

  return elements;
}

export function getFormValues(form) {
  const values = {};

  Object.keys(form).forEach(key => {
    values[key] = form[key].value;
  });

  return values;
}

export function inputIsValid(value, rules) {
  let isValid = true;

  if (!rules) {
    return true;
  }

  if (rules.required) {
    isValid = value.trim() !== '' && isValid;
  }

  if (rules.minLength) {
    isValid = value.length >= rules.minLength && isValid;
  }

  if (rules.isEmail) {
    const pattern = /\S+@\S+\.\S+/;
    isValid = pattern.test(value) && isValid;
  }

  return isValid;
}

export function formIsValid(form) {
  let isValid = true;

  Object.keys(form).forEach(key => {
    isValid = form[key].valid && isValid;
  });

  return isValid;
}
