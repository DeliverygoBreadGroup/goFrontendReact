import '../../styles/StyleGlobal/style-global.css';
import './PersonalData.css';
import products from '../../assets/Icons/products.svg';
import editar from '../../assets/Icons/editar.svg';
import perfilCliente from '../../assets/Icons/perfilCliente.svg';
import sair from '../../assets/Icons/sair.svg';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function PersonalData() {
    const [loading, setLoading] = useState(true);
    const [editMode, setEditMode] = useState(false);
    const navigate = useNavigate();

    const [cliente, setCliente] = useState({
        nome: '',
        email: '',
        telefone: '',
    });

    useEffect(() => {
        async function fetchCliente() {
            try {
                const idCliente = sessionStorage.getItem('id');
                const response = await axios.get(`http://localhost:8080/clientes/${idCliente}`);
                const { nome, email, telefone } = response.data;
                setCliente({ nome, email, telefone });
                setLoading(false);
            } catch (error) {
                console.error('Erro ao buscar informações do cliente:', error);
            }
        }

        fetchCliente();
    }, []);

    const handleSave = async () => {
        try {
            const idCliente = sessionStorage.getItem('id');
            await axios.put(`http://localhost:8080/clientes/${idCliente}`, cliente);
            toast.success("Edição realizada!", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            })
            setEditMode(false);
        } catch (error) {
            console.error('Erro ao salvar as informações:', error);
        }
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
                            placeholder='Nome'
                            value={cliente?.nome || ''}
                            readOnly={!editMode}
                            onChange={(e) => setCliente({ ...cliente, nome: e.target.value })}
                        />
                        <input
                            className="ipt-info-user"
                            type="text"
                            placeholder='Email'
                            value={cliente?.email || ''}
                            readOnly={!editMode}
                            onChange={(e) => setCliente({ ...cliente, email: e.target.value })}
                        />
                        <input
                            className="ipt-info-user"
                            type="text"
                            placeholder='Telefone'
                            value={cliente?.telefone || ''}
                            readOnly={!editMode}
                            onChange={(e) => setCliente({ ...cliente, telefone: e.target.value })}
                        />
                        <div className="user-actions">
                            {!editMode ? (
                                <button className='btn-actions' onClick={() => setEditMode(true)}>
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