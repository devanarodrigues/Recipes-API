import { useEffect, useState } from 'react'
import './App.css'
import Container from './components/Container/Container'
import Card from './components/Card/Card'
import Loading from './components/Loading/Loading'
import Reload from './components/Reload/Reload'

function App() {

  const apiKey = "2a7dd44caef84454992a818d97cf2f52"
  const [data, setData] = useState([])
  const randomURL = `https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&number=21`

  useEffect(() => {
    random()
  }, [])

  const random = async () => {
    const api = await fetch(randomURL)
    const data = await api.json()
    setData(data.recipes)
    return data
  }

  return (
    <>
      <Container>
        {
          data.length !== 0
            ?
            data.map((recipe) => {
              return (
                
                <Card
                  key={recipe.id}
                  img={recipe.image}
                  nome={recipe.title}
                  ready={recipe.readyInMinutes}
                  seeAll={recipe.sourceUrl}
                  sourcename={recipe.sourceName}

                />
              )
            })
            : <Loading />
        }
      </Container>
      <Reload onclick={() => random()} />
    </>
  )
}

export default App
