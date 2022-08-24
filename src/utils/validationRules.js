export const isRequired = (val) => ({
  hasPassed: !!val,
  message: "Please fulfill this field",
});

export const charLimit = (limit) => (val) => ({
  hasPassed: val.length <= limit,
  message: "Max 6 digits",
});
