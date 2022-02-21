import styled from "styled-components";

export const Navbar =styled.div`
color: white;
position: sticky;
top: 0;
overflow: auto;
background-color: ${props => props.bg === "transparent" ? "transparent" : "Black" };
`;