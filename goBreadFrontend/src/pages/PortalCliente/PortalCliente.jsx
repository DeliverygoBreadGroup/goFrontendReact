import '../../styles/StyleGlobal/style-global.css';
import './PortalCliente.css';
import products from '../../assets/Icons/products.svg';
import editar from '../../assets/Icons/editar.svg';
import perfilCliente from '../../assets/Icons/perfilCliente.svg';
import sair from '../../assets/Icons/sair.svg';
import lampada from '../../assets/Icons/lampada.svg';
import editarPedido from '../../assets/Icons/editarPedido.svg';
import deletar from '../../assets/Icons/deletar.svg';
import { useNavigate } from 'react-router-dom';

function PortalCliente() {

    const history = useNavigate();
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
                            <table>
                                <tr>
                                    <th>Pedido</th>
                                    <th>Quantidade</th>
                                    <th>Preço</th>
                                    <th>Plano</th>
                                    <th>Status</th>
                                </tr>
                                <tr>
                                    <td data-cell="pedido">N* do Pedido</td>
                                    <td data-cell="iten">5 itens</td>
                                    <td data-cell="preco">R$</td>
                                    <td data-cell="assinatura">Family</td>
                                    <td data-cell="status">Entregue</td>
                                    <td><button className='btn-editar'><img src={editarPedido} alt="" /></button></td>
                                    <td><button className="btn-deletar"><img src={deletar} alt="" /></button></td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default PortalCliente;
