import '../../styles/StyleGlobal/style-global.css';
import './PersonalData.css';
import products from '../../assets/Icons/products.svg';
import editar from '../../assets/Icons/editar.svg';
import perfilCliente from '../../assets/Icons/perfilCliente.svg';
import sair from '../../assets/Icons/sair.svg';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function PersonalData() {

    const history = useNavigate();

    return (
        <>
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
                        <input className="ipt-info-user" type="text" placeholder='Nome' />
                        <input className="ipt-info-user" type="text" placeholder='Email' />
                        <input className="ipt-info-user" type="text" placeholder='Senha' />
                        <input className="ipt-info-user" type="text" placeholder='Telefone' />
                        <input className="ipt-info-user" type="text" placeholder='CPF' />
                        <div className="user-actions">
                            <button className='btn-actions'>Editar</button>
                            <button className='btn-actions2'>Salvar</button>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default PersonalData;