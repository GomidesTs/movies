import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    align-items: center;

    background-color:  ${({ theme, isNew }) => isNew ? 'transparent' : theme.COLORS.BLACK_3};

    color:  ${({ theme }) => theme.COLORS.WHITE};

    border: ${({ theme, isNew }) => isNew ? `0.1rem dashed ${theme.COLORS.GRAY_3}` : 'none'};
    border-radius:1rem;

    margin-bottom:0.8rem;
    padding-right:1.6rem;

    > button {
        border: none;
        background: none;

        color:  ${({ theme }) => theme.COLORS.PRIMARY};
        > svg { 
            font-size: 2rem;
        }
    }

    > input {
        width: 100%;
        height: 5.6rem;

        background: transparent;

        border: none;

        padding: 1.2rem;

        color:  ${({ theme }) => theme.COLORS.GRAY_5};

        cursor: auto;

        &::placeholder {
            color:  ${({ theme }) => theme.COLORS.WHITE};
        }

        &:focus {
            box-shadow: 0 0 0 0;
            outline: 0;

            color: ${({ theme }) => theme.COLORS.WHITE};
        }
    }
`