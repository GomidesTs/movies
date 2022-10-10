import styled from 'styled-components'

export const Container = styled.textarea`
    width: 100%;
    height: 24rem;

    border: none;
    border-radius: 1rem;

    resize:  none;

    padding: 1.6rem;

    background-color: ${({ theme }) => theme.COLORS.BLACK_3};
    
    color: ${({ theme }) => theme.COLORS.GRAY_2};

    &:focus {
        box-shadow: 0 0 0 0;
        outline: 0;

        color: ${({ theme }) => theme.COLORS.WHITE};
    }
`