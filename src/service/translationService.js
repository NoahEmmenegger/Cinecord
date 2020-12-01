const translations = require('../translation/translations.json')

module.exports = {
    translate(key, lan) {
        if (!key || !lan) {
            return "MISSING_KEY_OR_LAN";
        }
        let keyValue = translations[key];
        if (!keyValue) {
            return "MISSING_TRANSLATION";
        }
        let value = keyValue[lan];
        if (!value) {
            return "MISSING_TRANSLATION_FOR_LANGUAGE";
        }

        return value;
    }
}