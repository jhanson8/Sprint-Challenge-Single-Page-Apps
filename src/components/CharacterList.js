/* jshint esversion: 6 */
import React, { useEffect, useState } from "react";
import axios from "axios";
import CharCard from "./CharacterCard";
import SearchForm from "./SearchForm.js";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [char, setChar]= useState([]);
  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
    .get("https://rickandmortyapi.com/api/character")
    .then(response => {
      console.log(response.data.results);
      const char = response.data.results;
      setChar(char);
    });

  }, []);

  return (
    <section className="character-list">
<SearchForm />
    </section>
  );
}


// {char.map(char => {
// return (
// <CharCard
// name = {char.name}
// status ={char.status}
// species = {char.species}
//
// />
//
//
// );
// })}
