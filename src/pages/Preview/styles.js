import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-auto-rows: 10.5rem auto;
    grid-template-areas:
    'header'
    'content';
`

export const Content = styled.div`
    grid-area: content;
    padding: 5rem 10.6rem;

    overflow-y: auto;

    > main {
        margin-top: 3rem;
        display: flex;
        flex-direction: column;
        gap: 2rem;
        
        div:nth-child(1){
            display: flex;
            align-items: center;
            gap: 1rem;

            svg {
                color: ${({ theme }) => theme.COLORS.PRIMARY};
            }
        }

        div:nth-child(2) {
            display: flex;
            align-items: center;
            gap: 1rem;

            svg {
                color: ${({ theme }) => theme.COLORS.PRIMARY};
            }
        }

        div:nth-child(3) {
            display: flex;
            align-items: center;
        }

        img {
        width: 3rem;
        height: 3rem;

        border-radius: 50%;
        }

        p {
            text-align: justify;
        }
    }
`