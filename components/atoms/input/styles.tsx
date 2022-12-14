import styled, { css } from 'styled-components'

export type StyledProps = {
    disabled: boolean
}

const StyledInput: React.FC<StyledProps> = styled.input`
    box-sizing: border-box;
    background: #ffffff;
    border: 1px solid #f0f0f0;
    border-radius: 4px;
    font-size: 14px;
    line-height: 16px;
    padding: 12px 8px;
    width: 100%;
    margin: 0;

    ${(props: StyledProps) =>
        props.disabled &&
        css`
            background: #f0f0f0;
        `};
`

export { StyledInput }
