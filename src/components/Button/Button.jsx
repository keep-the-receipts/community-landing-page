import React from 'react';
import { Button as MuiButton } from '@material-ui/core'
import styled from 'styled-components';

const Base = styled(MuiButton)`
    border: 1px solid green;
`;

/**
 * @name Button
 *
 * @description TODO Add description
 * 
 * @param {object} props
 * @param {string} props.children
 */
export const Button = (props) => {
    const { children } = props;
    return <Base>{children}</Base>
}

export default Button;