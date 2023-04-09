import styled from "styled-components";

export const ULContainer = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: left;
    gap: 10px;
    padding: 20px;
    width: 100%;
    max-width: 1300px;
    flex-wrap: wrap;
    text-overflow: ellipsis;
    
`

export const LiItems = styled.li`
    background-color: #132021a1;
    border-radius: 15px;
    padding: 10px 20px;
    width: 100%;
    font-size: 24px;
    font-weight: 600;
    list-style: none;
    list-style-type: none;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    backdrop-filter: blur(3px);
    box-shadow: -6px 6px 6px #1a0921a1;
`

