import './Padaria.css';
import logoWhite from '../../assets/Icons/logoWhite.svg';
import imageEntrega from '../../assets/image.png';
import imageBakery from '../../assets/ImageBakery.png';
import iconBack from '../../assets/Icons/🦆 icon _arrow left_.svg';
import { Link } from 'react-router-dom';

function Padaria() {
    return (
        <>
            <main>
                <section className="pai">
                    <div className="left-container">
                        <div className="navbar-content">
                            <img src={logoWhite} alt="logo" className="logo" />
                        </div>
                        <div className="contentTitle">
                            <h1>É HORA DE ESCOLHER<br></br> SUA <span>PADARIA</span>.</h1>
                        </div>
                        <div className="image-content">
                            <img src={imageEntrega} alt="" />
                        </div>
                    </div>

                    <div className="right-side">
                        <div className="container">
                            <div className="container-padaria">
                                <div className="information-card">
                                    <div className="circle-content">
                                        <div className="circle-back">
                                            <Link to="/assinatura"><img src={iconBack} alt="" /></Link>
                                        </div>
                                    </div>

                                    <div className="title-content">
                                        <h1>Padarias perto de mim:</h1>
                                        <p>Resultado para <b>Cidade Jardim, SP</b></p>
                                    </div>
                                </div>

                                <div className="content-card">
                                    <div className="card">
                                        <img src={imageBakery} alt="Padaria" />
                                            <div className="bakery-form">
                                                <h2>PADARIA VILA ROMANA</h2>
                                                <p><b>Rua Itapé-açu, 1002</b></p>
                                                <p className="city">Cidade Jardim, São Paulo</p>
                                                <div className="bottom">
                                                    <div className="circleCard"></div>
                                                    <p>Telefone: (11) 1234-5678</p>
                                                </div>
                                                <Link to="/produto"><button>Ir comprar</button></Link>
                                            </div>
                                    </div>
                                    <div className="card">
                                        <img src={imageBakery} alt="Padaria" />
                                            <div className="bakery-form">
                                                <h2>PADARIA VILA ROMANA</h2>
                                                <p><b>Rua Itapé-açu, 1002</b></p>
                                                <p className="city">Cidade Jardim, São Paulo</p>
                                                <div className="bottom">
                                                    <div className="circleCard"></div>
                                                    <p>Telefone: (11) 1234-5678</p>
                                                </div>
                                                <Link to="/produto"><button>Ir comprar</button></Link>
                                            </div>
                                    </div>
                                    <div className="card">
                                        <img src={imageBakery} alt="Padaria" />
                                            <div className="bakery-form">
                                                <h2>PADARIA VILA ROMANA</h2>
                                                <p><b>Rua Itapé-açu, 1002</b></p>
                                                <p className="city">Cidade Jardim, São Paulo</p>
                                                <div className="bottom">
                                                    <div className="circleCard"></div>
                                                    <p>Telefone: (11) 1234-5678</p>
                                                </div>
                                                <Link to="/produto"><button>Ir comprar</button></Link>
                                            </div>
                                    </div>
                                    <div className="card">
                                        <img src={imageBakery} alt="Padaria" />
                                            <div className="bakery-form">
                                                <h2>PADARIA VILA ROMANA</h2>
                                                <p><b>Rua Itapé-açu, 1002</b></p>
                                                <p className="city">Cidade Jardim, São Paulo</p>
                                                <div className="bottom">
                                                    <div className="circleCard"></div>
                                                    <p>Telefone: (11) 1234-5678</p>
                                                </div>
                                                <Link to="/produto"><button>Ir comprar</button></Link>
                                            </div>
                                    </div>
                                    <div className="card">
                                        <img src={imageBakery} alt="Padaria" />
                                            <div className="bakery-form">
                                                <h2>PADARIA VILA ROMANA</h2>
                                                <p><b>Rua Itapé-açu, 1002</b></p>
                                                <p className="city">Cidade Jardim, São Paulo</p>
                                                <div className="bottom">
                                                    <div className="circleCard"></div>
                                                    <p>Telefone: (11) 1234-5678</p>
                                                </div>
                                                <Link to="/produto"><button>Ir comprar</button></Link>
                                            </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Padaria;