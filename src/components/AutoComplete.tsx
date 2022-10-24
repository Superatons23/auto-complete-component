import React, { useState, useRef, useEffect } from "react";
import { ICountry } from "../interfaces/interfaces";
import "./AutoComplete.css";

interface Props {
  countries: ICountry[];
}

const AutoComplete = ({ countries }: Props) => {
  const autoCompleteRef = useRef<HTMLInputElement | null>(null);
  const [value, setValue] = useState<string>();
  const [isDisplayed, setisDisplayed] = useState<Boolean>(false);
  const options: ICountry[] = countries.filter((option) =>
    option.name.official.toLowerCase().includes(value?.toLowerCase() || "")
  );
  console.log(countries);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  };
  const handleCountry = (e: string) => {
    setValue(e);
    setisDisplayed(false);
  };

  useEffect(() => {
    const handleOutside = (ev: Event) => {
      if (
        autoCompleteRef.current &&
        !autoCompleteRef.current.contains(ev.target as Node)
      ) {
        setisDisplayed(false);
      }
    };
    document.addEventListener("click", handleOutside);
    return () => {
      document.removeEventListener("click", handleOutside);
    };
  }, []);

  return (
    <div className="auto-complete" ref={autoCompleteRef}>
      <input
        value={value}
        onChange={handleChange}
        placeholder="Search"
        onFocus={() => setisDisplayed(true)}
      />

      {/**show suggestions */}
      {isDisplayed && (
        <ul className="options">
          {options?.map((option) => (
            <li
              onClick={() => handleCountry(option.name.official)}
              key={option.name.official}
            >
              <p>
                <strong>{value}</strong>

                {value
                  ? `${option.name.official
                      .toLowerCase()
                      .replace(value?.toLowerCase() || "", "")}`
                  : `${option.name.official}`}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AutoComplete;
