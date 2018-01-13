import React from 'react';
//the error is happening because babel isn't configured correctly

class App extends React.Component {

  constructor(){
    super()
  }

  render(){
    return (
      <div>
        <Header />
      </div>
    )
  }
}

export default App;
