import React, { useState } from "react";
import { Segment,Button,Header  } from "semantic-ui-react";

function App() {
  const [count, setCount] = useState(0);

  const Inc=()=>{
    setCount(count+1);
  }
  const Dec=()=>{
    setCount(count-1);
  }
  return (
    <>



    <Segment  style={{ margin: "10% 38%", textAlign: "center", fontSize: "25px",  padding: "3% 1%", borderRadius: "8px" }}>
    <h1>Count</h1>
    <h1>{count}</h1>

    <div>
    
    <Button  positive onClick={Inc} primary>Increment </Button>
    <Button negative disabled={count===0} onClick={Dec} secondary>Decrement</Button>
  </div>
   
 
   
      </Segment>

      <Header as='h3' textAlign='center'>
      Done by:-Nikhil Kumar (12014862)
    </Header>
      
      
      
      </>
  );
}
export default App;
