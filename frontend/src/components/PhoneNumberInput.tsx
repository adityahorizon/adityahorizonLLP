// import React, { useState } from "react";
// import PhoneInput from "react-phone-input-2";
// import "react-phone-input-2/lib/bootstrap.css";
// import { parsePhoneNumberFromString } from "libphonenumber-js";

// const PhoneNumberInput = ({ value, onChange }) => {
//     const [country, setCountry] = useState("in");

//     const handleChange = (inputValue) => {
//         const parsedNumber = parsePhoneNumberFromString("+" + inputValue);
//         if (parsedNumber && parsedNumber.country) {
//             setCountry(parsedNumber?.country?.toLowerCase());
//         }
//         onChange(inputValue);
//     };

//     return (
//         <PhoneInput
//             country={country}
//             value={value}
//             onChange={handleChange}
//             preferredCountries={["in", "us", "gb"]}
//             enableSearch
//             disableCountryCode={false}
//             disableDropdown={false}
//             countryCodeEditable={false}
//             containerClass="custom-phone-input-container"
//             inputClass="custom-phone-input"
//             buttonClass="custom-phone-button"
//             inputProps={{
//                 name: "phone",
//                 required: true,
//                 autoFocus: false,
//             }}
//         />
//     );
// };

// export default PhoneNumberInput;

import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";
import { parsePhoneNumberFromString } from "libphonenumber-js";

const PhoneNumberInput = ({ value, onChange }) => {
    const [country, setCountry] = useState("in");

    const handleChange = (inputValue) => {
        const parsedNumber = parsePhoneNumberFromString("+" + inputValue);

        if (parsedNumber && parsedNumber.country) {
            setCountry(parsedNumber.country.toLowerCase());
        }

        // ✅ Always pass the full international format (+91 9876543210)
        const formattedValue = parsedNumber
            ? parsedNumber.formatInternational()
            : "+" + inputValue;

        onChange(formattedValue);
    };

    return (
        <PhoneInput
            country={country}
            value={value?.replace("+", "")} // Remove '+' because react-phone-input-2 adds it
            onChange={handleChange}
            preferredCountries={["in", "us", "gb"]}
            enableSearch
            disableCountryCode={false}
            disableDropdown={false}
            countryCodeEditable={false}
            containerClass="custom-phone-input-container"
            inputClass="custom-phone-input"
            buttonClass="custom-phone-button"
            inputProps={{
                name: "phone",
                required: true,
                autoFocus: false,
            }}
        />
    );
};

export default PhoneNumberInput;
