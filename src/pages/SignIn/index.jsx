import { Link } from 'react-router-dom'
import { MdEmail, MdLock } from 'react-icons/md'

import { Container, Content, Form, Image } from './styles'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

export function SignIn() {
    return (
        <Container>
            <Content>
                <h1>Movies</h1>

                <p>Acompanhe tudo que assistir.</p>

                <h2>Faça seu login</h2>

                <Form>
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

                <Link to="/register">Criar conta</Link>
            </Content>
            <Image />
        </Container>
    )
}
