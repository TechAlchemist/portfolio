import { List, Container } from 'semantic-ui-react';

function SkillList({ skills }) {
    return (

        <Container text>

            <List horizontal>

                {/* MongoDB */}
                <List.Item>
                    <i className="devicon-mongodb-plain-wordmark colored"></i>
                </List.Item>

                {/* Express */}
                <List.Item>
                    <i className="devicon-express-original-wordmark"></i>
                </List.Item>

                {/* React */}
                <List.Item>
                    <i className="devicon-react-original-wordmark colored"></i>
                </List.Item>

                {/* NodeJS */}
                <List.Item>
                    <i className="devicon-nodejs-plain-wordmark colored"></i>
                </List.Item>

                {/* HTML5 */}
                <List.Item>
                    <i className="devicon-html5-plain-wordmark colored"></i>
                </List.Item>

                {/* CSS3 */}
                <List.Item>
                    <i className="devicon-css3-plain-wordmark colored"></i>
                </List.Item>

                {/* Javascript */}
                <List.Item>
                    <i className="devicon-javascript-plain colored"></i>
                </List.Item>

                {/* Java */}
                <List.Item>
                    <i className="devicon-java-plain-wordmark colored"></i>
                </List.Item>

                {/* PostgreSQL */}
                <List.Item>
                    <i className="devicon-postgresql-plain-wordmark colored"></i>
                </List.Item>

                {/* MySQL */}
                <List.Item>
                    <i className="devicon-mysql-plain-wordmark colored"></i>
                </List.Item>

                {/* Ruby */}
                <List.Item>
                    <i className="devicon-ruby-plain-wordmark colored"></i>
                </List.Item>

                {/* Heroku */}
                <List.Item>
                    <i className="devicon-heroku-original-wordmark colored"></i>
                </List.Item>

                {/* GitHub */}
                <List.Item>
                    <i className="devicon-github-original-wordmark colored"></i>
                </List.Item>

                {/* jQuery */}
                <List.Item>
                    <i className="devicon-jquery-plain-wordmark colored"></i>
                </List.Item>

                {/* Firebase */}
                <List.Item>
                    <i className="devicon-firebase-plain-wordmark colored"></i>
                </List.Item>

            </List>

        </Container>
    );
}

export default SkillList;