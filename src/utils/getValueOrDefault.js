export const getValueOrDefault = (value, defaultValue) => {
    if (value == '') {
      return defaultValue
    }
    return value ? value : defaultValue;
  };
