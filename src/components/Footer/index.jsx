import styled from "styled-components"

const StyledFooter = styled.footer`
    @media screen and (min-width: 1024px){
        display: flex;
        align-items: flex-start;
        justify-content: center;
        padding: 20px 0;
        width: 100%;
        height: 125px;
        p {
            font-size: 15px;
            text-align: center;
        }
        a {
            color: #a6a6f5;
            text-decoration: underline;
        }
        img {
            width: 300px;
        }
    }
`

const Footer = () => {
    return(
    <StyledFooter>
        <img src="/images/logo.png" alt="Logo do Aluraflix" />
    </StyledFooter>    
    )
}

export default Footer