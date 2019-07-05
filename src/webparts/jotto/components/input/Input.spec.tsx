import * as React from 'react';
import "jest";
import { shallow, ShallowWrapper } from "enzyme";
import { findByTestAttr } from "../../../../test/Utils";

import Input, { IInputState, IInputProps } from "./Input";


const initialProps: IInputProps = {
    teste: "TesteTeste"
};

const initialState: IInputState = {
    success: false
};

const setup = (state: IInputState = initialState, props: IInputProps = initialProps) => {
    let wrapper: ShallowWrapper = shallow(<Input {...props} />);
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
    describe("Teste de propriedade e estado", () => {
        let estado: IInputState = { success: true };
        let propriedade: IInputProps = { teste: "Teste" };
        it("Teste se estado é verdadeiro", () => {
            const wrapper = setup(estado, propriedade);
            expect(wrapper.state('success')).toBe(true);
        });
        it("Teste de propriedade é igual a Teste", () => {
            const wrapper = setup(estado, propriedade);
            expect(wrapper.instance().props).toEqual({ teste: "Teste" });
        });
    });
});
describe("Update State", () => {
    // it("`guessedWord` é uma propriedade de função", () => {
    //     const wrapper = setup();
    //     const guessedWordProp = wrapper.instance().props.guessedWord;
    //     expect(guessedWordProp).toBeInstanceOf(Function);
    // });
});