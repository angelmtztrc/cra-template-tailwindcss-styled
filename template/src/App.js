import React from 'react';
import tw from 'twin.macro';

// Components
import Content from './components/Content';

// Styled Components
const Container = tw.div`min-h-screen flex flex-col items-center justify-center bg-gray-800 text-center`;

function App() {
  return (
    <Container>
      <Content/>
    </Container>    
  );
}

export default App;
