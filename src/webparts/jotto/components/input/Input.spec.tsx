import * as React from 'react';
import "jest";
import { shallow, ShallowWrapper } from "enzyme";
import { findByTestAttr } from "../../../../test/Utils";

import Input, { IInputState } from "./Input";

const initialState: IInputState = {
    success: false
};

const setup = (state: IInputState = initialState) => {
    let wrapper: ShallowWrapper = shallow(<Input />);
    wrapper.setState({ ...state });
    return wrapper;
};

describe("Resderização", () => {
    describe("Quando a palavra não é encontrada", () => {
        let wrapper: ShallowWrapper;
        beforeEach(() => {
            wrapper = setup();
        });
        it("Componente renderizado sem erros", () => {
            let component = findByTestAttr(wrapper, 'component-input');
            expect(component.length).toBe(1);
        });
        it("State inicial", () => {
            let state = wrapper.state("success");
            expect(state).toBe(false);
        });
        it("Renderizado input box", () => {
            let inputBox = findByTestAttr(wrapper, 'input-box');
            expect(inputBox.length).toBe(1);
        });
        it("Renderizado botão de submit", () => {
            let submitButton = findByTestAttr(wrapper, 'submit-button');
            expect(submitButton.length).toBe(1);
        });
    });
    describe("Quando a palavra é encontrada", () => {
        let wrapper: ShallowWrapper;
        beforeEach(() => {
            wrapper = setup({ success: true });
        });
        it("Componente renderizado sem erros", () => {
            let component = findByTestAttr(wrapper, 'component-input');
            expect(component.length).toBe(1);
        });
        it("State inicial", () => {
            let state = wrapper.state("success");
            expect(state).toBe(true);
        });
        it("Renderizado input box", () => {
            let inputBox = findByTestAttr(wrapper, 'input-box');
            expect(inputBox.length).toBe(0);
        });
        it("Renderizado botão de submit", () => {
            let submitButton = findByTestAttr(wrapper, 'submit-button');
            expect(submitButton.length).toBe(0);
        });
    });
});
describe("Update State", () => {

});