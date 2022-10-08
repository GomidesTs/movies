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