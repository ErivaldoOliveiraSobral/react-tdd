import * as React from 'react';

import Congrats from "../congrats/Congrats";
import GuessedWords from "../guessedWords/GuessedWords";
import Input from "../input/Input";

interface IJottoState { 
  secretWord: string;
};
export interface IJottoProps {
  description: string;
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
        <Input />
        {GuessedWords([])}
      </div>
    );
  }
}
