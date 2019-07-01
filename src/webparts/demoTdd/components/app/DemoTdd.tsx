import * as React from 'react';
import styles from './DemoTdd.module.scss';
import { IDemoTddProps } from './IDemoTddProps';
import { escape } from '@microsoft/sp-lodash-subset';

interface IDemoTddState {

};

export default class DemoTdd extends React.Component<IDemoTddProps, IDemoTddState> {
  constructor(props: IDemoTddProps) {
    super(props);

  }
  public render(): React.ReactElement<IDemoTddProps> {
    return (
      <div className={styles.demoTdd} data-test="component-demo-tdd">
        <h1 data-test='component-counter-display'>Hello</h1>
      </div>
    );
  }
}
