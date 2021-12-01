import styled from "styled-components";

export const Wrapper = styled.div`
display: flex;
justify-content: space-between;
flex-direction: column;
width: 100%
border: 10px solid black;
border-color: black;
border-radius: 20px;
height: 100%;

button {
    border-radius: 0 0 20px 20px;
}

img {
    height: 100%
    object-fit: cover;
    border-radius: 20px 20px 0 0;
}

div {
    font-family: Arial, Helvetica, sans-serif;
    padding: 1rem;
    height: 100%;
}
`;
