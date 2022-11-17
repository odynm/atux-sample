import React, { Component } from 'react'
import { StyledMenu, MenuElement } from './styles'
import Link from '../../atoms/link/link'
import { MenuItem } from '../../../models/menuItem'

type Props = {
    menuItems: MenuItem[]
}

export const Navbar = (props: Props) => {
    const { menuItems = [{ name: 'Menu Item', route: '#' }] } = props

    return (
        <StyledMenu>
            {menuItems.map((menuItem: MenuItem, index: number) => {
                return (
                    <MenuElement key={index}>
                        <Link href={menuItem.route || '#'}>
                            {menuItem.name}
                        </Link>
                    </MenuElement>
                )
            })}
        </StyledMenu>
    )
}
