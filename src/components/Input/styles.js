import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    
    display:flex;
    align-items: center;
    justify-content: center;

    
    background: ${({ theme }) => theme.COLORS.BLACK_3};

    border-radius: 1rem;

    > input {
        width: 100%;
        height: 5.6rem;
        
        background: none;

        border: none;

        padding: 1.9rem 2.4rem;

        font-size: 1.4rem;

        &::placeholder {

            color: ${({ theme }) => theme.COLORS.GRAY_2};
        }

        &:focus {
            box-shadow: 0 0 0 0;
            outline: 0;

            color: ${({ theme }) => theme.COLORS.WHITE};
        }
    }

    > svg {
       margin-left: 2rem;

       font-size: 3rem;

       color: ${({ theme }) => theme.COLORS.GRAY_3};
    }
`