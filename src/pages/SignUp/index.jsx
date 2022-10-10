import { Link } from 'react-router-dom'
import {MdPerson, MdEmail, MdLock } from 'react-icons/md'

import { Container, Content, Form, Image } from './styles'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

export function SignUp() {
    return (
        <Container>
            <Image />
            <Content>
                <h1>Movies</h1>

                <p>Acompanhe tudo que assistir.</p>

                <h2>Crie sua conta</h2>

                <Form>
                    <Input
                        id='name'
                        placeholder='Nome'
                        icon={MdPerson}
                    />

                    <Input
                        id='email'
                        placeholder='E-mail'
                        icon={MdEmail}
                    />

                    <Input
                        id='password'
                        placeholder='Senha'
                        icon={MdLock}
                    />

                    <Button
                        title='Entrar'
                    />
                </Form>

                <Link to="/">Login</Link>
            </Content>
        </Container>
    )
}
