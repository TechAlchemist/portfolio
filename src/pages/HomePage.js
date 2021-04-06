
import Header from '../components/Header';
import Projects from '../components/Projects';
import Bio from '../components/Bio';
import Footer from '../components/Footer';

function HomePage(props) {
    return (
        <div className='app'>
            <Header />
            <Projects />
            <Bio />
            <Footer />
        </div>
    );
}

export default HomePage;