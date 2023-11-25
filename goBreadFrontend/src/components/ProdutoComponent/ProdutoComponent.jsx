import React, { useState } from 'react';

function CardProduto({ produto, updateQuantidadeSelecionada }) {
    const [quantidadeSelecionada, setQuantidadeSelecionada] = useState(0);

    const decrementarQuantidade = () => {
        if (quantidadeSelecionada > 0) {
            setQuantidadeSelecionada(quantidadeSelecionada - 1);
            updateQuantidadeSelecionada(produto.id, quantidadeSelecionada - 1);
        }
    };

    const incrementarQuantidade = () => {
        setQuantidadeSelecionada(quantidadeSelecionada + 1);
        updateQuantidadeSelecionada(produto.id, quantidadeSelecionada + 1);
    };

    return (
        <div className="cardProduto">
            <img src={produto.imagem} alt="" />
            <h1>{produto.nome}</h1>
            <p>{produto.valorPorcao} / Porção</p>
            <div className="addAndRemove">
                <button onClick={decrementarQuantidade}>-</button>
                <p>{quantidadeSelecionada} porções</p>
                <button onClick={incrementarQuantidade}>+</button>
            </div>
            <h1 className="preco">{produto.valorPorcao * quantidadeSelecionada} {produto.tipoPorcao}</h1>
        </div>
    );
}

export default CardProduto;
