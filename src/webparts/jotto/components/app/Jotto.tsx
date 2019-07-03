import * as React from 'react';
import { IJottoProps } from './IJottoProps';

import Congrats from "../congrats/Congrats";
import GuessedWords from "../guessedWords/GuessedWords";

interface IJottoState { };

export default class Jotto extends React.Component<IJottoProps, IJottoState> {
  public render(): React.ReactElement<IJottoProps> {
    return (
      <div>
        {/* <Congrats success={true} text="Msg"/> */}
        {/* <GuessedWords guessedWord="" /> */}
        {GuessedWords([{guessedWord: "Teste", letterMatchCount: 1}])}
      </div>
    );
  }
}
