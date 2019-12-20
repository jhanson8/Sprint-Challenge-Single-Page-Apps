/* jshint esversion: 6 */
import React from "react";
import { MyHTwo, MyP, MyDiv} from "./styles.js";

const CharCard = props => {
  return (
    <divStyle className="char-list">
      <MyHTwo>Name: {props.name}</MyHTwo>
      <MyDiv>
      <MyP>Status: {props.status}</MyP>


        <MyP>Species: {props.species}</MyP>

        </MyDiv>

    </divStyle>
  );
};
export default CharCard;
