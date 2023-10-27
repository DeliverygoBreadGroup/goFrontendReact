import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import '../../styles/StyleGlobal/style-global.css';
import './CadastroCliente.css';
import buttonBack from '../../assets/Icons/flecha 1.svg';
import InputMask from 'react-input-mask';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function CadastroCliente() {

    const history = useNavigate();

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

        if (name === 'cep' || name === 'numero' || name === 'complemento') {
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

        axios.post('http://localhost:8080/clientes/cadastrar', formData)
            .then((response) => {
                console.log(response);
                console.log(formData);
                toast.success("Cadastro realizado!", {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                })

                setTimeout(() => {
                    history('/assinatura');
                }, 2000);

            }).catch((error) => {
                console.log(error);
                console.log(formData);
                toast.error("Erro ao cadastrar!", {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                })
            })
    };
    return (
        <>
            <ToastContainer />
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
                                        mask="999.999.999-99"
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
                                        mask="(99) 99999-9999"
                                        value={formData.telefone}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="access">
                                    <Link to="/"><img src={buttonBack} alt="" /></Link>
                                    <button onClick={nextStep}>PRÓXIMO</button>
                                </div>
                            </form>
                        </>
                    )}

                    {currentStep === 2 && (
                        <>
                            <form onSubmit={handleSubmit}>
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
                                    <img src={buttonBack} alt="" onClick={prevStep} />
                                    <button onClick={nextStep}>PRÓXIMO</button>
                                </div>
                            </form>
                        </>
                    )}

                    {currentStep === 3 && (
                        <>
                            <form onSubmit={handleSubmit}>
                                <div className="titles">
                                    <h1>Seu endereço</h1>
                                    <h3>Preencha as informações do seu endereço.</h3>
                                </div>
                                <div className="form-inputs">
                                    <input
                                        type="text"
                                        placeholder="CEP"
                                        name="cep"
                                        mask="99999-999"
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
                                    <img src={buttonBack} alt="" onClick={prevStep} />
                                    <button>PRÓXIMO</button>
                                </div>
                            </form>
                        </>
                    )}
                </div>
            </section>
        </>
    );
}

export default CadastroCliente;
