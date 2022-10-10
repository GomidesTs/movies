import { Link } from 'react-router-dom'
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
                    <Link to="/profile">
                    <strong>GomidesTs</strong>
                    </Link>

                    <Link to="/">Sair</Link>
                </div>

                <Link to="/profile">
                    <img
                        src='https://github.com/GomidesTs.png'
                        alt='Foto do usuário'
                    />
                </Link>
            </Profile>
        </Container>
    )
}