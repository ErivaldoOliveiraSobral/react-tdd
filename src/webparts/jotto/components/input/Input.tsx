import * as React from 'react';

export interface IInputProps { }

export interface IInputState {
  success: boolean;
}

export default class Input extends React.Component<IInputProps, IInputState> {
  constructor(props: IInputProps) {
    super(props);
    this.state = {
      success: false
    };
  }

  public render(): React.ReactElement<IInputProps> {
    const content = this.state.success
      ? null
      : (
        <form>
          <input type="text" data-test="input-box" />
          <button type="submit" data-test="submit-button">Submir</button>
        </form>
      )
    return (
      <div data-test="component-input">
        {content}
      </div>
    );
  }
}