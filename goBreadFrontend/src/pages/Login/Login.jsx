import '../Login/Login.css';
import '../../styles/StyleGlobal/style-global.css';
import Logo from '../../assets/Icons/Group 16.svg';
import LogoLogin from '../../assets/logoLogin.svg';
import { Link } from 'react-router-dom';
import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = {
            email: email,
            senha: senha,
        };

        const response = await axios.post('http://localhost:8080/clientes/login', data)
            .then((response) => {
                console.log(response.data);
            }).catch((error) => {
                console.log(error);
            });
    };

    return (
        <>
            <header className='headerLogin'>
                <section className='container'>
                    <div className='contentLogin'>
                        <Link to="/"><img src={Logo} alt="" /></Link>
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
                                <form onSubmit={handleSubmit}>
                                    <div className="form-inputsLogin">
                                        <input
                                            type="email"
                                            placeholder="Email"
                                            name="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />

                                        <input
                                            type="password"
                                            placeholder="Senha"
                                            name="senha"
                                            value={senha}
                                            onChange={(e) => setSenha(e.target.value)}
                                        />
                                    </div>
                                </form>
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