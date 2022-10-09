import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 22rem;

    
    background-color:  ${({ theme }) => theme.COLORS.SECONDARY};

    padding: 3.2rem;

    margin-top: 3.5rem;

    border-radius: 1rem;

    > h3 {
        font-size: 2.5rem;
    }

    > p {
        
        text-align: justify;
        color:  ${({ theme }) => theme.COLORS.GRAY_3};

        height: 4rem;
        
        overflow:hidden;
    }
    
    > footer {
        width: 100%;
        
        display: flex;

        margin-top: 2.4rem;
    }
`