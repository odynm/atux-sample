import * as React from 'react'
import Image, { StaticImageData } from 'next/image'

type Props = {
    src: StaticImageData
    alt: string
    width: number
    height: number
}

const Logo = (props: Props) => {
    return <Image {...props} />
}

export default Logo
