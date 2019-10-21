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
  return {result: !errors.length, errors};
}
