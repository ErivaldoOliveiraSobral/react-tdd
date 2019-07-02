import * as React from 'react';
import "jest";
import { shallow, ShallowWrapper } from "enzyme";
import { findByTestAttr } from "../../../../test/Utils";

import Congrats from "./Congrats";

const setup = (props: any = {}) => {
    return shallow(<Congrats {...props} />);
}

describe("Componente que exibirá uma mensagem de sucesso", () => {
    let wrapper: ShallowWrapper;

    beforeEach(() => {
    });
    
    it("div renderizou corretamente", () => {
        wrapper = setup();
        const component = findByTestAttr(wrapper, 'component-congrats');
        expect(component.length).toBe(1);
    });
    it("Quando a propriedade é falsa não mostrar mensagem", () => {
        wrapper = setup({ success: false });
        const component = findByTestAttr(wrapper, 'component-congrats');
        expect(component.text()).toBe('');
    });
    it("Mostrar uma mensagem quando a propriedade for verdadeira", () => {
        wrapper = setup({ success: true });
        const message = findByTestAttr(wrapper, 'congrats-message');
        expect(message.text().length).not.toBe(0);
    });
});

