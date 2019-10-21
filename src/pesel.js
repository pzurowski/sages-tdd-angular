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
  if (!errors.length && !validatePeselChecksum(s)) {
    errors.push('checksum')
  }
  if (!errors.length) {
    const [_, y, m, d] = s.match(/(..)(..)(..)/);
    let date = new Date(`19${y}-${m}-${d}T00:00:00Z`);
    if (date.toJSON() !== `19${y}-${m}-${d}T00:00:00.000Z`) {
      errors.push('date');
    }
  }

  return {result: !errors.length, errors};
}

function validatePeselChecksum(s) {
  const [a, b, c, d, e, f, g, h, i, j, k] = s.split('').map(t => +t);
  return (1 * a + 3 * b + 7 * c + 9 * d + 1 * e + 3 * f + 7 * g + 9 * h + 1 * i + 3 * j + 1 * k) % 10 === 0;
}
