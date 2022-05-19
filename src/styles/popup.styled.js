import styled from "styled-components";

export const FormPopUp =styled.div`
display: ${props => props.display === "block" ? "block" : "none" };
position: fixed;
top: 25%;
left: 25%;
border: 3px solid red;
z-index: 9;
`;