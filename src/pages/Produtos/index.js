import React, { useState, useEffect } from 'react'
import VideoBackground from '../../components/VideoBackground'
import Categorias from '../../components/Categorias'
import data from '../../services/data.json'

function Produtos() {
    const [dados, setDados] = useState({})
    const [load, setLoad] = useState(true)
    
    useEffect(() => {
        setDados(data.categories)
        setLoad(false)
    }, [])
    
    if (load) return null

    return (
        <>

            <VideoBackground title={"Produtos"} subtitle={""} />

            <div class="container-fluid bg-light-gray pt-5 pb-5">

                {
                    dados.map(categorias => (
                        <Categorias key={categorias.name} name={categorias.name} categorias={categorias.categorias} />
                    ))
                }
            </div>
        </>
    )
}

export default Produtos