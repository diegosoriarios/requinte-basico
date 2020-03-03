import React, { useState, useEffect } from 'react'
import VideoBackground from '../../components/VideoBackground'
import MiddleBox from '../../components/MiddleBox'
import Linhas from '../../components/Linhas'
import data from '../../services/data.json'

function Home() {
    const [dados, setDados] = useState({})
    const [load, setLoad] = useState(true)
    
    useEffect(() => {
        setDados(data.categories)
        setLoad(false)
    }, [])
    
    if (load) return null
    
    return (
        <>
            <VideoBackground title={"Mesas de Bilhar"} subtitle={"Beleza e diversão em um só lugar"} />

            <MiddleBox />

            {
                dados.map(categorias => (
                    <Linhas key={categorias.name} name={categorias.name} categorias={categorias.categorias} />
                ))
            }
        </>
    )
}

export default Home