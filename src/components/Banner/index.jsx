import styled from "styled-components";
import { useGamesContext } from "../../context/Games";
import CategoryTitle from "../CategoryTitle";
import { Link } from "react-router-dom";

const StyledBanner = styled.div`
    display: none;
    @media screen and (min-width: 1024px){ 
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 24px;
        max-width: 96%;
        height: 500px;
        margin: 20px auto;
        padding: 0 30px;
        background:linear-gradient(#000000ea,#2b46752f),url(${(props) => props.$cover});
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        border: 2px solid #6BD1FF;
        border-radius: 20px;
        div{
            display: flex;
            flex-direction: column;
            width: 100%;
            text-shadow: 2px 1px 1px black; 

        }
        h3{
            font-size: 3rem;
            margin: 20px 0;
            text-shadow: 2px 5px 1px black; 
        }
        p{
            font-size: 1.125rem;
            font-weight: 500;
            letter-spacing: 3px;
            line-height: 24px;
            color: #ffffff;
            text-shadow: 1px 3px 1px black; 
        }
        img{
            width: 100%;
            max-width: 500px;
            align-self: center;
            border-radius: 30px;
            border: 5px solid white;
        }
        img:hover {
            border: 7px solid white;
        }
    }
`

const Banner = () =>{
    const games = useGamesContext().games
    const categories = useGamesContext().categories

    if (games.length === 0 || categories.length === 0) {
        return null; 
    }

    const randomNumber = Math.floor(Math.random() * (games.length))
    const bannerGame = games[randomNumber]
    const bannerGameCategory = categories.filter((category) => category.system === bannerGame.system)
    const categoryColor = bannerGameCategory[0].color
    
    return(
            <StyledBanner $cover={bannerGame.cover}>
                <div>
                        <CategoryTitle color={categoryColor}>{bannerGame.system}</CategoryTitle>
                        <h3>{bannerGame.title}</h3>
                        <p>{bannerGame.description}</p>
                </div>
                <Link to={`/${bannerGame.id}`}>
                    <div>
                        <img src={bannerGame.cover} alt={bannerGame.title} />
                    </div>
                </Link>
            </StyledBanner>
    )
}



export default Banner