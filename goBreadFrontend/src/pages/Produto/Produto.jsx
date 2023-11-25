import './Produto.css';
import logoWhite from '../../assets/Icons/logoWhite.svg';
import imageEntrega from '../../assets/paes.png';
import iconBack from '../../assets/Icons/🦆 icon _arrow left_.svg';
import imagemBread from '../../assets/main.png';
import setaDireita from '../../assets/Icons/setaDireita.svg';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CardProduto from '../../components/ProdutoComponent/ProdutoComponent';

function Produto() {

    const [itensPadaria, setItensPadaria] = useState([]);

    const selectedPadariaId = sessionStorage.getItem('selectedPadariaId');
    const idCliente = sessionStorage.getItem('id');
    const idComercio = sessionStorage.getItem('selectedPadariaId');

    useEffect(() => {
        async function fetchItensPadaria() {
            try {
                const response = await axios.get(`http://localhost:8080/itens-comercio/${selectedPadariaId}`);
                setItensPadaria(response.data);
            } catch (error) {
                console.error('Erro ao buscar os itens da padaria:', error);
            }
        }

        fetchItensPadaria();
    }, []);

    const [pedidoItens, setPedidoItens] = useState([]);

    const updateQuantidadeSelecionada = (productId, quantidade) => {
        const updatedItensPadaria = itensPadaria.map((item) => {
            if (item.produto.id === productId) {
                return { ...item, quantidadeSelecionada: quantidade };
            }
            return item;
        });
        setItensPadaria(updatedItensPadaria);
    };

    const enviarPedido = async () => {
        const itensPedido = itensPadaria.map((item) => ({
            quantidade: item.quantidadeSelecionada,
            produto: {
                id: item.produto.id
            }
        }));

        console.log(itensPedido);

        const data = {
            diaEntrega: 'Domingo', 
            horarioEntrega: '13:00',
            itensPedido: itensPedido,
            idCliente: idCliente,
            idComercio: idComercio
        };

        try {
            // Enviar a requisição POST
            const response = await axios.post('http://localhost:8080/pedidos', data);
            console.log('Pedido enviado:', response.data);
        } catch (error) {
            console.error('Erro ao enviar pedido:', error);
        }
    };

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
                                            {itensPadaria?.map((item) => (
                                                <CardProduto
                                                    key={item.produto.id}
                                                    produto={item.produto}
                                                    updateQuantidadeSelecionada={updateQuantidadeSelecionada}
                                                />
                                            ))}
                                        </div>
                                    </div>

                                    <div className="advanced-container">
                                        <div className="button-content" onClick={enviarPedido}>
                                            <p>Avançar</p>
                                            <img src={setaDireita} alt="" />
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

export default Produto;