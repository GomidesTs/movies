import { MdArrowBack } from 'react-icons/md'

import { Container, Content } from './styles'
import { ButtonText } from '../../components/ButtonText'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Section } from '../../components/Section'
import { Textarea } from '../../components/Textarea'
import { NewMovie } from '../../components/NewMovie'
import { Button } from '../../components/Button';

export function Create() {
    return (
        <Container>
            <Header />
            <Content>
                <ButtonText 
                to='/'
                title='Voltar'
                icon={MdArrowBack} 
                />

                <Section title='Novo filme' />

                <div>
                    <Input
                        id='title'
                        placeholder='Título' />

                    <Input
                        id='note'
                        placeholder='Sua nota (de 0 a 5)' />
                </div>

                <Textarea placeholder='Observações' />

                <h2>Marcadores</h2>

                <div className='tags'>
                    <NewMovie value='Terror' />
                    <NewMovie isNew placeholder='Nova tag' />
                </div>

                <div className='action'>
                    <Button
                        title='Excluir filme'
                    />
                    <Button
                        title='Salvar alterações'
                    />
                </div>
            </Content>
        </Container>
    )
}