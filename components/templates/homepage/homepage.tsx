import React, { Component, Fragment } from 'react'
import { MainContainer, MainContent, ServicesSection, Footer } from './styles'
import { Header } from '../../organisms/header/Header'
import { Main } from '../../molecules/main/main'
import { menuItems } from '../../organisms/header/menuItems'

type Props = {}

export const Homepage = (props: Props) => {
    return (
        <Fragment>
            <MainContainer>
                <Header height={25} menuItems={menuItems}></Header>
                <Main
                    height={50}
                    imageUrl="/../../../res/img/logo.png"
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus egestas ex hendrerit massa rhoncus, quis tempor velit fermentum."
                />
                <MainContent>
                    <ServicesSection />
                </MainContent>
            </MainContainer>
            <Footer />
        </Fragment>
    )
}
