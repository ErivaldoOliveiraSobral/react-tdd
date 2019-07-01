import * as React from 'react';
import "jest";
import { shallow, ShallowWrapper } from "enzyme";
import Display from "./counter";

describe("Teste display", () => {
    let wrapper: ShallowWrapper;
    const props: number = 0; 

    beforeEach(() => {
        wrapper = shallow(<Display counter={props} />)
    });
    it("Display renderiando?", () => {
        const display = wrapper.find("[data-test='display-contagem']");
        expect(display.text()).toBe("Contagem: 0"); 
    });
});