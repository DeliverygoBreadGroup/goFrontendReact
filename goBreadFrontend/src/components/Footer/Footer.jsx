import './Footer.css';
import '../../styles/StyleGlobal/style-global.css';
import Logo from '../../assets/Icons/Group 16.svg';

function Footer() {
    return (
        <footer className="footer">
            <div className="container containerFooter">
                <div className="colunasInfo">
                    <img className="imgLogo" src={Logo} alt="" />
                        <button className="btnInicio">Início</button>
                </div>
                <div className="colunasInfo">
                    <a href="">Home</a>
                    <a href="">Sou cliente</a>
                    <a href="">Sou comerciante</a>
                    <a href="">Serviços</a>
                    <a href="">Inovações</a>
                </div>
                <div className="colunasInfo">
                    <a href="">Whatsapp</a>
                    <a href="">Telegram</a>
                    <a href="">Instagram</a>
                    <a href="">Twitter</a>
                    <a href="">Facebook</a>
                </div>
                <div className="colunasInfo colunaFinal">
                    <h2>+ 55 (11) 4657-8765</h2>
                    <div className="divEmail">
                        <p>Email de contato</p>
                        <h2>gobread@contact.com</h2>
                    </div>
                    <div className="divEmail">
                        <p>Email corporativo</p>
                        <h2>gobread@group.com</h2>
                    </div>
                </div>
            </div>
            <div className="finalFooter">
                <div className="container containerFinal">
                    <p>2023 © Designed by Eric</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;