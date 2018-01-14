import React from 'react';

class Home extends React.Component {

  constructor(){
    super()
  }

  goToNewPage(newPage){
    console.log("go to " + newPage + " clicked")

  }

  render(){
    return (


        <img src="https://geology.com/store/wall-maps/world-physical-map-lg.jpg">

        <div id="mission">
          <p>
            we have a mission it is cool yayyy write it here later
          </p>
        </div>

      </div>
    )
  }
}

export default App;
