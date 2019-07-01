import * as React from 'react';
import "jest";
import { shallow, mount, ShallowWrapper } from "enzyme";
import DemoTdd from "./DemoTdd";
import Display from "../component1/counter";
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
    let wrapper: ShallowWrapper;
    let displayWrapper: ShallowWrapper;

    beforeEach(() => {
        wrapper = setup(props);
        displayWrapper = shallow(<Display counter={wrapper.state('counter')} />)
    });

    it('Renderizado sem erro', () => {
        const appComponent = findByTestAttr(wrapper, 'component-demo-tdd')
        expect(appComponent.length).toBe(1);
        // console.log(wrapper.debug());
    });
    it('Renderizando display', () => {
        const counterDisplay = findByTestAttr(displayWrapper, 'display-contagem');
        expect(counterDisplay.text()).toBe("Contagem: 0")
        expect(counterDisplay.length).toBe(1);
    });
    it('Renderizando botão', () => {
        const buttonIncrement = findByTestAttr(wrapper, 'button-incremento');
        expect(buttonIncrement.length).toBe(1);
    });
    it('Contagem iniciando com 0', () => {
        const counter: number = 0;
        const wrapper = setup(props, { counter });
        const stateInicial = wrapper.state('counter');
        expect(stateInicial).toBe(0);
    });
    it('Mudança de state simulando cliques nos botões', () => {
        const counter = 0;
        const wrapper = setup(props, { counter });
        let contagem: ShallowWrapper;
        let button: ShallowWrapper;

        contagem = wrapper.state('counter');
        expect(contagem).toBe(0);

        button = findByTestAttr(wrapper, 'button-incremento');
        button.simulate('click');
        button.simulate('click');

        contagem = wrapper.state('counter');
        expect(contagem).toBe(2)

        button = findByTestAttr(wrapper, 'button-decremento');
        button.simulate('click');
        button.simulate('click');
        button.simulate('click');
        button.simulate('click');
        button.simulate('click');
        button.simulate('click');

        contagem = wrapper.state('counter');
        expect(contagem).toBe(0);
    });
    it('Renderização de um componente funcional simulando os cliques nos botões', () => {
        const counter = 5;
        const wrapper = setup(props, { counter });
        let button: ShallowWrapper;

        displayWrapper = shallow(<Display counter={wrapper.state('counter')} />)
        displayWrapper.find('[data-test="display-contagem"]')
        expect(displayWrapper.text()).toBe("Contagem: 5");

        button = findByTestAttr(wrapper, 'button-incremento');
        button.simulate('click');

        displayWrapper = shallow(<Display counter={wrapper.state('counter')} />)
        displayWrapper.find('[data-test="display-contagem"]')
        expect(displayWrapper.text()).toBe("Contagem: 6");

        button = findByTestAttr(wrapper, 'button-decremento');
        button.simulate('click');
        button.simulate('click');
        button.simulate('click');
        button.simulate('click');
        button.simulate('click');
        button.simulate('click');
        button.simulate('click');
        button.simulate('click');

        displayWrapper = shallow(<Display counter={wrapper.state('counter')} />)
        displayWrapper.find('[data-test="display-contagem"]')
        expect(displayWrapper.text()).toBe("Contagem: 0");
    });
    it('Mensagem de Erro se valor for negativo', () => {
        const counter = 0;
        const wrapper = setup(props, { counter });
        let button: ShallowWrapper;
        let errorLabel: ShallowWrapper;

        button = findByTestAttr(wrapper, 'button-decremento');
        // button.simulate('click');
        
        errorLabel = findByTestAttr(wrapper, 'error-message');
        expect(errorLabel.text()).toBe("Valor não pode ser negativo");
    });
    it('Se contém a classe .hidden', () => {
      // check the class of the error message
      const errorDiv = findByTestAttr(wrapper, 'error-message');
      const errorHasHiddenClass = errorDiv.hasClass('hidden');
      expect(errorHasHiddenClass).toBe(true);

    });
});