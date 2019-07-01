import * as React from "react";

const Display = (props: any): JSX.Element => {
    const { counter } = props;
    return (
        <h1 data-test="display-contagem">Contagem: {counter ? counter : 0}</h1>
    );
};

export default Display;