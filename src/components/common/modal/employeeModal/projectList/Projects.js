import { Body, Container } from '../../Modal.styled'
import { theme } from '../../../../../style/Theme'
import { Text } from '../../../text/Text.styled'
import Wrapper from '../../../wrapper/Wrapper'
import ProjectList from './ProjectList'
import React from 'react'

const Projects = ({ projects }) => {
    return (
        <>
            <Body>
                <Container padding="2rem 6rem">
                    <Wrapper display='flex' justify='space-between' border='1px solid #DDDDDD' className='pb-6 pl-5'>
                        <Text size='1rem' weight='bold' color={theme.colors.black}>Projects</Text>
                        <Text size='1rem' weight='bold' color={theme.colors.black}>Position & Tech</Text>
                        <Text size='1rem' weight='bold' color={theme.colors.black}>Timeframe</Text>
                    </Wrapper>
                </Container>
                <ProjectList projects={projects} />
            </Body>
        </>
    )
}

export default Projects