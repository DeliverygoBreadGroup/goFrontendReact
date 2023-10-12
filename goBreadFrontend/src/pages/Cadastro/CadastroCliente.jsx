import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import '../../styles/StyleGlobal/style-global.css';
import './CadastroCliente.css';
import buttonBack from '../../assets/Icons/flecha 1.svg';

function CadastroCliente() {
    
    const nextStep = () => {
        setCurrentStep(currentStep + 1);
    };

    const prevStep = () => {
        setCurrentStep(currentStep - 1);
    };

    const [currentStep, setCurrentStep] = useState(1);

    const [formData, setFormData] = useState({
        cpf: '',
        nome: '',
        email: '',
        telefone: '',
        senha: '',
        endereco: {
          cep: '',
          numero: '',
          complemento: '',
        },
      });

  
    const handleChange = (e) => {
        const { name, value } = e.target;

        if(name === 'cep' || name === 'numero' || name === 'complemento'){
            setFormData((prevData) => ({
                ...prevData,
                endereco: {
                  ...prevData.endereco,
                  [name]: value,
                },
              }));
        } else {
            setFormData((prevData) => ({
                ...prevData,
                [name]: value,
              }));
        }
      };

    const handleSubmit = async (e) => {
        e.preventDefault();

        axios.post('http://localhost:8080/clientes', formData)
            .then((response) => {
                console.log(response);
                console.log(formData);
                console.log("Passou por aqui, deu bom!")
            }).catch((error) => {
                console.log("Deu erro!");
                console.log(error);
                console.log(formData);
            })
    };
    return (
        <section className='container-form'>
            <div className='centered-content'>
                <div
                    className="progress"
                />

                <div className="centered-content">
                    <div className="pagination">
                        <h1 className={currentStep === 1 ? 'active' : ''}>01</h1>
                        <h1 className={currentStep === 2 ? 'active' : ''}>02</h1>
                        <h1 className={currentStep === 3 ? 'active' : ''}>03</h1>
                    </div>
                </div>

                {currentStep === 1 && (
                    <>
                        <form onSubmit={handleSubmit}>
                            <div className="titles">
                                <h1>Informações do cliente</h1>
                                <h3>Preciso que informe algumas informações.</h3>
                            </div>

                            <div className="form-inputs">
                                <input
                                    type="text"
                                    name="cpf"
                                    placeholder="CPF"
                                    value={formData.cpf}
                                    onChange={handleChange}
                                />
                                <input
                                    type="text"
                                    name="nome"
                                    placeholder="Nome"
                                    value={formData.nome}
                                    onChange={handleChange}
                                />
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                                <input
                                    type="text"
                                    name="telefone"
                                    placeholder="Número"
                                    value={formData.telefone}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="access">
                                <img src={buttonBack} alt=""/>
                                <button onClick={nextStep}>PRÓXIMO</button>
                            </div>
                        </form>
                    </>
                )}

                {currentStep === 2 && (
                    <>
                        <form  onSubmit={handleSubmit}>
                            <div className="titles">
                                <h1>Crie sua senha</h1>
                                <h3>Faça o cadastro da sua senha, e confirme.</h3>
                            </div>
                            <div className="form-inputs">
                                <input
                                    type="password"
                                    name="senha"
                                    placeholder="Senha"
                                    value={formData.senha}
                                    onChange={handleChange}
                                />

                                <input
                                    type="password"
                                    name="confirmarSenha"
                                    placeholder="Confirme a senha"
                                />
                            </div>
                            <div className="access">
                                <img src={buttonBack} alt=""/>  
                                <button onClick={nextStep}>PRÓXIMO</button>
                            </div>
                        </form>
                    </>
                )}

                {currentStep === 3 && (
                    <>
                        <form  onSubmit={handleSubmit}>
                            <div className="titles">
                                <h1>Seu endereço</h1>
                                <h3>Preencha as informações do seu endereço.</h3>
                            </div>
                            <div className="form-inputs">
                                <input
                                    type="text"
                                    placeholder="CEP"
                                    name="cep"
                                    value={formData.cep}
                                    onChange={handleChange}
                                />
                              
                                <div className="fieldBetween">
                                    <input
                                        type="text"
                                        name="numero"
                                        placeholder="Número"
                                        value={formData.numero}
                                        onChange={handleChange}
                                    />
                                    <input
                                        type="text"
                                        name="complemento"
                                        placeholder="Complemento (opcional)"
                                        value={formData.complemento}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div className="access">
                                <img src={buttonBack} alt=""/>
                                <button>PRÓXIMO</button>
                            </div>
                        </form>
                    </>
                )}
            </div>
        </section>
    );
}

export default CadastroCliente;
