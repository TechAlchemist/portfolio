import { Container, Divider, Icon, Header, Image} from 'semantic-ui-react';
import SkillList from '../components/SkillList';
import pic from '../components/profile-pic.jpg';

function Bio (props) {
    return (
        <Container>
            <Divider horizontal style={{marginTop: 100, marginBottom: 50}}>
                <Header as='h1'>
                    <Icon name='quote left' />
                    Biography
                </Header>
            </Divider>
            <Image src={pic} size='large' circular centered />
                <Divider hidden />
            <Container text>
            <h3> Hello, my name is Brandon Robert Myers. I am a software engineer / web developer based in California. I love creating and building things with code.  My goal is to create efficient and reliable software, while always learning and growing. </h3> 
            </Container>
            <Divider horizontal />          
            <SkillList />
            <Divider horizontal />
      </Container>
    )
}

export default Bio;