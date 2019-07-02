import * as React from 'react';

export type Props = {
    success: boolean;
    text?: string;
}

const Congrats = (props: Props): JSX.Element => {
    const { success, text } = props;
    if (success) {
        return (
            <div data-test="component-congrats2">
                <span data-test="congrats-message">{text ? text : "Parabéns! Você acertou a palavra!"}</span>
            </div>
        );
    } else {
        return (
            <div data-test="component-congrats" />
        );
    }
}

export default Congrats;