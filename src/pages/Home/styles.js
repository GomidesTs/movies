import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows:  11.6rem auto;
    grid-template-areas:
    'header'
    'content';
`

export const Content = styled.div`
    grid-area: content;

    padding: 5rem 11rem;

    overflow-y: auto;
`

export const NewMovie = styled(Link)`
    width: 20rem;
    height: 5.6rem;

    background-color: ${({ theme }) => theme.COLORS.PRIMARY};

    border:none;

    color: ${({ theme }) => theme.COLORS.WHITE};

    display: flex;
    align-items: center;
    justify-content: center;

    font-style: normal;
    font-weight: 400;
    font-size: 1.6rem;

    border-radius: 1rem;

    > svg {
        font-size: 2rem;
    }
`