import styled from 'styled-components'

export const Container = styled.button`
    width: 100%; 
    height: 5.6rem;

    background-color: ${({ theme }) => theme.COLORS.PRIMARY};

    border:none;

    color: ${({ theme }) => theme.COLORS.WHITE};

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 1.6rem;

    border-radius: 1rem;

    > svg {
        font-size: 2rem;
    }
`