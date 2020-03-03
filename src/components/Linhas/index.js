import React from 'react'

function Linhas({ name, categorias}) {

    console.log(categorias)
    return (
        <>
            <div className="container mt-5">
                <div className="row">
                    <h4>{name}</h4>
                </div>
            <div className="underline-black"></div>
            </div>
        
            <div className="container pb-5 blog">
                {categorias.map((categoria, i) => (
                    <div className="row" key={i}>
                        <div className="col-md-6">
                            <div className="media mt-5">
                                <img src={categoria.images.big[0]} className="img-fluid mr-3" alt="media1" />
                                <div className="media-body mt-2">
                                    <h4>{categoria.name}</h4>
                                    <br />
                                    <button className="btn btn-dark"><i className="fa fa-cart-plus" aria-hidden="true"></i>Ver detalhes</button>
                                </div>
                            </div>
                        </div>                        
                    </div>            
                ))}
            </div>
        </>
    )
}

export default Linhas