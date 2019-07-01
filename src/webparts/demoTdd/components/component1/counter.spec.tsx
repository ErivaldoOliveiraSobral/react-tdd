import * as React from 'react';
import { shallow } from "enzyme";
import Display from "./counter";

const setup = (props: any = {}) => {
    return shallow(<Display {...props} />);
};

describe("Teste display", () => {
    beforeEach(() => {

    });
    it("Display renderiando?", () => {
        const props = 0; 
        const wrapper = setup({ props });
        const display = wrapper.find("[data-test='display-contagem']");
        expect(display.text()).toBe("Contagem: 0");
    });
});