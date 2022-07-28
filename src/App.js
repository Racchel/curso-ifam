import styled, {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`

const Container = styled.div`
  display: flex;
  justify-content: space-between;

  background-color: burlywood;
  border-radius: 30px;
  padding: 20px;
  margin: 20px;
`

const TitleContent = styled.div``

const Title = styled.h1`
  font-size: 35px;
  padding-left: 10px;
  color: #353535;
`

const Description = styled.p`
  font-size: 20px;
  padding-left: 10px;
  color: #353535;
`

const ImageContent = styled.div``

const Image = styled.img`
  padding-right: 10px;
  border-radius: 200px;
`

const ItemCard = ({title, description, image}) => {
  
  return (
    <Container>
      <TitleContent>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </TitleContent>
      <ImageContent>
        <Image src={image} alt="" />
      </ImageContent>
    </Container>
  )
}

function adicionarNumero(num1, num2) {
  return num1 + num2
}

console.log(adicionarNumero(2,3))

function App () {

  const listaDeTarefas = [
    {
      title: "Gato",
      description: "Um gato fofo",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqFXQASz7-fThNOZZHb-K4SkcF4lSoycvXfg&usqp=CAU",
      alt: "gato fofo"
    }, 
  ]
     return (
    <>
    <GlobalStyle/>
    {
      listaDeTarefas.map(tarefa => (
        <ItemCard {...tarefa}/>
      ))
    }
    </>
  )
}

export default App;
