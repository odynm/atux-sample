import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { MainContainer, StyledProps } from './styles'
import Image from 'next/image'

type Props = {
    imageUrl: string
    text: string
    height: number
}

export const Main = (props: Props) => {
    const { imageUrl, text = 'Hello World' } = props

    return (
        <MainContainer height={props.height}>
            <Image
                className="main-image"
                src={imageUrl}
                alt="Main"
                width={100}
                height={100}
            />
            <h2 className="main-text">{text}</h2>
        </MainContainer>
    )
}
