import React, { Component, Fragment } from 'react'
import {
    MainContainer,
    MainContent,
    Footer,
    ServicesSection,
} from '../components/templates/homepage/styles'
import { Main } from '../components/molecules/main/main'
import { Header } from '../components/organisms/header/Header'
import {
    basic_smartphone,
    basic_lightbulb,
    basic_webpage_img_txt,
} from 'react-icons-kit/linea/'
import { menuItems } from '../components/organisms/header/menuItems'
import { Card } from '../components/molecules/card/card'
import { ServiceDescription } from '../models/serviceDescription'

export default function NextApp() {
    const getServices = () => {
        const services: ServiceDescription[] = [
            {
                icon: basic_smartphone,
                title: 'Hello',
                description: `This is a block of text just to fill some space and increase page content`,
            },
            {
                icon: basic_lightbulb,
                title: 'New',
                description: `This is a block of text just to fill some space and increase page content`,
            },
            {
                icon: basic_webpage_img_txt,
                title: 'World',
                description: `This is a block of text just to fill some space and increase page content`,
            },
        ]

        return services
    }

    return (
        <Fragment>
            <MainContainer>
                <Header height={25} menuItems={menuItems} />
                <Main
                    height={25}
                    imageUrl={
                        'https://www.hennesseysalonspa.com/wp-content/uploads/2017/10/THIN-BANNER.png'
                    }
                    text="This is a ugly test website with some atomic React featurs in Next.js"
                ></Main>
                <MainContent>
                    <ServicesSection>
                        <ul>
                            {getServices().map((service, index) => {
                                return (
                                    <Card
                                        key={index}
                                        title={service.title}
                                        icon={service.icon}
                                    >
                                        {service.description}
                                    </Card>
                                )
                            })}
                        </ul>
                    </ServicesSection>
                </MainContent>
            </MainContainer>
            <Footer />
        </Fragment>
    )
}
