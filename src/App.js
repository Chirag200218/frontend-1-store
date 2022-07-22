import styled from 'styled-components';
import './App.css';
import Header from './Components/Header';
import Contact from './Components/Contact';
import Team from './Components/Team';
import Journey from './Components/Journey';
import Store from './Components/Store';
import { useState } from 'react';

function App() {
  const [page,setPage] = useState('Team');
  function handleClick(e,str){
    setPage(str);
  }
  return (
    <Container >
      <Header handleClick = {(e,str)=>handleClick(e,str)}/>
    
      {page==='Team' && <Team />}
      {page==='Contact' && <Contact/>}
      {page==='Journey' && <Journey/>}
      {page==='Store' && <Store/>}
    

    </Container>
  );
}

const Container = styled.div`
  display:flex;
  flex-direction:column;
`;

export default App;
