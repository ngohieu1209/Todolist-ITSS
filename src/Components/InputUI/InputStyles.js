import styled from "styled-components";

export const InputUI = styled.input`
    border: 2px double #fafafa;
    padding: 10px 30px;
    color: #fafafa4f;
    background-color: transparent;
    border-radius: 10px;
    font-size: 22px;

    &:hover{
        border-color: #fafafaa1;
    }

    &:focus{
        box-shadow: 0px 0px 10px rgba(210, 80, 0, 0.5);
    }
`

export const InputContainer = styled.form`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 10px;
    padding: 20px 30px;

`