import { StyledContainer } from "./components/styles/StyledContainer.tsx";
import  Header  from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./components/styles/Global.tsx";
import content from "./content.js";
import Card from "./components/Card.tsx"

const theme = {
  colors:{
    header:"#ebfbff",
    body: '#fff',
    footer: '#003333'
  },
  mobile: '768px',
}

function App() {
  return (
      <ThemeProvider theme={theme}>
      <>
      <GlobalStyles />
      <Header />
      <StyledContainer>
      {content.map((item, index) => (
            <Card key={index} item={item} />
          ))}
      </StyledContainer>
      <Footer />
      </>
      </ThemeProvider>

  );
}

export default App;
