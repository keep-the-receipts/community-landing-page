import React from 'react';
import styled from 'styled-components';
import { Button as MuiButton, LinearProgress as MuiLinearProgress } from '@material-ui/core';

import { Base } from '../../components'
import { perforationBottom, perforationTop } from './assets';

const Layout = styled.div`
    padding: 3rem 1rem 10rem;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    flex-direction: column;
`;

const FrameWrap = styled.div`
    position: relative;
    width: 100%;
    max-width: 40rem;
    height: 0;
    background: grey;
    padding-bottom: 56.25%; /* 16:9 */
`

const Frame = styled.iframe`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    border: 0 solid transparent;
`

const Container = styled.div`
    width: 100%;
    max-width: 40rem;
`

const Paper = styled.div`
    background: white;
    width: 100%;
    margin: -0.35rem 0;
    max-width: 40rem;
    padding: 1rem 0rem 4rem;
    box-shadow: 1px 1px 15px 4px rgba(0, 0, 0, 0.12);
`

const Actions = styled.div`
    padding: 1rem 0;
    display: flex;
    justify-content: center;
    flex-direction: column;

    @media (min-width: 40rem) {
        flex-direction: row;
    }
`

const Button = styled(MuiButton)`
    border-radius: 2px;
    margin: 0.5rem;
    font-family: Montserrat, sans-serif;
    font-weight: 800;
    letter-spacing: -0.25px;
    text-transform: initial;
`;

const Title = styled.h1`
    text-align: center;
    font-weight: 800;
    font-size: 3rem;
    letter-spacing: -1.5px;
    margin: 1rem 0 1.5rem;
    font-family: Montserrat, sans-serif;
    text-transform: uppercase;
`;

const SubTitle = styled.h2`
    text-align: center;
    font-weight: 800;
    font-size: 1.75rem;
    letter-spacing: -0.5px;
    font-family: Montserrat, sans-serif;
    text-transform: uppercase;
    margin: 2rem 0 0.25rem;
    border-bottom: 1px dotted #AAA;
`

const Paragraph = styled.p`
    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji;
    font-weight: 400;
    font-size: 1rem;
    margin: 2rem 2.25rem 1rem  2.75rem;
    letter-spacing: -0.25px;
`

const LinearProgress = styled(MuiLinearProgress)`
    height: 1rem;
    border-radius: 50px;
    margin: 0rem 2rem 0;
`;

const Label = styled.div`
    display: flex;
    justify-content: center;
    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji;
    font-weight: 500;
    font-size: 1rem;
    margin: 1.5rem 0 0.5rem;
    letter-spacing: -0.25px;
`

/**
 * @name Homepage
 *
 * @description TODO Add description
 * 
 * @param {object} props
 * @param {string} props.children
 */
export const Homepage = (props) => {
    const { pageContext: { progress }} = props;

    return (
        <Base>
            <Layout>
                <Container>
                    <img src={perforationTop} alt="" />

                    <Paper>
                        <Title>Keep the Receipt</Title>

                        <FrameWrap>
                            <Frame width="100%" height="100%" src="https://www.youtube.com/embed/JtTMcY6v0bs" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />
                        </FrameWrap>

                        <SubTitle>Get Involved</SubTitle>

                        <Paragraph><strong><em>Keep the receipt</em> is a volunteer-driven project to catalogue South African provincial and national government spending related to COVID-19.</strong></Paragraph>

                        <Paragraph>The aim is to convert the existing documents in a machine-readable, searchable format. <a href="https://www.meetup.com/Codebridge/" target="_blank">Codebridge</a> is calling on the broader tech community to help with this task.</Paragraph>
                        
                        
                        <Paragraph>In order to get started please take a couple of minutes to watch the above video.</Paragraph>

                        <Actions>
                            <Button variant="contained" href="https://www.youtube.com/embed/JtTMcY6v0bs">1. Watch Video</Button>
                            <Button variant="contained" href="https://github.com/South-Africa-Government-Procurement/Data-cleaning/issues?q=is%3Aissue+is%3Aopen+no%3Aassignee" target="_blank">2. Select an Issue</Button>
                            <Button variant="contained" href="https://github.com/South-Africa-Government-Procurement/Data-cleaning/upload/master" target="_blank">3. Create Pull Request</Button>
                        </Actions>

                        <SubTitle>Total Progress</SubTitle>

                        <Label><span><strong>{progress}%</strong> Captured</span></Label>
                        <LinearProgress value={progress} variant="determinate" />
                    </Paper>

                    <img src={perforationBottom} alt="" />
                </Container>
            </Layout>
        </Base>
    )
}

export default Homepage;