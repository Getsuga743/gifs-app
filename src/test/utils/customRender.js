import React from "react";
import { render } from '@testing-library/react';
import { Theme } from "../../styles/Theme";


// NOTE: https://github.com/kentcdodds/react-testing-library#custom-render
const customRender = (node) => {
    return render(
        <>
            <Theme>
                {node}
            </Theme>
        </>
    );
};


export { customRender as render };