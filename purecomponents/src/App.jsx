import './App.css'
import React from 'react';
import SimpleCounter from './Component/SimpleCounter';
import PureCounter from './Component/PureCounter';

function App(){
  return(
    <>
      <SimpleCounter/>
      <PureCounter/>
    </>
  )
}
export default App