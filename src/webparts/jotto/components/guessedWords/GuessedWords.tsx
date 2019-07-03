import * as React from "react";

export type GuessedWordsType = {
    guessedWord?: string;
    letterMatchCount?: number;
}

const GuessedWords = (props: GuessedWordsType): JSX.Element => {
    const { guessedWord } = props;
    let contents: JSX.Element = (<div />);
    let word = guessedWord ? guessedWord : '';
    if (word.length === 0) {
        contents = (
            <span data-test="guess-instructions">Tente encontrar a palavra secreta!</span>
        );
    }
    return (
        <div data-test="component-guessed-words">
            { contents }
        </div>
    );
};

export default GuessedWords;