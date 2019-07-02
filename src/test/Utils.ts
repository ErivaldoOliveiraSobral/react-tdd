import { ShallowWrapper } from "enzyme";

/**
 * Retorna ShallowWrapper contendo o nó do dado o valor do data-test
 * @param {ShallowWrapper} wrapper - ShallowWrapper no qual será procurado o valor
 * @param {string} value - Valor do atributo data-test  
 */
export const findByTestAttr = (wrapper: ShallowWrapper, value: string): ShallowWrapper => {
    return wrapper.find(`[data-test='${value}']`);
};