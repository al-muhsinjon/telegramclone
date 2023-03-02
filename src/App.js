import React from 'react'
import Site from './vazifa9/Site'

const App = () => {
  return (
    <div>
      <Site/>
    </div>
  )
}
navigator.getBattery()
    .then(function(battery) {

        // Get current battery level .
        var batteryLevel = battery.level * 100;
        console.log(batteryLevel);
    })
    // .catch(function(e) {
    //     console.error(e);
    // });
export default App


// 1chi Api 
// 2chi Lift