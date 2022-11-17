import * as React from 'react'
import { StyledButton, StyledProps } from './styles'

type Props = {} & StyledProps & React.PropsWithChildren

const Button = (props: Props) => {
    return <StyledButton {...props}>{props.children}</StyledButton>
}

export default Button
