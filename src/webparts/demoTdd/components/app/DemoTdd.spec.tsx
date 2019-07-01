import * as React from 'react';
import "jest";
import { shallow, mount, ShallowWrapper } from "enzyme";
import DemoTdd from "./DemoTdd";
import { IDemoTddProps } from "./IDemoTddProps";
import { IDemoTddState } from "./IDemoTddState";

/**
 * Factory para criar ShallowWrapper para o componente DemoTdd
 * @param {IDemoTddProps} props - Propriedade especifica para o setup
 * @param {IDemoTddState} state - Estado inicial do setup
 * @returns {ShallowWrapper}
 */
const setup = (props: IDemoTddProps = {}, state: IDemoTddState = null) => {
    const wrapper = shallow(<DemoTdd {...props} />);
    if (state) {
        wrapper.setState(state);
    }
    return wrapper;
};

/**
 * Retorna ShallowWrapper contendo o nó do dado o valor do data-test
 * @param {ShallowWrapper} wrapper - ShallowWrapper no qual será procurado o valor
 * @param {string} value - Valor do atributo data-test  
 */
const findByTestAttr = (wrapper: ShallowWrapper, value: string): ShallowWrapper => {
    return wrapper.find(`[data-test='${value}']`);
};

describe("Test Driven Development", function () {
    const description = "Demo TDD";
    const props: IDemoTddProps = { description }

    beforeEach(() => {
    });

    it('Renderizado sem erro', () => {
        const wrapper = setup(props);
        const appComponent = findByTestAttr(wrapper, 'component-demo-tdd')
        expect(appComponent.length).toBe(1);
        // console.log(wrapper.debug());
    });
    it('Renderizando display', () => {
        const wrapper = setup(props);
        const counterDisplay = findByTestAttr(wrapper, 'display-contagem');
        expect(counterDisplay.text()).toBe("Contagem: 0")
        expect(counterDisplay.length).toBe(1);
    });
    it('Renderizando botão', () => {
        const wrapper = setup(props);
        const buttonIncrement = findByTestAttr(wrapper, 'button-incremento');
        expect(buttonIncrement.length).toBe(1);
    });
    it('Contagem iniciando com 0', () => {
        const counter: number = 0;
        const wrapper = setup(props, { counter });
        const stateInicial = wrapper.state('counter');
        expect(stateInicial).toBe(0);
    });
    it('Clicando no botão e mudando state', () => {
        const counter = 5;
        const wrapper = setup(props, { counter });
        let button: ShallowWrapper;
        let contagem: ShallowWrapper;

        contagem = wrapper.state('counter');
        expect(contagem).toBe(5);

        button = findByTestAttr(wrapper, 'button-incremento');
        button.simulate('click');

        contagem = wrapper.state('counter');
        expect(contagem).toBe(6);

        button = findByTestAttr(wrapper, 'button-decremento');
        button.simulate('click');
        button.simulate('click');
        button.simulate('click');
        button.simulate('click');
        button.simulate('click');

        contagem = wrapper.state('counter');
        expect(contagem).toBe(1);
    });
    it('Renderizanção do Display com os cliques nos botões', () => {
        const counter = 0;
        const wrapper = setup(null, { counter });
        let display: ShallowWrapper;
        let button: ShallowWrapper;

        display = findByTestAttr(wrapper, 'display-contagem');
        expect(display.text()).toBe("Contagem: 0")

        button = findByTestAttr(wrapper, 'button-incremento');
        button.simulate('click');
        button.simulate('click');

        display = findByTestAttr(wrapper, 'display-contagem');
        expect(display.text()).toBe("Contagem: 2")

        button = findByTestAttr(wrapper, 'button-decremento');
        button.simulate('click');
        button.simulate('click');
        button.simulate('click');
        button.simulate('click');
        button.simulate('click');
        button.simulate('click');

        display = findByTestAttr(wrapper, 'display-contagem');
        expect(display.text()).toBe("Contagem: 0")
    });
});