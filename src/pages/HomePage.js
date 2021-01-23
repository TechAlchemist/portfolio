import Header from '../components/Header';
import Nav from '../components/Nav';
import Projects from '../components/Projects';
import Bio from '../components/Bio';
import Footer from '../components/Footer';

function HomePage(props) {
    return (
        <div>
            <Header />
            <Nav />
            <Projects />
            <Bio />
            <Footer />
        </div>
    );
}

export default HomePage;