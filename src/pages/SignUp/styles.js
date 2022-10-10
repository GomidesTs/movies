import styled from 'styled-components'
import movieTheater from '../../assets/movie-theater.jpg'

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-columns: 80rem auto;
    text-align: center;
`

export const Content = styled.main`
    max-width: 100rem;

    align-self: center;
   
    margin: 0 auto;

    padding: 10rem 13rem;

    > h1 {
        color: ${({ theme })=> theme.COLORS.PRIMARY};
        
        padding-bottom: 1rem;
    }

    > h2 {
        padding-top: 3rem;
    }

    > a {
        width: 100%;
        color: ${({ theme })=> theme.COLORS.GRAY_2};
        
        font-size: 1.4rem;
    }
`

export const Form = styled.form`
    padding: 3rem 0;
`

export const Image = styled.div`
    flex: 1;

    background: url(${movieTheater}) no-repeat center center;
    background-size: cover;
`