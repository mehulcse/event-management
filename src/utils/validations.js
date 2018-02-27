/**
 * Validations RegEx.
 * */


export const validateEmail = email => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email);
// Password (UpperCase, LowerCase, Number, SpecialChar, min 6 and Max 18 Chars)
export const validatePassword = password =>
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&/-])[A-Za-z\d$@$!%*?&/-]{6,18}/.test(password);

export const validateString = string => /^[a-zA-Z]+$/i.test(string);

export const validateStringWithSpace = stringWithSpace => /^[a-zA-Z\s]+$/i.test(stringWithSpace);

export const validateAlphaNumeric = alphaNumeric => /^[a-zA-Z0-9]+$/i.test(alphaNumeric);

export const validateAlphaNumericWithSpace = alphaNumericWithSpace => /^[a-zA-Z0-9\s]+$/i.test(alphaNumericWithSpace);

export const validateAlphabatesWithSpace = alphabetsWithSpace => /^[a-zA-Z\s]+$/i.test(alphabetsWithSpace);

export const validateZipcode = zipCode => /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(zipCode);

export const onlyNumeric = digits => /^\d+$/.test(digits);

export const validateMobileNumber = mobileNumber => /^\+[0-9]{10,14}$/.test(mobileNumber);

export const validateOTP = OTP => /^[0-9]?$/.test(OTP);

export const validateLandlineNumber = landlineNumber => /^[+\d]?(?:[\d-\s()]*)$/.test(landlineNumber);
