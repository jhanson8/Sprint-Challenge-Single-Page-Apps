/* jshint esversion: 6 */
import React from "react";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList.js";
import WelcomePage from "./components/WelcomePage.js";
import SearchForm from "./components/SearchForm.js";


import { BrowserRouter as Router, Route, Link, Switch, useParams } from "react-router-dom";


export default function App() {
  return (
    <main>
      <Header />

      <Switch>
      <Route path="/list/">
      
        <CharacterList />
      </Route>

    <Route path="/">
      <WelcomePage/>
    </Route>



    </Switch>
    </main>
  );
}
