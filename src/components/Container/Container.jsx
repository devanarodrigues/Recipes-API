import styled from 'styled-components'

const Box = styled.section`
    width: 80vw;
    height: 70vh;
    background-color: #C7B7A3;
    border-radius: .5rem;
    margin: auto;
    margin-top: 5%;
    padding: 1rem;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    overflow-y: scroll;
    gap: 2rem 0;

    &::-webkit-scrollbar{
      width: 0;
    }
`

const Container = ({children}) => {
  return (
    <Box>{children}</Box>
  )
}

export default Container