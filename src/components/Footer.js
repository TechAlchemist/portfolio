import { Divider, Icon, Grid, Button, Segment, Header} from 'semantic-ui-react'

function Footer (props) {
    return (
 
        <Segment vertical>
            <Divider horizontal>
                <Header as='h1'>
                    <Icon name='mail' />
                    Get in Touch
                </Header>
            </Divider>
            <Grid columns={3} stackable textAlign='center'>
                <Grid.Row verticalAlign='middle'>
                    {/* LinkedIN */}
                    <Grid.Column>
                        <Button color='linkedin' href='https://www.linkedin.com/in/brandon-robert-myers/' target='_blank' >
                            <Icon name='linkedin' id='footer-icon' /> LinkedIn
                        </Button>
                        <h5> Add me on LinkedIn</h5>
                    </Grid.Column>
                    {/* GitHub */}
                    <Grid.Column>
                        <Button color='black' href='https://github.com/TechAlchemist' target='_blank' >
                            <Icon name='github' id='footer-icon' /> GitHub
                        </Button>
                        <h5> View my work on GitHub</h5>
                    </Grid.Column>
                    {/* Email Me */}
                    <Grid.Column>
                    <Button color='green' href='mailto:brandonRmyers1512@gmail.com' target='_blank'>
                            <Icon name='mail' id='footer-icon' /> Email
                        </Button>
                        <h5> Connect with me via Email</h5>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            <Divider hidden />
        </Segment>
    );
}

export default Footer; 