import { Link } from 'react-router-dom'
import { MdAdd } from 'react-icons/md'

import { Container, Content, NewMovie } from './styles'
import { Button } from '../../components/Button'
import { Card } from './../../components/Card'
import { Header } from '../../components/Header'
import { Section } from '../../components/Section'

export function Home() {
    return (
        <Container>
            <Header />
            <Content>
                <Section
                    title='Meus filmes'
                >
                    <NewMovie to='create'>
                        <MdAdd/>
                        Adicionar filme
                    </NewMovie>
                </Section>

                <Card
                    data={{
                        title: '007: Cassino Royale',
                        rating: 2,
                        description: 'James Bond tem como tarefa espionar o terrorista Mollaka, mas nem tudo sai como o planejado. Bond decide espionar por conta própria o restante da célula terrorista, o que o leva às Bahamas. Lá ele conhece Alex Dimitrios e sua namorada Solange. Alex está envolvido com Le Chiffre, o banqueiro de organizações terroristas espalhadas pelo planeta, que pretende conseguir dinheiro em um jogo de pôquer milionário em Montenegro, no Cassino Royale. O MI6 envia Bond para jogar contra Le Chiffre, sabendo que caso Le Chiffre perca a partida isto desmontará sua organização. Mas para esta tarefa o agente 007 terá a companhia da sedutora Vesper Lynd, enviada por M para acompanhá-lo na missão.',
                        tags: [
                            { id: '1', name: 'Ação' },
                            { id: '2', name: 'Policial' },
                            { id: '3', name: 'Thriller' }
                        ]
                    }}
                />

                <Card
                    data={{
                        title: 'Lobisomem na Noite',
                        rating: 1,
                        description: 'Em uma noite escura e sombria, uma cabala secreta de caçadores de monstros emerge das sombras e se reúne no templo de Bloodstone após a sua morte. Em um estranho e macabro memorial à vida de seu líder, os participantes são lançados em uma misteriosa e mortal competição por uma poderosa relíquia - uma caçada que acabará por colocá-los cara a cara com um monstro perigoso.',
                        tags: [
                            { id: '1', name: 'Ação' },
                            { id: '2', name: 'Suspense' },
                            { id: '3', name: 'Terror' }
                        ]
                    }}
                />

                <Card
                    data={{
                        title: 'Super Mario Bros. O Filme',
                        rating: 4,
                        description: 'A Nintendo fechou parceria com a Illumination Entertainment, estúdio de Minions e Meu Malvado Favorito, para produzir o filme animado de Super Mario Bros, A informação foi anunciada pela própria Big N em suas redes sociais. Shigeru Miyamoto, o criador do personagem, é creditado como produtor do filme, o que deve indicar um envolvimento maior da Nintendo no projeto. Chris Meledandri, fundador e CEO da Illumination, também é creditado como produtor. A Universal Pictures deve distribuir o filme. Recentemente, o presidente da Nintendo, Tatsumi Kimishima, havia apontado 2020 como a provável data de estreia do longa.',
                        tags: [
                            { id: '1', name: 'Animação' },
                            { id: '2', name: 'Aventura' }
                        ]
                    }}
                />
            </Content>
        </Container>
    )
}