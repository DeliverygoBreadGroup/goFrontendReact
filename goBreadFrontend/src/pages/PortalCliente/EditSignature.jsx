import '../../styles/StyleGlobal/style-global.css';
import './EditSignature.css';
import products from '../../assets/Icons/products.svg';
import editar from '../../assets/Icons/editar.svg';
import perfilCliente from '../../assets/Icons/perfilCliente.svg';
import sair from '../../assets/Icons/sair.svg';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function EditSignature() {

    const history = useNavigate();

    return (
        <>
            <header className='navbar-all-father'>
                <div className="container">
                    <div className='content-menu-access'>
                        <div className="menu-interaction">
                            <button className='btn-access' onClick={() => history('/portalCliente')}><img src={products} alt="" /></button>
                            <button className='btn-access'><img src={editar} alt="" /></button>
                            <button className='btn-access' onClick={() => history('/dados')}><img src={perfilCliente} alt="" /></button>
                            <button className='btn-access' onClick={() => history('/')}><img src={sair} alt="" /></button>
                        </div>
                    </div>
                </div>
            </header>

            <main className='father-user-info'>
                <section className='user-info-container'>
                    <div className='user-info-form'>
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
                </section>
            </main>
        </>
    )
}

export default EditSignature;