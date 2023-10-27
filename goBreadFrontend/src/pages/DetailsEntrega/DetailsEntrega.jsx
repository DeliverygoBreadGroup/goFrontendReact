import logoWhite from '../../assets/Icons/logoWhite.svg';
import imageEntrega from '../../assets/image.png';
import iconBack from '../../assets/Icons/🦆 icon _arrow left_.svg';
import setaDireita from '../../assets/Icons/setaDireita.svg';
import '../../scss/DetailsEntrega/componentDetailsEntrega.css';
import { Link } from 'react-router-dom';

function DetailsEntrega() {
    return (
        <>
            <section className="parent-container">
                <div className="left-container">
                    <div className="navbar-content">
                        <img src={logoWhite} alt="logo" className="logo" />
                    </div>
                    <div className="image-content">
                        <img src={imageEntrega} alt="" />
                    </div>
                </div>

                <div className="right-container">
                    <div className="container">
                        <div className="content-c">
                            <div className="info-content">
                                <div className="circle-content">
                                    <div className="circle">
                                        <Link to="/produto"><img src={iconBack} alt="" /></Link>
                                    </div>
                                </div>

                                <div className="title-content">
                                    <h1>Definições de entrega</h1>
                                    <p>Escolha a melhor forma de receber sua cesta!</p>
                                </div>
                            </div>

                            <div className="containerForm">
                                <div className="contentForm">
                                    <form className="form">
                                        <div className="inputGroup">
                                            <input id="option1" name="option1" type="checkbox" />
                                            <label for="option1">Segunda-feira</label>
                                        </div>
                                        <div className="inputGroup">
                                            <input id="option2" name="option2" type="checkbox" />
                                            <label for="option2">Terça-feira</label>
                                        </div>
                                        <div className="inputGroup">
                                            <input id="option3" name="option3" type="checkbox" />
                                            <label for="option3">Quarta-feira</label>
                                        </div>
                                        <div className="inputGroup">
                                            <input id="option4" name="option4" type="checkbox" />
                                            <label for="option4">Quinta-feira</label>
                                        </div>
                                        <div className="inputGroup">
                                            <input id="option5" name="option5" type="checkbox" />
                                            <label for="option5">Sexta-feira</label>
                                        </div>
                                    </form>
                                </div>
                            </div>

                            <div className="advanced-container">
                                <Link to="/pagamento"><div className="button-content">
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

export default DetailsEntrega;