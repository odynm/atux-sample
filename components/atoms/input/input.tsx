import React from 'react'
import { StyledInput, StyledProps } from './styles'

type Props = {} & StyledProps

const Input = (props: Props) => {
    return <StyledInput {...props} />
}

export default Input
