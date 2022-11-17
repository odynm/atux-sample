import React, { Component } from 'react'
import { StyledHeader, HeaderLogo } from './styles'
import { Navbar } from '../../molecules/navbar/Navbar'
import logo from '../../../res/img/logo.png'
import Logo from '../../atoms/logo/logo'
import { menuItems } from './menuItems'
import { MenuItem } from '../../../models/menuItem'

type Props = {
    height: number
    menuItems: MenuItem[]
}

export const Header = (props: Props) => {
    const { menuItems, height = 25 } = props

    return (
        <StyledHeader>
            <HeaderLogo>
                <Logo
                    src={logo}
                    alt="Rocketlab Logo"
                    width={100}
                    height={100}
                />
            </HeaderLogo>
            <Navbar menuItems={menuItems} />
        </StyledHeader>
    )
}
