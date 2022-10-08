import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    :root{
        font-size: 62.8%;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;

        font-family: 'Roboto Slab', serif;
    }

    body {
        background-color: ${({ theme }) => theme.COLORS.BLACK_1};

        font-size: 1.6rem;
        color: ${({ theme }) => theme.COLORS.WHITE};
        outline: none;
    }

    a {
        text-decoration: none;
    }

    button, a {
        cursor: pointer;
        transition: all 0.9s ease;
    }

    button:hover, a:hover {
        filter:brightness(2);
    }

    ::-webkit-scrollbar-track{
        background: ${({ theme }) => theme.COLORS.BACKGROUND_1};
    }

    ::-webkit-scrollbar{
        width: 0.6rem;
        background: ${({ theme }) => theme.COLORS.BACKGROUND_1};
    }
    
    ::-webkit-scrollbar-thumb{
        background: ${({ theme }) => theme.COLORS.PRIMARY};
        border-radius: 1rem;
    }
`