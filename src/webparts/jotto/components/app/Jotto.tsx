import * as React from 'react';
import { IJottoProps } from './IJottoProps';

import Congrats from "../congrats/Congrats";

interface IJottoState { };

export default class Jotto extends React.Component<IJottoProps, IJottoState> {
  public render(): React.ReactElement<IJottoProps> {
    return (
      <div>
        <Congrats success={true}/>
      </div>
    );
  }
}
