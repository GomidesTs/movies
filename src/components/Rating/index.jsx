import { MdStar, MdStarOutline } from 'react-icons/md'
import { Container } from './styles'

export function Rating({ grade, isBigSize }) {
    let stars = []
    for (let cont = 1; cont <= 5; cont++) {
        if (cont <= grade) {
            stars.push(<MdStar key={cont} />);
        } else {
            stars.push(<MdStarOutline key={cont} />);
        }
    }
    return (
        <Container isBigSize={isBigSize}>{stars}</Container>
    )
}