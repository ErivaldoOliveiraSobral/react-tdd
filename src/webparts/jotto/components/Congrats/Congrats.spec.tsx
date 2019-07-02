import * as React from 'react';
import "jest";
import { shallow, ShallowWrapper } from "enzyme";
import { findByTestAttr } from "../../../../test/Utils";

import Congrats, { Props } from "./Congrats";

const setup = (props: Props = { success: false }) => {
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
        wrapper = setup();
        const component = findByTestAttr(wrapper, 'component-congrats');
        expect(component.text()).toBe('');
    });
    it("Mostrar uma mensagem quando a propriedade for verdadeira", () => {
        wrapper = setup({ success: true });
        const message = findByTestAttr(wrapper, 'congrats-message');
        expect(message.text().length).not.toBe(0);
    });
    it("Mostrar mensagem passada por parametro", () => {
        wrapper = setup({ success: true, text: "Mostrar esta mensagem" });
        const message = findByTestAttr(wrapper, 'congrats-message');
        expect(message.text()).toBe("Mostrar esta mensagem");
    });
    it("Mostrar mesagem padrão", () => {
        wrapper = setup({ success: true });
        const message = findByTestAttr(wrapper, 'congrats-message');
        expect(message.text()).toBe("Parabéns! Você acertou a palavra!");
    });
});

