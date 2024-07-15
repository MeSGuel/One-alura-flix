import styled from "styled-components"
import { useGamesContext } from "../../context/Games"
import CategoryContainer from "../CategoryContainer"


const StyledGamesContainer = styled.main`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    flex-wrap: wrap;
    width: 100%;
    padding: 10px 15px;
`

const GamesContainer = () =>{
    const categories = useGamesContext().categories
    const games = useGamesContext().games

    if (games.length === 0 || categories.length === 0) {
        return null; 
    }

    return(
        <StyledGamesContainer>
            {categories.map((category) => (
                <CategoryContainer 
                    key={category.system} 
                    categories={category} 
                    games={games.filter((game) => game.system === category.system)}
                />)
            )}
        </StyledGamesContainer>
    )
}

export default GamesContainer