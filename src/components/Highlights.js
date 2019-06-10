import React, { Component } from 'react';

class Highlights extends Component {



  render() {
    return (
      <div>
        <div className="large">product highlights</div>
        <ul>
          <li className="small" data-testid="highlights1"><strong>Wattage Output:</strong> 1100 Watts</li>
          <li className="small" data-testid="highlights2"><strong>Number of Speeds:</strong> 3 </li>
          <li className="small" data-testid="highlights3"><strong>Capacity (volume):</strong> 72.0 Oz.</li>
          <li className="small" data-testid="highlights4"><strong>Appliance Capabilities:</strong> Blends</li>
          <li className="small" data-testid="highlights5"><strong>Includes:</strong> Travel Lid</li>
          <li className="small" data-testid="highlights6"><strong>Material:</strong> Plastic</li>
          <li className="small" data-testid="highlights7"><strong>Finish:</strong> Painted</li>
          <li className="small" data-testid="highlights8"><strong>Metal Finish:</strong> Chrome</li>
          <li className="small" data-testid="highlights9"><strong>Safety and Security Features:</strong> Non-Slip Base</li>
          <li className="small" data-testid="highlights10"><strong>Care and Cleaning:</strong> Easy-To-Clean, Dishwasher Safe Parts</li>
        </ul>
      </div>
    );
  };
}

export default Highlights;
