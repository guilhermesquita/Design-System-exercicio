import {ChakraProvider } from '@chakra-ui/react'
import products from './products.json'
import Cards from './components/Cards'

function App() {

  return (
    <ChakraProvider>
      {products.map((product)=>{
        return <Cards product={product}/>
      })}
    </ChakraProvider>
  )
}

export default App
