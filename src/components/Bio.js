import { Container, Divider, Icon, Header, Image } from 'semantic-ui-react';
// import ProfilePic from '../assets/profile-pic.jpg';
import SkillList from '../components/SkillList';

function Bio (props) {
    return (
        <Container>
            <Divider horizontal>
                <Header as='h1'>
                    <Icon name='quote left' />
                    Biography
                </Header>
            </Divider>
            {/* <Image src={ProfilePic} size='medium' circular centered /> */}
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