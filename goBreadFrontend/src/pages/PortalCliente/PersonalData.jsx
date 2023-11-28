import '../../styles/StyleGlobal/style-global.css';
import './PersonalData.css';
import products from '../../assets/Icons/products.svg';
import editar from '../../assets/Icons/editar.svg';
import perfilCliente from '../../assets/Icons/perfilCliente.svg';
import comprarMais from '../../assets/Icons/comprar.svg';
import sair from '../../assets/Icons/sair.svg';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function PersonalData() {
    const [clienteData, setClienteData] = useState({
        nome: '',
        cpf: '',
        telefone: '',
        email: '',
        senha: '',
        tipo: '',
        endereco: {
            cep: '',
            numero: '',
            complemento: '',
        },
    });

    const [editMode, setEditMode] = useState(false);

    useEffect(() => {
        async function fetchClienteData() {
            try {
                const idCliente = sessionStorage.getItem('id');
                const response = await axios.get(`http://localhost:8080/clientes/${idCliente}`);
                setClienteData(response.data);
                console.log(response);

                const senhaUsuario = sessionStorage.getItem('senhaUsuario');
                const cpfUsuario = sessionStorage.getItem('cpfUsuario');
                setClienteData(prevData => ({
                    ...prevData,
                    senha: senhaUsuario,
                    cpf: cpfUsuario,
                }));
            } catch (error) {
                console.error('Erro ao buscar informações do cliente:', error);
            }
        }

        fetchClienteData();
    }, []);

    const handleEdit = () => {
        setEditMode(true);
    };

    const handleSave = async () => {
        try {
            const idCliente = sessionStorage.getItem('id');
            await axios.post(`http://localhost:8080/clientes/${idCliente}`, clienteData);
            toast.success('Informações atualizadas com sucesso!');
            setEditMode(false);
        } catch (error) {
            console.error('Erro ao salvar as informações:', error);
        }
    };


    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setClienteData({
            ...clienteData,
            [name]: value,
        });
    };

    return (
        <>
            <ToastContainer />
            <header className='navbar-all-father'>
                <div className="container">
                    <div className='content-menu-access'>
                        <div className="menu-interaction">
                            <button className='btn-access' onClick={() => history('/portalCliente')}><img src={products} alt="" /></button>
                            <button className='btn-access' onClick={() => history('/editarAssinatura')}><img src={editar} alt="" /></button>
                            <button className='btn-access'><img src={perfilCliente} alt="" /></button>
                            <button className='btn-access2' onClick={() => history('/padaria')}><img src={comprarMais} alt="" />COMPRAR+</button>
                            <button className='btn-access' onClick={() => history('/')}><img src={sair} alt="" /></button>
                        </div>
                    </div>
                </div>
            </header>

            <main className='father-user-info'>
                <section className='user-info-container'>
                    <div className='user-info-form'>
                        <input
                            className="ipt-info-user"
                            type="text"
                            placeholder='CPF'
                            name='cpf'
                            value={clienteData.cpf}
                            disabled={!editMode}
                            onChange={handleInputChange}
                        />
                        <input
                            className="ipt-info-user"
                            type="text"
                            placeholder='Nome'
                            name='nome'
                            value={clienteData.nome}
                            disabled={!editMode}
                            onChange={handleInputChange}
                        />
                        <input
                            className="ipt-info-user"
                            type="text"
                            placeholder='Email'
                            name='email'
                            value={clienteData.email}
                            disabled={!editMode}
                            onChange={handleInputChange}
                        />
                        <input
                            className="ipt-info-user"
                            type="text"
                            placeholder='Telefone'
                            name='telefone'
                            value={clienteData.telefone}
                            disabled={!editMode}
                            onChange={handleInputChange}
                        />
                        <input
                            className="ipt-info-user"
                            type="password"
                            placeholder='Senha'
                            name='senha'
                            value={clienteData.senha}
                            disabled={!editMode}
                            onChange={handleInputChange}
                        />
                        <input
                            className="ipt-info-user"
                            type="text"
                            placeholder='Tipo'
                            name='tipo'
                            value={clienteData.tipo}
                            disabled={!editMode}
                            onChange={handleInputChange}
                        />
                        <input
                            className="ipt-info-user"
                            type="text"
                            placeholder='CEP'
                            name='cep'
                            value={clienteData.endereco.cep}
                            disabled={!editMode}
                            onChange={handleInputChange}
                        />
                        <input
                            className="ipt-info-user"
                            type="text"
                            placeholder='Número'
                            name='numero'
                            value={clienteData.endereco.numero}
                            disabled={!editMode}
                            onChange={handleInputChange}
                        />
                        <input
                            className="ipt-info-user"
                            type="text"
                            placeholder='Complemento'
                            name='complemento'
                            value={clienteData.endereco.complemento}
                            disabled={!editMode}
                            onChange={handleInputChange}
                        />
                        <div className="user-actions">
                            {!editMode ? (
                                <button className='btn-actions' onClick={handleEdit}>
                                    Editar
                                </button>
                            ) : (
                                <>
                                    <button className='btn-actions2' onClick={handleSave}>
                                        Salvar
                                    </button>
                                    <button className='btn-actions' onClick={() => setEditMode(false)}>
                                        Cancelar
                                    </button>
                                </>
                            )}
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default PersonalData;