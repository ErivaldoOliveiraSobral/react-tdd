import * as React from 'react';
import { IJottoProps } from './IJottoProps';

import Congrats from "../Congrats/Congrats";

interface IJottoState { };

export default class Jotto extends React.Component<IJottoProps, IJottoState> {
  public render(): React.ReactElement<IJottoProps> {
    return (
      <div>
        <Congrats />
      </div>
    );
  }
}
