import styled from 'styled-components'
import { Link } from 'react-router-dom';

export const Container = styled(Link)`
    width: fit-content;

    display: flex;
    align-items: center;
    gap: 0.8rem;

    font-size: 1.6rem;

    color: ${({ theme }) => theme.COLORS.WHITE};

    background: none;
    
    border: none;

    transition: all 0.5s ease-in-out;

    &:hover{
        filter: opacity(0.5);
    }

    > svg {
        font-size: 2rem;

    }
`