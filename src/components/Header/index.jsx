import { MdSearch } from 'react-icons/md'
import { Container, Profile } from "./styles"
import { Input } from './../Input'

export function Header() {
    return (
        <Container>
            <h1>Movie</h1>

            <Input
                id='search'
                type="text"
                placeholder='Pesquisar pelo título'
                icon={MdSearch}
            />

            <Profile>
                <div>
                    <strong>GomidesTs</strong>

                    <a href="">Sair</a>
                </div>

                <img
                    src='https://github.com/GomidesTs.png'
                    alt='Foto do usuário'
                />
            </Profile>
        </Container>
    )
}