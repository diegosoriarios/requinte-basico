import React from 'react'

function Categorias({ name, categorias }) {
    return (
        <>
            <div class="container mt-0">
                <div class="row">
                    <h4>{name}</h4>
                </div>
                <div class="row">
                    <div class="underline-black"></div>
                </div>
            </div>

            <div class="container mt-5">
                <div class="row">
                    {
                        categorias.map(categoria => (
                            <div class="col-md-3">
                                <div class="card">
                                    <img src={categoria.images.big[0]} class="card-img-top" />
                                    <div class="card-body">
                                        <h4>{categoria.name}</h4>
                                        <button class="btn btn-dark"><i class="fa fa-cart-plus" aria-hidden="true"></i>Ver detalhes</button>
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