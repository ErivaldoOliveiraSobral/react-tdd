import * as React from 'react';
import styles from './DemoTdd.module.scss';
import { IDemoTddProps } from './IDemoTddProps';
import { escape } from '@microsoft/sp-lodash-subset';

import Display from "../component1/counter";

interface IDemoTddState {
  counter?: number;
}

export default class DemoTdd extends React.Component<IDemoTddProps, IDemoTddState> {
  constructor(props: IDemoTddProps) {
    super(props);
    this.state = {
      counter: 0
    };
  }
  private changeCounter(delta: number): void {
    if (delta < 0 && this.state.counter != 0)
      this.setState({ counter: this.state.counter + delta })
    else if (delta > 0 && this.state.counter >= 0)
      this.setState({ counter: this.state.counter + delta });
  };
  public render(): React.ReactElement<IDemoTddProps> {
    return (
      <div className={styles.demoTdd} data-test="component-demo-tdd">
        {/* <Display data-test="display-contagem" counter={this.state.counter} /> */}
        <h1 data-test="display-contagem">Contagem: {this.state.counter}</h1>
        <button
          data-test="button-incremento"
          onClick={() => this.changeCounter(1)}>
          Incremento
        </button>
        <button
          data-test="button-decremento"
          onClick={() => this.changeCounter(-1)}>
          Decremento
        </button>
      </div>
    );
  }
}
