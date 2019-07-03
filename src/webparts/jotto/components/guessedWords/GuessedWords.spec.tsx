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
    it("Instruções aparecem quando há alguma palavra nas props", () => {
        component = findByTestAttr(wrapper, 'guess-instructions');
        expect(component.text()).toBe("Tente encontrar a palavra secreta!");
    });
    it("Instruções não aparecem quando há alguma palavra", () => {
        wrapper = setup([{ guessedWord: 'train', letterMatchCount: 3 }]);
        component = findByTestAttr(wrapper, 'guess-instructions');
        expect(component.length).toBe(0);
    });
});

describe("Match das palavras", () => {
    let wrapper: ShallowWrapper;
    let component: ShallowWrapper;
    let guessedWords: GuessedWordsType[] = [
        { guessedWord: 'train', letterMatchCount: 3 },
        { guessedWord: 'agile', letterMatchCount: 1 },
        { guessedWord: 'party', letterMatchCount: 5 }
    ];
    beforeEach(() => {
        wrapper = setup(guessedWords);
    });
    it("Grid renderizando", () => {
        component = findByTestAttr(wrapper, 'grid-guessed');
        expect(component.length).not.toBe(0);
    });
    it("Grid renderizando 3 itens", () => {
        component = findByTestAttr(wrapper, 'list-items');
        expect(component.length).toBe(3);
    });

});