import '../../styles/StyleGlobal/style-global.css';
import './PortalCliente.css';
import products from '../../assets/Icons/products.svg';
import editar from '../../assets/Icons/editar.svg';
import perfilCliente from '../../assets/Icons/perfilCliente.svg';
import sair from '../../assets/Icons/sair.svg';
import lampada from '../../assets/Icons/lampada.svg';
import editarPedido from '../../assets/Icons/editarPedido.svg';
import deletar from '../../assets/Icons/deletar.svg';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function PortalCliente() {
    const history = useNavigate();

    const [cliente, setCliente] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchCliente() {
            try {
                const idCliente = sessionStorage.getItem('id');
                const response = await axios.get(`http://localhost:8080/clientes/${idCliente}`);
                setCliente(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Erro ao buscar informações do cliente:', error);
            }
        }

        fetchCliente();
    }, []);

    async function handleDeletePedido(pedidoId) {
        try {
            await axios.delete(`http://localhost:8080/pedidos/${pedidoId}`);
            setCliente(prevCliente => ({
                ...prevCliente,
                pedidos: prevCliente.pedidos.filter(pedido => pedido.id !== pedidoId)
            }));
        } catch (error) {
            console.error('Erro ao excluir pedido:', error);
        }
    }

    function renderTable() {
        if (loading) {
            return <p>Carregando...</p>;
        }

        if (!cliente) {
            return <p>Nenhum cliente encontrado.</p>;
        }

        return (
            <table>
                <thead>
                    <tr>
                        <th>Nº Pedido</th>
                        <th>Produto</th>
                        <th>Quantidade</th>
                        <th>Padaria</th>
                        <th>Status</th>
                        <th>Deletar</th>
                    </tr>
                </thead>
                <tbody>
                    {cliente.pedidos.map((pedido, indexPedido) => (
                        pedido.itensPedido.map((item, indexItem) => (
                            <tr key={`${pedido.id}-${indexItem}`}>
                                <td>{pedido.id}</td>
                                <td>{item.produto.nome}</td>
                                <td>{item.quantidade}</td>
                                <td>{pedido.comercio.razaoSocial}</td>
                                <td>Entregue</td>
                                <td>
                                    <button className="btn-deletar" onClick={() => handleDeletePedido(pedido.id)}><img src={deletar} alt="" /></button>
                                </td>
                            </tr>
                        ))
                    ))}
                </tbody>
            </table>
        );
    }

    return (
        <>
            <header className='navbar-all-father'>
                <div className="container">
                    <div className='content-menu-access'>
                        <div className="menu-interaction">
                            <button className='btn-access'><img src={products} alt="" /></button>
                            <button className='btn-access' onClick={() => history('/editarAssinatura')}><img src={editar} alt="" /></button>
                            <button className='btn-access' onClick={() => history('/dados')}><img src={perfilCliente} alt="" /></button>
                            <button className='btn-access' onClick={() => history('/')}><img src={sair} alt="" /></button>
                        </div>
                    </div>
                </div>
            </header>

            <main>
                <section className="cards-info">
                    <div className="container">
                        <div className="content-card-info">
                            <div className="content-cardInfo">
                                <img src={lampada} alt="" />
                                <div className="contentTitleInfo">
                                    <h2>Prezado cliente, informamos que<br></br>
                                        em sua assinatura é apenas<br></br>
                                        um pedido por dia.</h2>
                                    <p>Aproveite.</p>
                                </div>
                            </div>
                            <div className="content-cardInfo">
                                <img src={lampada} alt="" />
                                <div className="contentTitleInfo">
                                    <h2>Prezado cliente, informamos que<br></br>
                                        em sua assinatura é apenas<br></br>
                                        um pedido por dia.</h2>
                                    <p>Aproveite.</p>
                                </div>
                            </div>
                            <div className="content-cardInfo">
                                <img src={lampada} alt="" />
                                <div className="contentTitleInfo">
                                    <h2>Prezado cliente, informamos que<br></br>
                                        em sua assinatura é apenas<br></br>
                                        um pedido por dia.</h2>
                                    <p>Aproveite.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="container-table">
                    <div className="container">
                        <div className="table">
                            {renderTable()}
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default PortalCliente;
