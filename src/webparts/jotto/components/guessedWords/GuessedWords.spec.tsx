import * as React from 'react';
import "jest";
import { shallow, ShallowWrapper } from "enzyme";
import { findByTestAttr } from "../../../../test/Utils";

import GuessedWords, { GuessedWordsType } from "./GuessedWords";

const setup = (props: GuessedWordsType[] = []): ShallowWrapper => {
    return shallow(GuessedWords(props));
};

describe("Compoenente responsável por fazer o match das palavaras", () => {
    let wrapper: ShallowWrapper;
    let guessed: GuessedWordsType[];
    let component: ShallowWrapper;

    beforeEach(() => {
        wrapper = setup();
    });

    it("div do componente", () => {
        component = findByTestAttr(wrapper, 'component-guessed-words');
        expect(component.length).not.toBe(0);
    });
    it("Grid de palavras não aparece quando não ha props", () => {
        component = findByTestAttr(wrapper, 'grid-guessed');
        expect(component.length).toBe(0);
    });
    it("Instruções das palavras encontradas aparece se há alguma palavra", () => {
        wrapper = setup([{ guessedWord: 'train', letterMatchCount: 3 }]);
        component = findByTestAttr(wrapper, 'guess-instructions');
        expect(component.length).toBe(0);
    });
});

describe("Match das palavras", () => {
    let wrapper: ShallowWrapper;
    let guessedWords: GuessedWordsType[];
    let component: ShallowWrapper;

    guessedWords = [
        { guessedWord: 'train', letterMatchCount: 3 },
        { guessedWord: 'agile', letterMatchCount: 1 },
        { guessedWord: 'party', letterMatchCount: 5 }
    ];
    it("Grid renderizando", () => {
        wrapper = setup(guessedWords);
        component = findByTestAttr(wrapper, 'grid-guessed');
        expect(component.length).not.toBe(0);
    });
    it("Grid renderizando 3 itens", () => {
        wrapper = setup(guessedWords);
        component = findByTestAttr(wrapper, 'list-items');
        expect(component.length).toBe(3);
    });
});