import '../../styles/StyleGlobal/style-global.css';
import './NavbarComerciante.css';
import Logo from '../../assets/Icons/Group 16.svg';
import ButtonEnter from '../ButtonEnter/ButtonEnter';


function NavbarComercinte() {

    window.addEventListener("scroll", function () {
        var header = document.querySelector("header");
        header.classList.toggle("sticky", window.scrollY > 0);
    });

    return (
        <>
            <header>
                <div className='container'>
                    <div className='content-navbar'>
                        <img src={Logo} alt="logo" className="logo" />
                        <nav>
                            <a href="#">VANTANGENS</a>
                            <a href="#">PERSONALIZE</a>
                        </nav>
                    </div>
                    <ButtonEnter />
                </div>
            </header>
        </>
    )
}

export default NavbarComercinte;