import { Link } from "react-router-dom"
import styled from "styled-components"

const imdbImg = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/330px-IMDB_Logo_2016.svg.png"

function Header() {
    return (
        <Container>
            <Cell className="left">
                <Link to="/">
                    <Img src={imdbImg} alt="엽화앱 로고"/>
                </Link>
                <Link to="/movies/popular">Popular</Link>
                <Link to="/movies/top_rated">Top Rated</Link>
                <Link to="/movies/upcoming">Upcoming</Link>
            </Cell>
        </Container>
    ) 

}

const Container = styled.div`
    margin: 0 2.5rem;
    padding: 0.5rem 0;
    align-items: center;
    display: flex;
    justify-content: space-between;
`

const Cell = styled.div`
    display: flex;
    align-items: center;
    &.left {
        gap: 3rem;
        font-size: 1.3rem;
        cursor: pointer;
    }
`

const Img = styled.img`
    width: 88px;
    cursor: pointer;
    display: block;
`

export default Header