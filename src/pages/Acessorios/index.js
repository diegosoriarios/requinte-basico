import React, { useState, useEffect } from 'react'
import VideoBackground from '../../components/VideoBackground'
import data from '../../services/data.json'
import { ColoredColumn, Linha, Image } from './styles'

function Acessorios() {

    const [dados, setDados] = useState({})
    const [load, setLoad] = useState(true)
    
    useEffect(() => {
        setDados(data.acessorios)
        setLoad(false)
    }, [])
    
    if (load) return null

    console.log(dados)

    return (
        <>
            <VideoBackground title={"MESAS DE BILHAR"} subtitle={"LINHA DELUXE"} />
            {
                dados.map(acessorios => (
                    <Linha>
                        <ColoredColumn>
                            <h2>{acessorios.name}</h2>
                            <h5>{acessorios.descricao}</h5>
                        </ColoredColumn>
                        <Image src={acessorios.images} alt={acessorios.name} />
                    </Linha>
                ))
            }
        </>
    )
}

export default Acessorios