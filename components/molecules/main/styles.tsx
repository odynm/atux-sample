import styled from 'styled-components'

const DEFAULT_HEIGHT = '40em'

export type StyledProps = {
    height: number
    children: React.ReactNode[] | null
}

const MainContainer: React.FC<StyledProps> = styled.div`
  display: block;
  min-height: ${(props: StyledProps) =>
      props.height ? props.height : DEFAULT_HEIGHT};

    center;

  img.main-image {
    display: block;
    width: 100%;
    max-height: ${(props: StyledProps) =>
        props.height ? props.height : DEFAULT_HEIGHT};
    object-fit: cover;
  }

  .main-text {
    position: absolute;
    top: 20%;
    left: 5%;
    max-width: 70%;
    border-radius: 6px;
    background: #444444ab;
    text-align: justify;

    color: #fff;
    padding: 1rem;
    font-size: 2.6rem;
    transition: all 0.2s ease;
  }
`

export { MainContainer }
