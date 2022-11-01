import React, { useState, useRef, useEffect } from "react";
import { getCountriesFilter } from "../api";
import { ICountry } from "../interfaces/interfaces";
import "./AutoComplete.css";

const AutoComplete = () => {
  const autoCompleteRef = useRef<HTMLInputElement | null>(null);
  const [value, setValue] = useState<string>("");
  const [showOptions, setshowOptions] = useState<Boolean>(false);

  const [countries, setCountries] = useState<ICountry[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  };
  const handleCountry = (e: string) => {
    setValue(e);
    setshowOptions(false);
  };

  useEffect(() => {
    let isCancelled = false;

    //get countries matching
    const getCountries = async () => {
      const response = await getCountriesFilter(value);

      if (!isCancelled) {
        !response.message ? setCountries(response) : setCountries([]);
      }
    };
    getCountries();

    //cleanup
    return () => {
      isCancelled = true;
    };
  }, [value]);

  useEffect(() => {
    const handleOutside = (ev: Event) => {
      if (
        autoCompleteRef.current &&
        !autoCompleteRef.current.contains(ev.target as Node)
      ) {
        setshowOptions(false);
      }
    };
    document.addEventListener("click", handleOutside);
    return () => {
      document.removeEventListener("click", handleOutside);
    };
  }, []);

  const getMatchingText = (value: string, country: string) => {
    const regex = new RegExp(value, "gi");
    const newText = country.replace(regex, `<mark class="highlight">$&</mark>`);
    //<span dangerouslySetInnerHTML={{ __html: newText }} />
    return newText;
  };

  return (
    <div className="auto-complete" ref={autoCompleteRef}>
      <input
        value={value}
        onChange={handleChange}
        placeholder="Search"
        onFocus={() => setshowOptions(true)}
      />

      {/**show suggestions */}
      {showOptions && (
        <ul className="options">
          {countries.length > 0 &&
            countries?.map(
              (option) =>
                getMatchingText(value, option.name) !== option.name && (
                  <li
                    onClick={() => handleCountry(option.name)}
                    key={option.name}
                  >
                    <span
                      dangerouslySetInnerHTML={{
                        __html: getMatchingText(value, option.name),
                      }}
                    />
                  </li>
                )
            )}
        </ul>
      )}
    </div>
  );
};

export default AutoComplete;
