import * as React from 'react';
import "jest";
import { shallow, ShallowWrapper } from "enzyme";
import { findByTestAttr } from "../../../../test/Utils";

import GuessedWords, { GuessedWordsType } from "./GuessedWords";

const setup = (props: GuessedWordsType = { guessedWord: 'train', letterMatchCount: 3 }): ShallowWrapper => {
    return shallow(<GuessedWords {...props} />);
};

describe("Compoenente responsável por fazer o match das palavaras", () => {
    let wrapper: ShallowWrapper;
    let guessed: GuessedWordsType;
    let component: ShallowWrapper;

    beforeEach(() => {
        guessed = {};
        wrapper = setup(guessed);
    });

    it("div do componente", () => {
        component = findByTestAttr(wrapper, 'component-guessed-words');
        expect(component.length).toBe(1);
    });
    it("Instruções das palavras encontradas se props estiverem vazias", () => {
        component = findByTestAttr(wrapper, 'guess-instructions');
        expect(component.text().length).not.toBe(0);
    });
    it("Instruções das palavras encontradas se houver guessed words", () => {
        wrapper = setup({ guessedWord: 'train' })
        component = findByTestAttr(wrapper, 'guess-instructions');
        expect(component.length).toBe(0);
    });
});