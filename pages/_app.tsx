import '../res/styles/global.css'
import App from 'next/app'
import Head from 'next/head'
import React from 'react'

class MyApp extends App {
    render() {
        const { Component, pageProps } = this.props

        return (
            <React.Fragment>
                <Head>
                    <title>atux</title>
                </Head>
                <Component {...pageProps} />
            </React.Fragment>
        )
    }
}

export default MyApp
