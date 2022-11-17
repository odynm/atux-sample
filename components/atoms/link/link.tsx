import * as React from 'react'
import { StyledLink } from './styles'

type Props = { href: string } & React.PropsWithChildren

const Link: React.FC<Props> = (props: Props) => {
    return <StyledLink {...props}>{props.children}</StyledLink>
}

export default Link
