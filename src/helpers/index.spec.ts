import * as React from 'react';
import "jest";
import { shallow, ShallowWrapper } from "enzyme";

import { getLetterMatchCount } from "./index";

describe("getLetterMatchCount", () => {
    const sercretWord: string = "party";
    it("retorna a contagem correta quando não há letras correspondentes", () => {
        const letterMatchCount = getLetterMatchCount("bones", sercretWord);
        expect(letterMatchCount).toBe(0);
    });
    it("retorna contagem correta quando há 3 letras correspondentes", () => {
        const letterMatchCount = getLetterMatchCount("train", sercretWord);
        expect(letterMatchCount).toBe(3);
    });
    it("retorna contagem correta quando há letras duplicadas", () => {
        const letterMatchCount = getLetterMatchCount("perka", sercretWord);
        expect(letterMatchCount).toBe(3);
    });
});