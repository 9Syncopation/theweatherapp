import React from "react";
import Autosuggest from "react-autosuggest";
import { getAutocompleteSuggestions } from "../services/weatherApiService";
import { useState } from "react";
import LocationOnIcon from "@material-ui/icons/LocationOn";

export default function Autocomplete() {
  const [city, setCity] = React.useState("");
  const [suggestions, setSuggestions] = React.useState([]);
  // const [country, setCountry] = React.useState("");
  // const [suggestions, setSuggestions] = React.useState([]);

  return (
    <div>
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={async ({ value }) => {
          if (!value) {
            setSuggestions([]);
            return;
          }
          // try {
          const response = await getAutocompleteSuggestions(value);
          setSuggestions(
            response.data.map((location) => ({
              city: location.LocalizedName,
              country: location.Country.LocalizedName,
            }))
          );
          // } catch (e) {
          //   setSuggestions([]);
          // }
        }}
        // when typing and clearing
        onSuggestionsClearRequested={() => {
          setSuggestions([]);
        }}
        // populating the input value when clicking on suggestion
        getSuggestionValue={(suggestion) => suggestion.LocalizedName}
        //render the suggestion
        renderSuggestion={(suggestion) => (
          <span>
            <LocationOnIcon />
            {suggestion.LocalizedName}
          </span>
        )}
        onSuggestionSelected={(event, { suggestion, method }) => {
          if (method === "Enter") {
            event.preventDefault();
          }
          setCity(suggestion.LocalizedName);
        }}
        inputProps={{
          placeholder: "Search for City",
          autoComplete: "abcd",
          value: city,
          name: "city",
          onChange: (event, { newValue }) => {
            setCity(newValue);
          },
        }}
        highlightFirstSuggestion={true}
      />
    </div>
  );
}
