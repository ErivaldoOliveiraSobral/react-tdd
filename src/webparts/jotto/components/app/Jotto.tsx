import * as React from 'react';
import { IJottoProps } from './IJottoProps';

import Congrats from "../congrats/Congrats";
import GuessedWords from "../guessedWords/GuessedWords";

interface IJottoState { 
  secretWord: string;
};

export default class Jotto extends React.Component<IJottoProps, IJottoState> {
  constructor(props: IJottoProps) {
    super(props);
    this.state = {
      secretWord: ""
    };
  };
  private getScretWord() {
    return "train";
  };
  componentDidMount() {
    this.setState({ secretWord: this.getScretWord() });
  };
  
  public render(): React.ReactElement<IJottoProps> {
    return (
      <div>
        <Congrats success={false} />
        {/* <GuessedWords /> */}
        {GuessedWords([])}
      </div>
    );
  }
}
