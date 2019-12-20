/* jshint esversion: 6 */
import React, { useState, useEffect } from "react";
import CharacterList from "./CharacterList.js";
import axios from "axios";
import CharCard from "./CharacterCard";



const SearchForm = () =>  {
const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
    .get("https://rickandmortyapi.com/api/character")
    .then(response => {
      console.log(response.data.results);
      const characters = response.data.results.filter(
        character => character.name.toLowerCase().includes(search.toLowerCase())

      );
      setData(characters);
    });

  }, [search]);
  const handleInputChange = event => {
    setSearch(event.target.value);
  };


  return (
    <section className="search-form">

    <form>
            <input
              type="text"
              onChange={handleInputChange}
              value={search}
              name="name"
              tabIndex="0"
              className="prompt search-name"
              placeholder="search by name"
              autoComplete="off"
            />
          </form>
          <section className="character-list">
          {data.map(char => {
          return (
      <CharCard
      name = {char.name}
      status ={char.status}
      species = {char.species}

      />


          );
        })}
          </section>

    </section>

  );
}

export default SearchForm;
