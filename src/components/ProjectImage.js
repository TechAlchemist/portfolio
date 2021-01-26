import { Image, Container } from 'semantic-ui-react';

function ProjectImage ({source, link, content}) {

    return (
        <Container>
      
            <Image
                src={source}
                as='a'
                href={link}
                target='_blank'
                rounded

                label={{
                color: 'black',
                content: content,
                ribbon: true,
                }}

            />
        </Container>
    )
}

export default ProjectImage;