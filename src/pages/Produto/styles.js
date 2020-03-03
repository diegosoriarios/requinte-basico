import styled from 'styled-components'

export const Item = styled.li`
    width: 50px;
    height: 50px;
    margin-left: 10px;
    background-image: url(${props => props.url}); 
    background-repeat: no-repeat;
`

export const ItemImage = styled.div`
    background-image: url(${props => props.url}); 
    background-repeat: no-repeat;
`

export const Grid = styled.div`
    grid-template-columns: 1fr 1fr
`