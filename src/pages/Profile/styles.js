import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;

    > header {
        height: 11.4rem;
        
        display:flex;
        align-items: center;

        padding: 0 12.4rem;

        background-color: ${({ theme }) => theme.COLORS.SECONDARY};
    }
`

export const Form = styled.form`
    max-width: 34rem;
    margin: 3rem auto 0;
`

export const Avatar = styled.div`
    position: relative;

    width:  18rem;
    height: 18rem;
    margin: -10rem auto 3.2rem;

    > img {
        width: 18rem;
        height: 18rem;

        border-radius: 50%;
    }

    label{
        width: 4.8rem;
        height: 4.8rem;
        
        background: ${({ theme }) => theme.COLORS.ORANGE};
        border-radius: 50%;
        
        display: flex;
        align-items: center;
        justify-content: center;
     
        position: absolute;
        bottom: 1rem;
        right: -1rem;

        input {
            display: none;
        }

        svg {
            background-color: ${({ theme }) => theme.COLORS.PRIMARY};
            color: ${({ theme }) => theme.COLORS.BLACK_1};
            

            border-radius: 50%;
            font-size: 4rem;
        }
    }
`

