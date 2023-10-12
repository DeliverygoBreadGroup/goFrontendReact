import '../../scss/componentAssinatura.css';
import logoWhite from '../../assets/Icons/logoWhite.svg';
import imagePeople from '../../assets/pexels-mart-production-8217506-removebg 1.png';
import iconBack from '../../assets/Icons/🦆 icon _arrow left_.svg';
import setaDireita from '../../assets/Icons/setaDireita.svg';

function Assinatura() {
    return (
        <>
            <section className='containerFather'>
                <div className='containerLeft'>
                    <div class="contentNavbar">
                        <img src={logoWhite} alt="logo" className="logo" />
                    </div>
                    <div className='contentTitle'>
                        <h1>É HORA DE ESCOLHER<br></br> SUA <span>ASSINATURA</span>.</h1>
                        <p>Pague uma mensalidade por pedidos ilimitados, com custos adicionais ao atingir um valor específico.</p>
                    </div>
                    <div className="contentImage">
                        <img src={imagePeople} alt="" />
                    </div>
                </div>

                <div className="containerRightAssinatura">
                    <div className="container">
                        <div className="contentInfoAssinatura">
                            <div className="content-circleAssinatura">
                                <div className="circleAssinatura">
                                    <img src={iconBack} alt="" />
                                </div>
                            </div>

                            <div className="contentAssinatura">
                                <div className="container">
                                    <div class="grid-wrapper grid-col-auto">
                                        <label for="radio-card-1" class="radio-card">
                                            <input type="radio" name="radio-card" id="radio-card-1" checked />
                                            <div class="card-content-wrapper">
                                                <span class="check-icon"></span>
                                                <div class="card-content">
                                                    <h4>BASIC</h4>
                                                    <h5>Menor capacidade de quantidades.</h5>
                                                    <h3>R$ 79,90/ mês</h3>
                                                </div>
                                            </div>
                                        </label>

                                        <label for="radio-card-2" class="radio-card">
                                            <input type="radio" name="radio-card" id="radio-card-2" />
                                            <div class="card-content-wrapper">
                                                <span class="check-icon"></span>
                                                <div class="card-content">
                                                    <h4>FAMILY</h4>
                                                    <h5>Ampla capacidade de quantidades.</h5>
                                                    <h3>R$ 129,90/ mês</h3>
                                                </div>
                                            </div>
                                        </label>
                                    </div>
                                </div>
                            </div>


                            <div class="containerAvanced">
                                <div class="contentBtn">
                                    <p>Avançar</p>
                                    <img src={setaDireita} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Assinatura;