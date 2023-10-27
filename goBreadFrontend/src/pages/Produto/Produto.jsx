import './Produto.css';
import logoWhite from '../../assets/Icons/logoWhite.svg';
import imageEntrega from '../../assets/paes.png';
import iconBack from '../../assets/Icons/🦆 icon _arrow left_.svg';
import imagemBread from '../../assets/main.png';
import setaDireita from '../../assets/Icons/setaDireita.svg';
import { Link } from 'react-router-dom';

function Produto() {
    return (
        <>
            <main>
                <section className="pai">
                    <div className="left-container">
                        <div className="navbar-content">
                            <img src={logoWhite} alt="logo" className="logo" />
                        </div>
                        <div className="contentTitle">
                            <h1>É HORA DE ESCOLHER<br></br> SEUS <span>PRODUTOS</span>.</h1>
                        </div>
                        <div className="image-content-paes">
                            <img src={imageEntrega} alt="" />
                        </div>
                    </div>

                    <div className="right">
                        <div className="container">
                            <div className="container-padaria">
                                <div className="info-content">
                                    <div className="circle-content">
                                        <div className="circle">
                                            <Link to="/padaria"><img src={iconBack} alt="" /></Link>
                                        </div>
                                    </div>

                                    <div className="title-content">
                                        <h1>Seu produto</h1>
                                        <p>Escolha a melhor forma de receber seu pedido!</p>
                                    </div>

                                    <div className="containerProducts">
                                        <div className="content">
                                            <div className="cardProduto">
                                                <img src={imagemBread} alt="" />
                                                    <h1>Pão</h1>
                                                    <p>R$ 9 / Porção</p>
                                                    <div className="addAndRemove">
                                                        <button>-</button>
                                                        <p>3 porções</p>
                                                        <button>+</button>
                                                    </div>
                                                    <h1 className="preco">R$ 27</h1>
                                            </div>
                                            <div className="cardProduto">
                                                <img src={imagemBread} alt="" />
                                                    <h1>Pão</h1>
                                                    <p>R$ 9 / Porção</p>
                                                    <div className="addAndRemove">
                                                        <button>-</button>
                                                        <p>3 porções</p>
                                                        <button>+</button>
                                                    </div>
                                                    <h1 className="preco">R$ 27</h1>
                                            </div>
                                            <div className="cardProduto">
                                                <img src={imagemBread} alt="" />
                                                    <h1>Pão</h1>
                                                    <p>R$ 9 / Porção</p>
                                                    <div className="addAndRemove">
                                                        <button>-</button>
                                                        <p>3 porções</p>
                                                        <button>+</button>
                                                    </div>
                                                    <h1 className="preco">R$ 27</h1>
                                            </div>
                                            <div className="cardProduto">
                                                <img src={imagemBread} alt="" />
                                                    <h1>Pão</h1>
                                                    <p>R$ 9 / Porção</p>
                                                    <div className="addAndRemove">
                                                        <button>-</button>
                                                        <p>3 porções</p>
                                                        <button>+</button>
                                                    </div>
                                                    <h1 className="preco">R$ 27</h1>
                                            </div>
                                            <div className="cardProduto">
                                                <img src={imagemBread} alt="" />
                                                    <h1>Pão</h1>
                                                    <p>R$ 9 / Porção</p>
                                                    <div className="addAndRemove">
                                                        <button>-</button>
                                                        <p>3 porções</p>
                                                        <button>+</button>
                                                    </div>
                                                    <h1 className="preco">R$ 27</h1>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="advanced-container">
                                    <Link to="/entrega"><div className="button-content">
                                            <p>Avançar</p>
                                            <img src={setaDireita} alt="" />
                                        </div></Link>
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

export default Produto;