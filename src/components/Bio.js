import { Container, Divider, Icon, Header} from 'semantic-ui-react'

function Bio (props) {
    return (
        <Container>
            <Divider horizontal>
                <Header as='h1'>
                    <Icon name='quote left' />
                    Biography
                </Header>
            </Divider>
            <h2> The Short </h2>
            <p> I am silly boy hehe </p>
            <hr />
            <h2> The Long </h2>
            <p> Mwaheheheheheheheheheheheheheheheh Mwa hehehe Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis placeat expedita adipisci delectus dolore hic illo nisi, corrupti ducimus sit repudiandae quidem doloribus enim pariatur fuga voluptatem dicta alias eius. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit repellat tempore labore recusandae beatae, porro quos aliquam sint, sed quaerat debitis! Facere, repellat voluptate pariatur officia perspiciatis ipsa nulla recusandae? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, numquam esse, amet temporibus tenetur aliquam dolorum eveniet officiis delectus ipsa ipsum eos quidem voluptate aut. Cum quasi ad eos voluptates. </p>

      </Container>
    )
}

export default Bio;