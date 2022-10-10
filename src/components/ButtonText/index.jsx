import { Container } from './styles'

export function ButtonText({ title, icon: Icon, to, isActive = false, ...rest }) {
    return (
        <Container
            type='button'
            isActive={isActive}
            to={to}
            {...rest}
        >
            {Icon && <Icon />}
            {title}
        </Container>
    )
}