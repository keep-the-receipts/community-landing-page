import React from 'react';
import styled from 'styled-components';
import { Button as MuiButton, LinearProgress as MuiLinearProgress } from '@material-ui/core';
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

import { Base } from '../../components'


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
    letter-spacing: -3px;
    margin: 1rem 0 0;
    font-family: Montserrat, sans-serif;
    text-transform: uppercase;
    line-height: 1;
    font-size: 2.5rem;

    @media (min-width: 600px) {
        font-size: 3rem;
    }
`;

const SubTitle = styled.h2`
    text-align: center;
    font-weight: 800;
    font-size: 1.75rem;
    letter-spacing: -1px;
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

const Badge = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem 0 2rem;
`

const List = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    padding: 1rem;
    justify-content: center;
`

const Person = styled.a`
    max-width: 50%;
    padding: 0.5rem 1rem 0.5rem 0.5rem;
    border-radius: 4%;
    display: inline-flex;
    align-items: center;
    text-decoration: none;

    &:hover {
        background: rgba(0, 0, 0, 0.1)
    }
`

const Avatar = styled.img`
    border-radius: 50%;
    width: 40px;
    border: 1px solid rgba(0, 0, 0, 0.2)
`

const Name = styled.span`
    font-weight: 700;
    font-family: Montserrat,sans-serif;
    margin-left: 0.5rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: rgba(0, 0, 0, 0.87);
`

// const ChartWrap = styled.div`
//     padding: 2rem 1rem;
//     display: flex;
//     justify-content: center;
// `

const BottomPerf = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 10">
        <path d="M6.15 10a9 9 0 1118 0h7.41a9 9 0 1118 0h7.42a9 9 0 1118 0h7.42a9 9 0 1118 0h7.42a9 9 0 1118 0h7.42a9 9 0 1118 0h7.42a9 9 0 1118 0h7.42a9 9 0 1118 0h7.42a9 9 0 1118 0h7.42a9 9 0 1118 0H260a9 9 0 0118 0h7.41a9 9 0 0118 0h7.41a9 9 0 0118 0h7.41a9 9 0 0118 0h7.41a9 9 0 0118 0H387a9 9 0 0118 0h7.41a9 9 0 0118 0h7.41a9 9 0 0118 0h7.41a9 9 0 0118 0h7.41a9 9 0 1118 0h7.42a9 9 0 1118 0h7.42a9 9 0 1118 0h7.42a9 9 0 1118 0h7.42a9 9 0 1118 0h7.42a9 9 0 1118 0H640V0H0v10z" fill="#fff" data-name="Layer 1"/>
    </svg>
)

const TopPerf = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 10">
        <path d="M633.85 0a9 9 0 01-9 9 9 9 0 01-9-9h-7.42a9 9 0 01-9 9 9 9 0 01-9-9h-7.42a9 9 0 01-9 9 9 9 0 01-9-9h-7.42a9 9 0 01-9 9 9 9 0 01-9-9h-7.42a9 9 0 01-9 9 9 9 0 01-9-9h-7.27a9 9 0 01-9 9 9 9 0 01-9-9h-7.42a9 9 0 01-9 9 9 9 0 01-9-9h-7.42a9 9 0 01-9 9 9 9 0 01-9-9h-7.42a9 9 0 01-9 9 9 9 0 01-9-9h-7.42a9 9 0 01-9 9 9 9 0 01-9-9H380a9 9 0 01-9 9 9 9 0 01-9-9h-7.41a9 9 0 01-9 9 9 9 0 01-9-9h-7.41a9 9 0 01-9 9 9 9 0 01-9-9h-7.41a9 9 0 01-9 9 9 9 0 01-9-9h-7.37a9 9 0 01-9 9 9 9 0 01-9-9H253a9 9 0 01-9 9 9 9 0 01-9-9h-7.41a9 9 0 01-9 9 9 9 0 01-9-9h-7.41a9 9 0 01-9 9 9 9 0 01-9-9h-7.41a9 9 0 01-9 9 9 9 0 01-9-9h-7.41a9 9 0 01-9 9 9 9 0 01-9-9h-7.42a9 9 0 01-9 9 9 9 0 01-9-9h-7.42a9 9 0 01-9 9 9 9 0 01-9-9h-7.24a9 9 0 01-9 9 9 9 0 01-9-9h-7.39a9 9 0 01-9 9 9 9 0 01-9-9H24.5a9 9 0 01-9 9 9 9 0 01-9-9H0v10h640V0z" fill="#fff" />
    </svg>
)

const HacktoberBadge = () => (
    <Badge>
        <a href="https://hacktoberfest.digitalocean.com/" target="_blank" rel="noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" width="208" height="20" role="img" aria-label="Hacktober Fest 2020: Official Event">
                <title>Hacktober Fest 2020: Official Event</title>

                <linearGradient id="s" x2="0" y2="100%"><stop offset="0" stopColor="#bbb" stopOpacity=".1"/><stop offset="1" stopOpacity=".1"/></linearGradient>
                <clipPath id="r"><rect width="208" height="20" rx="3" fill="#fff"/></clipPath>
                <g clipPath="url(#r)"><rect width="125" height="20" fill="#555"/>
                
                <rect x="125" width="83" height="20" fill="#0069ff"/><rect width="208" height="20" fill="url(#s)"/></g>
                
                <g fill="#fff" textAnchor="middle" fontFamily="Verdana,Geneva,DejaVu Sans,sans-serif" textRendering="geometricPrecision" fontSize="110">
                    <text aria-hidden="true" x="635" y="150" fill="#010101" fillOpacity=".3" transform="scale(.1)" textLength="1150">Hacktober Fest 2020</text>
                    <text x="635" y="140" transform="scale(.1)" fill="#fff" textLength="1150">Hacktober Fest 2020</text><text aria-hidden="true" x="1655" y="150" fill="#010101" fillOpacity=".3" transform="scale(.1)" textLength="730">Official Event</text><text x="1655" y="140" transform="scale(.1)" fill="#fff" textLength="730">Official Event</text>
                </g>
            </svg>
        </a>
    </Badge>
);

/**
 * @name Homepage
 *
 * @description TODO Add description
 * 
 * @param {object} props
 * @param {string} props.children
 */
export const Homepage = (props) => {
    const { pageContext: { githubStats }} = props;

    return (
        <Base>
            <Layout>
                <Container>
                    <TopPerf />

                    <Paper>
                        <Title>Keep the Receipt</Title>

                        <HacktoberBadge />

                        <FrameWrap>
                            <Frame width="100%" height="100%" src="https://www.youtube.com/embed/c4rBE-BUiv0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />
                        </FrameWrap>

                        <SubTitle>Get Involved</SubTitle>

                        <Paragraph><strong><em>Keep the receipt</em> is a volunteer-driven project to catalogue South African provincial and national government spending related to COVID-19.</strong></Paragraph>

                        <Paragraph>The aim is to convert the existing documents in a machine-readable, searchable format. <a href="https://www.meetup.com/Codebridge/" target="_blank" rel="noreferrer">Codebridge</a> is calling on the broader tech community to help with this task.</Paragraph>
                        
                        <Paragraph>In order to get started please take a couple of minutes to watch the above video.</Paragraph>

                        <Actions>
                            <Button variant="contained" href="https://www.youtube.com/watch?v=c4rBE-BUiv0">1. Watch Video</Button>
                            <Button variant="contained" href="https://github.com/South-Africa-Government-Procurement/Data-cleaning/issues?q=is%3Aissue+is%3Aopen+no%3Aassignee" target="_blank">2. Select an Issue</Button>
                            <Button variant="contained" href="https://github.com/South-Africa-Government-Procurement/Data-cleaning/new/master" target="_blank">3. Create Pull Request</Button>
                        </Actions>

                        <SubTitle>Contributors</SubTitle>

                        <List>
                            {githubStats.collaborators.map(({ id, avatarUrl, name, url }) => <Person key={id} href={url}>
                                <Avatar src={avatarUrl} alt="" />
                                <Name target="_blank" rel="noreferrer">{name}</Name>
                             </Person>)}
                        </List>

                        <SubTitle>Total Progress</SubTitle>

                        <Label><span><strong>4%</strong> Captured</span></Label>
                        <LinearProgress value={4} variant="determinate" />
                    </Paper>

                    <BottomPerf />
                </Container>
            </Layout>
        </Base>
    )
}

export default Homepage;