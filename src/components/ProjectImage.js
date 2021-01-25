import { Image, Container } from 'semantic-ui-react';

function ProjectImage ({source, link, content}) {

    return (
        <Container>
      
            <Image
                label={{
                as: 'a',
                color: 'black',
                content: content,
            
                ribbon: true,
                }}
                src={source}
                as='a'
                href={link}
                target='_blank'
                rounded
            />
          
        </Container>
    )
}

export default ProjectImage;