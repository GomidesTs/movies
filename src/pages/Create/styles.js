import styled from 'styled-components'
import { Section } from './../../components/Section/index';

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
    padding: 5rem 10.6rem;

    overflow-y: auto;

    > div {
        display: flex;
        gap: 4rem;

        margin-top: 3rem;
    }

    > h2 {
            padding: 4rem 0;

            font-style: normal;
            font-weight: 400;
        }

    > .tags{
        background-color: ${({ theme }) => theme.COLORS.BLACK_2};
        padding: 1rem;

        border-radius: 1rem;
    }

    > .action {
        Button:nth-child(1) {
            background-color: ${({ theme }) => theme.COLORS.BLACK_2};
            color: ${({ theme }) => theme.COLORS.PRIMARY};
        }

        Button:nth-child(2) {
            color: ${({ theme }) => theme.COLORS.BLACK_2};
        }
    }
`