import { useState } from "react";


const App = () =>  {

  const [someUnusedState, setState] = useState();

  return (
    <main>
      <p>1, 2, 3, 4, 5</p>
    </main>
  );
}

export default App;
