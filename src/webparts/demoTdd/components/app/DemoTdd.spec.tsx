import * as React from 'react';
import "jest";
import { shallow, mount } from "enzyme";
import DemoTdd from "./DemoTdd";

describe("Test Driven Development", function () {
    const description = "Demo TDD";
    let props: any;

    beforeEach(() => {
        props = { description };
    });

    it('Renderizado sem erro', () => {
        const wrapper = shallow(<DemoTdd {...props} />);
        // console.log(wrapper.debug());
        // expect(wrapper).toBeTruthy();   
        const appComponent = wrapper.find("[data-test='component-demo-tdd']");
        expect(appComponent.length).toBe(1);
    });
    it('Renderizando display', () => {
        const wrapper = shallow(<DemoTdd {...props} />);
        const counterDisplay = wrapper.find("[data-test='component-counter-display']");
        expect(counterDisplay.length).toBe(1);
    });
});