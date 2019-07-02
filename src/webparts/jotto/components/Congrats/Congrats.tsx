import * as React from 'react';

type Props = {
    success: boolean;
}

const Congrats = (props: Props): JSX.Element => {
    const { success } = props;
    if (success) {
        return (
            <div data-test="component-congrats">
                <span data-test="congrats-message">Parabéns! Você acertou a palavra!</span>
            </div>
        );
    } else {
        return (
            <div data-test="component-congrats" />
        );
    }
}

export default Congrats;