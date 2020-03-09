import React, { useState, useEffect, useContext } from 'react'
import VideoBackground from '../../components/VideoBackground'
import Categorias from '../../components/Categorias'
import data from '../../services/data.json'
import Produto from '../Produto'
import BoardContext from '../../services/context'

function Produtos() {
    const [dados, setDados] = useState({})
    const [load, setLoad] = useState(true)
    const [productName, setProductName] = useState('')
    const [product, setProduct] = useState({})

    const { productOpen, changeProductOpen, } = useContext(BoardContext)
    
    useEffect(() => {
        setDados(data.categories)
        setLoad(false)
        changeProductOpen(false)
    }, [])

    function openProduct(name, product) {
        setProductName(name)
        setProduct(product)
        changeProductOpen(true)
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

            <VideoBackground title={"Produtos"} subtitle={""} display={'40vh'}/>

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