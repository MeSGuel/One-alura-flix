import styled from "styled-components"

const StyledFooter = styled.footer`
    @media screen and (min-width: 1024px){
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-end;
        gap: 20px;
        padding: 20px 40px;
        width: 100%;
        height: 125px;
        p {
            font-size: 25px;
            text-align: center;
        }
        a {
            color: #a6a6f5;
            text-decoration: underline;
        }
    }
`

const Footer = () => {
    return(
    <StyledFooter>
        <p>Feito por Miguel Santos, mas, inspirado no projeto <a href='https://github.com/GuiKrieck?tab=repositories'>GuiKrieck</a></p>
        <p>Infelizmente este projeto foi feito as pressa, não há um pingo de originalidade em comparação aos outros. Ao menos eu consegui terminar do jeito que pude...</p>
    </StyledFooter>    
    )
}

export default Footer