import { theme } from '../../../../../style/Theme'
import { Text } from '../../../text/Text.styled'
import SkillList from '../../../skill/SkillList'
import { Container } from '../../Modal.styled'
import Wrapper from '../../../wrapper/Wrapper'
import React from 'react'

const ProjectAssigned = ({name, position, skills}) => {
    return (
        <>
            <Container padding="0 6rem 2rem 6rem">
                <Wrapper display='flex' justify='space-between' border='1px solid #DDDDDD' className='pb-6 pl-5'>
                    <Wrapper flex='1'>
                        <Text size='1.0625rem' weight='bold' color={theme.colors.blue200}>{name}</Text>
                    </Wrapper>
                    <Wrapper flex='1'>
                        <Wrapper display='flex' justify='center'>
                        <Text size='1.0625rem' color={theme.colors.black}>{position}(100%)</Text>
                        </Wrapper>
                        <Wrapper display='flex' justify='center'>
                            <SkillList skills={skills}/>
                        </Wrapper>
                    </Wrapper>
                    <Wrapper display='flex' direction='column' align='center' flex='1'>
                        <Text size='1.0625rem' color={theme.colors.blue200}>Ongoing</Text>
                        <Text size='1.0625rem' color={theme.colors.blue200}>05/12/2019 - Present</Text>
                    </Wrapper>
                </Wrapper>
            </Container>
        </>
    )
}

export default ProjectAssigned