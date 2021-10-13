export function validator(data, config) {
    const errors = {};

    function validate(validateMethod, data, config) {
        let statusValidate;
        switch (validateMethod) {
            case "isRequired":
                statusValidate = data.trim() === "";
                break;
            case "isFirstCapitalLetter": {
                const firstCapitalRegExp = /^[A-ZА-Я][a-zа-я]+$/g;
                statusValidate = !firstCapitalRegExp.test(data);
                break;
            }
            case "isEmail": {
                const emailRegExp = /^\S+@\S+\.\S+$/g;
                statusValidate = !emailRegExp.test(data);
                break;
            }
            case "isLink": {
                const urlRegExp = /^http(s)?:\/\/\S+\.[a-z]+(\/)?$/g;
                statusValidate = !urlRegExp.test(data);
                break;
            }
            case "isValidYear": {
                statusValidate =
                    Number(data) < new Date().getFullYear() - 100 ||
                    Number(data) > new Date().getFullYear();
                break;
            }
            case "min": {
                statusValidate = data.length < config.value;
                break;
            }
            default:
                break;
        }
        if (statusValidate) return config.message;
    }

    for (const fieldName in data) {
        for (const validateMethod in config[fieldName]) {
            const error = validate(
                validateMethod,
                data[fieldName],
                config[fieldName][validateMethod]
            );
            if (error && !errors[fieldName]) {
                errors[fieldName] = error;
            }
        }
    }
    return errors;
}
