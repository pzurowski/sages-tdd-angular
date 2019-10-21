function validatePesel(s) {
  return extendedValidatePesel(s).result;
}

function extendedValidatePesel(s) {
  const errors = [];
  if (s.length < 11) {
    errors.push('short');
  }
  if (s.length > 11) {
    errors.push('long');
  }
  if (/[^0-9]/.test(s)) {
    errors.push('nonDigit');
  }
  return {result: !errors.length, errors};
}
