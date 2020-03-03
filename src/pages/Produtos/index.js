import React, { useState, useEffect } from 'react'
import VideoBackground from '../../components/VideoBackground'
import Categorias from '../../components/Categorias'
import data from '../../services/data.json'
import Produto from '../Produto'

function Produtos() {
    const [dados, setDados] = useState({})
    const [load, setLoad] = useState(true)
    const [productOpen, setProductOpen] = useState(false)
    const [productName, setProductName] = useState('')
    const [product, setProduct] = useState({})
    
    useEffect(() => {
        setDados(data.categories)
        setLoad(false)
        setProductOpen(false)
    }, [])

    function openProduct(name, product) {
        setProductName(name)
        setProduct(product)
        setProductOpen(true)
    }
    
    if (load) return null

    if (productOpen) {
        return (
            <>
                <Produto name={productName} produto={product} />
            </>
        )
    }

    return (
        <>

            <VideoBackground title={"Produtos"} subtitle={""} />

            <div className="container-fluid bg-light-gray pt-5 pb-5">

                {
                    dados.map(categorias => (
                        <Categorias openProduct={openProduct} key={categorias.name} name={categorias.name} categorias={categorias.categorias} />
                    ))
                }
            </div>
        </>
    )
}

export default Produtos