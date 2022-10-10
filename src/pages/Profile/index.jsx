import { MdArrowBack, MdCamera, MdPerson, MdEmail, MdLock } from 'react-icons/md'

import { Container, Avatar, Form } from './styles'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { ButtonText } from '../../components/ButtonText'

export function Profile() {
    return (
        <Container>
            <header>
                <ButtonText
                    to='/'
                    title='Voltar'
                    icon={MdArrowBack}
                />
            </header>
            <Form>
                <Avatar>
                    <img
                        src='https://github.com/GomidesTs.png'
                        alt='Foto do usuário'
                    />
                    <label htmlFor='avatar'>
                        <MdCamera />
                        <input
                            type='file'
                            name='avatar'
                            id='avatar'
                        />
                    </label>
                </Avatar>

                <Input
                    id='name'
                    placeholder='Digite seu nome'
                    icon={MdPerson}
                />

                <Input
                    id='email'
                    placeholder='Digite seu e-mail'
                    icon={MdEmail}
                />
                <Input
                    id='email'
                    placeholder='Digite sua senha atual'
                    icon={MdLock}
                />
                <Input
                    id='email'
                    placeholder='Digite sua nova senha'
                    icon={MdLock}
                />

            <Button title='Salvar' />
            </Form>

        </Container>
    )
}
