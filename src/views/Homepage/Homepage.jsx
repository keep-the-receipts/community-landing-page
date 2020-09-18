import React from 'react';
import styled from 'styled-components';
import { Button } from '../../components'

const Base = styled.div`
    background: #DDD;
`;

/**
 * @name Homepage
 *
 * @description TODO Add description
 * 
 * @param {object} props
 * @param {string} props.children
 */
export const Homepage = (props) => {
    return (
        <Base>
            <pre>{JSON.stringify(props.pageContext.githubStats)}</pre>
            <Button>Hello World!</Button>
        </Base>
    )
}

export default Homepage;