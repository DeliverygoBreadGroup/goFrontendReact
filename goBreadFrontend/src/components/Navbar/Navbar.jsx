import '../../styles/StyleGlobal/style-global.css';
import './Navbar.css';
import Logo from '../../assets/Icons/Group 16.svg';
import ButtonEnter from '../ButtonEnter/ButtonEnter';

function Navbar() {
    return (
        <header>
            <div className='container'>
                <div className='content-navbar'>
                    <img src={Logo} alt="logo" className="logo" />
                        <nav>
                            <a href="#">SERVIÇOS</a>
                            <a href="#">ASSINATURAS</a>
                            <a href="#">Blog</a>
                        </nav>
                </div>
                <ButtonEnter />
            </div>
        </header>
    )
}

export default Navbar;