import { Container, Divider, Icon, Header } from 'semantic-ui-react'
import ProjectImage from '../components/ProjectImage';
import serviceAlchemy from '../assets/service-alchemy.png';
import recipeFinder from '../assets/recipe-finder.png';
import monsterCreator from '../assets/monster-creator.png';
import fakebook from '../assets/fakebook.png';
import birdsCalifornia from '../assets/birds-of-california.png';

function Projects (props) {
    return (
        <Container>
                 <Divider horizontal>
                    <Header as='h1'>
                        <Icon name='terminal' />
                        Projects
                    </Header>
                </Divider>
    
                <ProjectImage source={recipeFinder} link={'http://google.com'} content={'Recipe Finder'} />
                <br />
                <ProjectImage source={birdsCalifornia} link={'http://google.com'} content={'Birds of California'} />
                <br />
                <ProjectImage source={serviceAlchemy} link={'http://google.com'} content={'Service Alchemy'} />
                <br />
                <ProjectImage source={monsterCreator} link={'http://google.com'} content={'Monster Creator'} />
                <br />
                <ProjectImage source={fakebook} link={'http://google.com'} content={'Fakebook'} />
                <br />
            </Container>

    )
}

export default Projects;