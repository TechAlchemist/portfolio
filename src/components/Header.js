import './style.css';
import { Button, Icon } from 'semantic-ui-react'

function Hero (props) {
    return (
        <div className="hero-image">
            <div className="text-overlay">
                <h1>Brandon Myers</h1>
                <h2>Software Engineer</h2>
                <h2>Web Developer</h2>
                <Button animated>
                    <Button.Content visible>Contact Me</Button.Content>
                    <Button.Content hidden>
                        <Icon name='mail' />
                    </Button.Content>
                </Button>
            </div>
        </div>
    )
}

export default Hero;