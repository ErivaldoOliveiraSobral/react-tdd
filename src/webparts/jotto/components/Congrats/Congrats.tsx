import * as React from 'react';

const Congrats = ({ success }): JSX.Element => {
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