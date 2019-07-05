import * as React from 'react';

export interface IInputProps { 
  guessedWord?: any;
}

export interface IInputState {
  success: boolean;
  word?: string
}

export default class Input extends React.Component<IInputProps, IInputState> {
  constructor(props: IInputProps) {
    super(props);
    this.state = {
      success: false,
      word: ''
    };
  }

  setGuessedWord(evt) {
    evt.preventDefault();
    // this.setState({ word: "evt.taget.value" });
  };

  public render(): React.ReactElement<IInputProps> {
    const content = this.state.success
      ? null
      : (
        <form>
          <input type="text" data-test="input-box" />
          <button 
            type="submit" 
            data-test="submit-button"
            onClick={this.setGuessedWord}>
            Submit
          </button>
        </form>
      )
    return (
      <div data-test="component-input">
        {content}
      </div>
    );
  }
}