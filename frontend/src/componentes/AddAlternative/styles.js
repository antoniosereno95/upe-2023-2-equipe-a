import styled from "styled-components";

const Container = styled.div`
    border: 1px solid #555;
    border-radius: 15px;
    padding: 10px;
    margin: 20px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Input = styled.input`
    border: 0px;
    background: transparent;
    outline: 0;
    color: #000;
    font-size: 18px;
    flex: 1;
    margin-bottom: 10px;

    &::placeholder {
        color: #ccc;
    }
`;

const Button = styled.button`
    margin-top: 10px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    padding: 8px 16px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #0056b3;
    }
`;