import { useState } from 'react';
import { Menu } from 'semantic-ui-react'


function Nav (props) {

    const [activeSection, setActiveSection] = useState({active: 'home'});

    function handleClick(tab) {
        setActiveSection(tab);
        // TODO:: Jump to section
    }

    return (
        <Menu inverted>
            {/* <Menu.Item
            name='home'
            active={activeSection === 'home'}
            // onClick={handleClick('home')}
            />
            <Menu.Item
            name='Projects'
            active={activeSection === 'Projects'}
            // onClick={Click('Projects')}
            />
            <Menu.Item
            name='Bio'
            active={activeSection === 'Bio'}
            // onClick={handleClick('Bio')}
            /> */}
      </Menu>
    )
}

export default Nav;