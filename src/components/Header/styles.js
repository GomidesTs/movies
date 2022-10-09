import styled from 'styled-components'

export const Container = styled.header`
    grid-area: header;

    width: 100%;
    height: 10.5rem;

    padding: 2.4rem 12rem;

    display: flex;
    align-items: center;
    justify-content: space-around;

    background-color: ${({ theme }) => theme.COLORS.BLACK_2};

    border-bottom: 0.1rem solid ${({ theme}) => theme.COLORS.GRAY_1};

    gap: 6.4rem;

    > h1 {
        color: ${({ theme}) => theme.COLORS.PRIMARY};
    }
`

export const Profile = styled.div`
    display: flex;
    align-items: center;

    gap: 0.9rem;

    > div{
        display: flex;
        flex-direction: column;
        align-items: flex-end;

        margin-left: 2.5rem;
        line-height: 2.4rem;

        a{
            font-size:1.4rem;
            color: ${({ theme })=> theme.COLORS.GRAY_2}
        }
        
        strong {
            font-size:1.4rem;
            color: ${({ theme })=> theme.COLORS.WHITE}
        }
    }

    > img {
        width: 5.6rem;
        height: 5.6rem;

        border: 0.2rem solid ${({ theme}) => theme.COLORS.PRIMARY};
        border-radius:50%;
    }
    
`