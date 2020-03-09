import React from 'react'
import '../../assets/css/detalhe_produto.css'

function Categorias({ name, categorias, openProduct }) {

    function handleProduct(name, categoria) {
        openProduct(name, categoria)
    }    

    return (
        <>
            <div className="container mt-0">
                <div className="row">
                    <h4>{name}</h4>
                </div>
                <div className="row">
                    <div className="underline-black"></div>
                </div>
            </div>

            <div className="container mt-5">
                <div className="row">
                    {
                        categorias.map(categoria => (
                            <div className="col-md-3">
                                <div className="card">
                                    <img src={categoria.images[0]} className="card-img-top" alt="card-img-topo" />
                                    <div className="card-body">
                                        <h4>{categoria.name}</h4>
                                        <button onClick={() => handleProduct(name, categoria)} className="btn btn-dark"><i className="fa fa-cart-plus" aria-hidden="true"></i>Ver detalhes</button>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>	
        </>
    )
}

export default Categorias