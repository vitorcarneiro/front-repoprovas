import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
    background-color: var(--background-color);
    font-family: var(--font-family);
    font-size: 27px;
    color: var(--font-color);
    min-height: 100vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media(max-width: 900px) {
       flex-direction: column;
       justify-content: start;
    }
    
`
const LogoWrapper = styled.div`
    min-height: 100vh;
    width: 60%;
    background-color: var(--navbar-color);
    display: flex;
    justify-content: center;
    align-items: center;
     @media(max-width: 900px) {
        min-height: 30vh;
        min-width: 100vw;
    }
    
`
const LogoCard = styled.div`
    width: 100%;
    margin-left: 20%;
    font-weight: 700;
    @media(max-width: 900px) {
        margin-left:0px ;
    }
`
const Title = styled.div`
 
    font-family: var(--font-title);
    font-size: 76px;
    line-height: 84px;
    letter-spacing: 0.05em;
    width: fit-content;        
    @media(max-width: 900px){
        margin: 0 auto;
    }
 
`
const Subtitle = styled.div`
    font-family: var(--font-subtitle);
    font-size: 43px;
    line-height: 64px;
    font-weight: 700;
    width: fit-content;   
    
    @media(max-width: 900px){
        font-size: 23px;
        line-height: 34px;
        margin: 0 auto;
    }
`
const SignUpWrapper = styled.div`
    min-height: 100vh;
    width: 40%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media(max-width: 900px) {
        width:100% ;
        min-height: 10vh;
        margin-top:40px ;
    }
`
const SignUpCard = styled.div`
    width:75% ;
    @media(max-width: 900px) {
        width:90% ;
    }
`
const Input = styled.input`
    all:unset;
    outline: none;
    border: none;
    text-indent: 17px;  
    margin-bottom :13px ;
    
    color: black;
    background-color: #FFFFFF;
    
    border-radius: 6px;
    font-size:20px;
    width: 100%;
    height: 65px;
    
    :focus{
        filter: brightness(95%);
    }
    ::placeholder {
        color: var(--placeholder-color);
        font-family: var(--font-subtitle);
        font-weight: 700;
        font-size: 22px;
    }
    @media(max-width: 900px) {
    height: 55px;
    }
   
`
const Button = styled.button`
    height: 55px;
    width: 100%;
    color: var(--font-color);
    background-color: var(--button-color); 
    font-family: var(--font-subtitle);
    font-weight: 700;
    font-size: 27px;
    line-height: 40px;
    text-align: center;
    padding: 14px;
    border-radius: 8px;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    :hover{
        filter: brightness(95%);
    }
`;

const LinkStyled = styled(Link)`
    width: 100%;
    height: 17px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 15px;
    color:  var(--font-color);
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    text-align: center;
    text-decoration-line: underline;
`;

export {
    Container, LogoWrapper, LogoCard, Title, Subtitle,
    SignUpWrapper, SignUpCard, Input, Button, LinkStyled
}