import { Container, Divider, List, Button } from 'semantic-ui-react';

function ProjectDescription({ tech, description, frontRepoLink, backRepoLink, singleRepoLink }) {


    return(
        <Container text>
            <Divider hidden />
            <h4> {description} </h4>
            <List divided >
                {
                    tech && tech.map(item => 
                        <List.Item key={item}>
                            <List.Content>
                                <List.Header>
                                    {item}
                                </List.Header>
                            </List.Content>
                        </List.Item>
                    )
                }
            </List>
       
                {
                   frontRepoLink ||  backRepoLink ?
                        <Button.Group>
                        <Button color='purple' href={frontRepoLink} target='_blank'> Frontend Repo</Button>
                        <Button.Or />
                        <Button color='violet' href={backRepoLink} target='_blank'> Backend Repo </Button>
                        </Button.Group>
                        :
                        <Button color='purple' href={singleRepoLink} target='_blank'>
                            Repo
                        </Button>
                    
                }

       
            <Divider hidden />
       </Container>
    )
}

export default ProjectDescription;