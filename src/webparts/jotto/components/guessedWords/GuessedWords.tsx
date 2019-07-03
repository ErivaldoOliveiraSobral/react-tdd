import * as React from "react";
import './GuessedWords.css'

export type GuessedWordsType = {
    guessedWord?: string;
    letterMatchCount?: number;
};

const GuessedWords = (props: GuessedWordsType[]): JSX.Element => {
    let palavras = props ? props : [];
    let contents: JSX.Element = (<div />);
    if (props.length === 0) {
        contents = (
            <span data-test="guess-instructions">Tente encontrar a palavra secreta!</span>
        );
    } else {
        const listItems = props.map((obj, index) => {
            return (
                <tr key={index} data-test="list-items">
                    <td>{obj.guessedWord}</td>
                    <td>{obj.letterMatchCount}</td>
                </tr>
            );
        });
        contents = (
            <table data-test="grid-guessed">
                <thead>
                    <tr>
                        <th>Palavra</th>
                        <th>Acertos</th>
                    </tr>
                </thead>
                <tbody>
                    { listItems }
                </tbody>
            </table>
        );
    }
    return (
        <div data-test="component-guessed-words">
            {contents}
        </div>
    );
};

export default GuessedWords;