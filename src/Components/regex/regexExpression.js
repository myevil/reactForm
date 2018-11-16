class regexExpression {
    static validationStringRequired = /[a-zA-Z0-9-,]+/gi;
    static validationPhoneNumber = /^(([+]{1}[0-9]{2}|0)[0-9]{9,12})$/;
    static validationEmail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    static validationURL = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/gm;
}

export default regexExpression;
