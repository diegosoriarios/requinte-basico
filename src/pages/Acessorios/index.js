import React, { useState, useEffect } from 'react'
import VideoBackground from '../../components/VideoBackground'
import data from '../../services/data.json'
import styled from 'styled-components'

function Acessorios() {

    const [dados, setDados] = useState({})
    const [load, setLoad] = useState(true)
    
    useEffect(() => {
        setDados(data.acessorios)
        setLoad(false)
    }, [])
    
    if (load) return null

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
                        <img src={acessorios.img} alt={acessorios.name} />
                    </Linha>
                ))
            }
        </>
    )
}

export default Acessorios

const Linha = styled.div`
    display: flex;
    flex-direction: row;
`

const ColoredColumn = styled.div`
    background-color: #998675;
    height: 150px;
`