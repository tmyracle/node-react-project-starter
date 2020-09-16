import React, { useState } from "react";
import { Input, Dropdown } from "semantic-ui-react";

const PhoneNumber = (props) => {
  const [countryCode, setCountryCode] = useState("1");
  const [phoneNumber, setPhoneNumber] = useState(props.phoneNumber);

  const countryCodes = [
    { key: "US", flag: "us", value: "1", text: "United States +1" },
    { key: "AU", flag: "au", value: "61", text: "Australia +61" },
    { key: "MX", flag: "mx", value: "52", text: "Mexico +52" },
    { key: "GB", flag: "gb", value: "44", text: "United Kingdom +44" },
  ];

  const handleFieldChange = (e) => {
    const phoneNumber = e.target.value;
    console.log(phoneNumber);
    setPhoneNumber(phoneNumber);
  };

  const handleCountryCodeChange = (e, { value }) => {
    setCountryCode(value);
  };

  return (
    <div>
      <Dropdown
        placeholder="Select country"
        search
        selection
        options={countryCodes}
        onChange={handleCountryCodeChange}
        name="countryCode"
        value={countryCode}
      />
      <Input name="phoneNumber" value="" onChange={handleFieldChange} />
    </div>
  );
};

export default PhoneNumber;
