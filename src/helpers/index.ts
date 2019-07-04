// import * as React from 'react';

export function getLetterMatchCount(guessedWord: string, secretWord: string) {
    let guessedWordArray: string[] = new Array<string>();

    const guessedWordSet = new Set(guessedWord.split(''));
    const secretWordSet = new Set(secretWord.split(''));
    
    guessedWordSet.forEach(item => guessedWordArray.push(item));
    
    return [...guessedWordArray].filter(letter => secretWordSet.has(letter)).length;
};