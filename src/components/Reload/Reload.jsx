import styled from 'styled-components'

const Box = styled.section`
width: 100%;
display: flex;
justify-content: center;
margin-top: 2rem;
`
const Button = styled.button`
    outline: none;
    border: none;
    padding: 1rem 2rem;
    border-radius: .5rem;
    margin: auto;
    cursor: pointer;
    font-weight: bold;
    border: 1px solid white;
    transition: all .3s ease-in-out;

    &:hover{
        background-color: transparent;
        color: white;
    }
`

const Reload = ({ onclick }) => {
    return (
        <Box>
            <Button onClick={onclick}>Reload</Button>
        </Box>
    )
}

export default Reload