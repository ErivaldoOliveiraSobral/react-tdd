import * as React from 'react';
import "jest";
import { shallow } from "enzyme";
import Display from "./counter";

const setup = (props: any = {}) => {
    return shallow(<Display {...props} />);
};

describe("Teste display", () => {
    beforeEach(() => {

    });
    it("Display renderiando?", () => {
        const wrapper = setup({});
    });
});