function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email.toLowerCase());
}

function validateField(value, type) {
    switch (type) {
        case 'email':
            return value && validateEmail(value);
        case 'zipcode':
            return value && value.lenght === 5;
        default:
            return !!value;
    }
}

function validateFields(fields) {
    for (const field of fields) {
        if (!validateField(field.value, field.type)) {
            return false;
        }
    }
    return true;
}

exports.validateFields = validateFields;
exports.validateField = validateField;
exports.validateEmail = validateEmail;