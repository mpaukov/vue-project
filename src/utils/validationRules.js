export const isRequired = (val) => ({
  hasPassed: !!val,
  message: "Please fulfill this field",
});

export const charMinLimit = (limit) => (val) => ({
  hasPassed: val.length >= limit,
  message: `Min ${limit} digits`,
});

export const charMaxLimit = (limit) => (val) => ({
  hasPassed: val.length <= limit,
  message: `Max ${limit} digits`,
});

export const charLimit = (min, max) => (val) => ({
  hasPassed: charMinLimit(min)(val) && charMaxLimit(max)(val),
  message: `Min ${min} and Max ${max} digits`,
});

export const emailValidation = (val) => ({
  hasPassed: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(val),
  message: "Email is not valid. Check it, please",
});

export const passwordValidation = (val) => ({
  hasPassed: /^(?=.*[A-Za-z])(?=.*[\d])[a-zA-Z0-9]{7,256}$/.test(val),
  message:
    "Password should contain at least one digit and seven from the mentioned characters",
});
