import { Container, Divider, Icon, Header } from 'semantic-ui-react'
import ProjectImage from '../components/ProjectImage';
import ProjectDescription from '../components/ProjectDescription';

import serviceAlchemy from '../assets/service-alchemy.png';
import recipeFinder from '../assets/recipe-finder.png';
import monsterCreator from '../assets/monster-creator.png';
import fakebook from '../assets/fakebook.png';
import birdsCalifornia from '../assets/birds-of-california.png';

function Projects (props) {
    return (
        <Container>
                 <Divider horizontal style={{marginTop: 100, marginBottom: 50}} > 
                    <Header as='h1'>
                        <Icon name='terminal' />
                        Projects
                    </Header>
                </Divider>
    
                    {/* RECIPE FINDER */}
                    <ProjectImage 
                    source={recipeFinder} 
                    link={'https://brandons-recipe-finder.herokuapp.com/'} 
                    content={'Recipe Finder'} 
                    />
                        <ProjectDescription 
                        description={'Recipe Finder uses Spoonacular API to search for recipes and return modals to the user to view recipes. It also features a rudimentary login system with sessions to favorite recipes to view later. '}
                        tech={['HTML5', 'CSS3', 'JavaScript', 'AJAX', 'PHP', 'MySQL']}
                        singleRepoLink={'https://github.com/TechAlchemist/recipe-finder'}
                        />

                    {/* BIRDS OF CALIFONIRA */}
                    <ProjectImage source={birdsCalifornia} 
                        link={'https://birds-of-cali.herokuapp.com/'} 
                        content={'Birds of California'}
                    />
                        <ProjectDescription 
                            description={'Birds of California uses NodeJS with EJS along with a plugin called DataTables to create bird watching checklists that can be saved, updated, deleted or printed normally or as a PDF. '}
                            tech={['HTML5', 'CSS3', 'JavaScript', 'DataTables', 'NodeJS', 'EJS', 'MongoDB']}
                            singleRepoLink={'https://github.com/TechAlchemist/birds-of-california'}
                        />

                    {/* SERVICE ALCHEMY */}
                    <ProjectImage source={serviceAlchemy} link={'https://crm-service-alchemy.herokuapp.com/'} content={'Service Alchemy'} />
                        <ProjectDescription 
                            description={'Service Alchemy is a Customer Relationship Management and IT ticketing service platform. Customers can login and submit incidents or service requests. Engineers can grab tickets from a queue and mark them as complete. A survey system is in place for customers to rate closed tickets. '}
                            tech={['MongoDB', 'Express', 'React', 'NodeJS', 'Materialize', 'CSS3']}
                            frontRepoLink={'https://github.com/TechAlchemist/serviceAlchemy-frontend'}
                            backRepoLink={'https://github.com/TechAlchemist/serviceAlchemy-backend'}
                        />

                    {/* MONSTER CREATOR */}
                    <ProjectImage source={monsterCreator} link={'https://monster-client-frontend.herokuapp.com/'} content={'Monster Creator'} />
                        <ProjectDescription 
                            description={'Monster Creator was created with a team of 3 people, as a way to practice collaboration. I focused on the front-end creating the forms, validation, and presentation of a RESTful API served from Ruby on Rails. '}
                            tech={['React', 'PostgreSQL', 'Ruby', 'Ruby on Rails', 'CSS3', 'Bootstrap 4']}
                            frontRepoLink={'https://github.com/TechAlchemist/monster_client'}
                            backRepoLink={'https://github.com/TechAlchemist/monster_api'}
                        />

                    {/* FAKEBOOK */}
                    <ProjectImage source={fakebook} link={'https://fakebook-ql.herokuapp.com/'} content={'Fakebook'} />
                        <ProjectDescription 
                            description={'Fakebook is a fake social media platform created to learn GraphQL. Authentication is enabled with JSON web tokens. The GraphQL api that allows for manipulating the posts and comment data is run on an Apollo server. '}
                            tech={['MongoDB', 'Apollo', 'React', 'GraphQL', 'CSS3', 'SemanticUI']}
                            frontRepoLink={'https://github.com/TechAlchemist/fakebook-client'}
                            backRepoLink={'https://github.com/TechAlchemist/fakebook'}
                        />
                
            </Container>

    )
}

export default Projects;