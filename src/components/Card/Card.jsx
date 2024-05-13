import { Slide } from 'react-awesome-reveal'
import styled from 'styled-components'

const Box = styled.section`
    width: 30%;
    height: 85%;
    background-color: #E8D8C4;
    border-radius: .5rem;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 0 16px #00000027;
    padding: 1%;

    .fade{
        width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    }
    img{
        width: 100%;
        height: auto;
        margin-top: 3%;
        border-radius: .3rem;
    }
`
const Details = styled.div`
    background-color: transparent;
    width: 100%;
    text-align: justify;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    a{
        text-decoration: none;
        background-color: #6D2932;
        color: white;
        padding: .5rem 1rem;
        font-weight: bold;
        width: auto;
    }
`

const Card = ({ img, nome, ready, seeAll, sourcename }) => {
    return (
        <Box>
            <Slide className='fade' triggerOnce={true} cascade={true} damping='.5s'>
                <img src={img} alt="" />
                <Details>
                    <h4>{nome}</h4>
                    <p> Ready in {ready} minutes</p>
                    <p> <b>See all in:</b></p>
                    <a target="_blank" href={seeAll}>{sourcename}</a>
                </Details>
            </Slide>
        </Box>
    )
}

export default Card