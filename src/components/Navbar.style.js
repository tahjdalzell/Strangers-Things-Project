import styled from 
"styled-components";
import { Link } from "react-router-dom";


export const NavbarContainer = styled.nav`
    width: 100%;
    height: ${(props)=>(props.extendedNav?"100vh": "70px")};
    background-color: #E5D9B6;
    display: flex;
    flex-direction: column;

    @media (min-width: 700px){
    height: 70px;
}
    
`;

export const LeftContainer = styled.div`
    flex: 30%;
    display: flex;
    justify-content: flex-end;
    padding-right: 50px;
    

`;
export const RightContainer = styled.div`
    flex: 70%;
    display: flex;
    align-items: center;
    padding-right: 5%;
    

`;

export const NavbarextendedCont = styled.div`
display: flex;
flex-direction: column;
align-items: center;

@media (min-width: 700px){
    display: none;
}

`

export const NavbarinnerContainer = styled.div`
width: 100%;
height: 70px;
display: flex;
`;

export const NavbarlinkContainer = styled.div`
display:flex;
`;

export const NavbarLink = styled(Link)`
color: #285430;
font-size: x-large;
text-decoration: none;
margin: 15px;

@media (max-width: 700px){
    display: none;
}

`
export const NavbarLinkExtended = styled(Link)`
color: #285430;
font-size: x-large;
text-decoration: none;
margin: 15px;


`

export const Logo = styled.img`
margin: 10px;
max-width: 170px;
height: auto;

`

export const OpenLinksButton = styled.button`
width: 70px;
height: 50px;
background: none;
border: none;
color: #5F8D4E;
font-size: 45px;
cursor: pointer;

@media (min-width: 700px){
 display: none;
}
`