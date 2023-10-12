import '../Login/Login.css';
import '../../styles/StyleGlobal/style-global.css';
import Logo from '../../assets/Icons/Group 16.svg';
import LogoLogin from '../../assets/logoLogin.svg';

function Login() {
    return (
        <>
            <header className='headerLogin'>
                <section className='container'>
                    <div className='contentLogin'>
                        <img src={Logo} alt="" />
                    </div>
                </section>
            </header>

            <main>
                <section className="containerMainLogin">
                    <div className="container">
                        <div className="containerContentLogin">
                            <div className="containerLeftLogin">
                                <img src={LogoLogin} alt="" />
                            </div>
                            <div className="containerRightLogin">
                                <h1>Acontecendo agora.</h1>
                                <div className="titleLogin">
                                    <h3><span>Acesse</span> seu ambiente.</h3>
                                </div>
                                <div className="form-inputsLogin">
                                    <input type="email" placeholder="Email" />
                                        <input type="password" placeholder="Senha" />
                                        </div>
                                        <div className="accessLogin">
                                            <button>Entrar</button>
                                        </div>
                                </div>
                            </div>
                        </div>
                </section>
            </main>
        </>
    )
}

export default Login;