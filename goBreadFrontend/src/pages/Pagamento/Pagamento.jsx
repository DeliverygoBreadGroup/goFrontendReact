import '../../scss/Pagamento/componentIconInput.css';
import logoWhite from '../../assets/Icons/logoWhite.svg';
import imagePhonePagamento from '../../assets/iPhone 12 Pro (Wooden Hands).png';
import iconBack from '../../assets/Icons/🦆 icon _arrow left_.svg';
import setaDireita from '../../assets/Icons/setaDireita.svg';
import iconCarteira from '../../assets/Icons/card.svg';
import iconCalendario from '../../assets/Icons/calendario.svg';
import { Link } from 'react-router-dom';

function Pagamento() {
    return (
        <>
            <section className="parent-container">
                <div className="left-container">
                    <div className="navbar-content">
                        <img src={logoWhite} alt="logo" className="logo" />
                    </div>
                    <div className="image-content">
                        <img src={imagePhonePagamento} alt="" />
                    </div>
                </div>

                <div className="right-container">
                    <div className="container">
                        <div className="content-c">
                            <div className="info-content">
                                <div className="circle-content">
                                    <div className="circle">
                                        <Link to="/entrega"><img src={iconBack} alt="" /></Link>
                                    </div>
                                </div>

                                <div className="title-content">
                                    <h1>Definições de entrega</h1>
                                    <p>Escolha a melhor forma de receber sua cesta!</p>
                                </div>
                            </div>

                            <div class="contentFormaDePagamento">
                                <div class="wrapper">
                                    <input type="radio" name="select" id="optionC" checked />
                                    <input type="radio" name="select" id="optionP" />
                                    <label for="optionC" class="option optionC">
                                        <span>Crédito</span>
                                    </label>
                                    <label for="optionP" class="option optionP">
                                        <span>PIX</span>
                                    </label>
                                </div>
                            </div>

                            <div class="containerForm">
                                <div class="formPayment">
                                    <div class="row">
                                        <div class="input-container">
                                            <label for="numberCartao"><img src={iconCarteira} alt="" /></label>
                                            <input type="text" id="numberCartao" placeholder="Número do cartão" />
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="input-container">
                                            <label for="nameCartao"><img src={iconCarteira} alt="" /></label>
                                            <input type="text" id="nameCartao" placeholder="Nome do cartão" />
                                        </div>
                                    </div>
                                </div>
                                <div class="formPayment">
                                    <div class="row">
                                        <div class="input-container">
                                            <label for="cvv"><img src={iconCarteira} alt="" /></label>
                                            <input type="text" id="cvv" placeholder="CVV" />
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="input-container">
                                            <label for="name"><img src={iconCalendario} alt="" class="calender" /></label>
                                            <input type="text" id="name" placeholder="Nome completo" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="advanced-container2">
                            <Link to="/portalCliente"><div className="button-content">
                                    <p>Avançar</p>
                                    <img src={setaDireita} alt="" />
                                </div></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Pagamento;