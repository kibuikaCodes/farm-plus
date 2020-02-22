import React from 'react';
import {Bar} from 'react-chartjs-2';

const state = {
  labels: ['Monday', 'Tuesday', 'Wednesday',
           'Thursday', 'Friday'],
datasets: [
    {
      label: 'Humidity',
      backgroundColor: 'rgba(0,0,250,1)',
      borderColor: 'rgba(0,0,0,1)',
      borderWidth: 2,
      data: [65, 59, 80, 81, 56]
    }
  ]
}

export default class SampleGraph2 extends React.Component {
  render() {
    return (
      <div>
        <Bar
          data={state}
          options={{
            title:{
              display:true,
              text:'Average Humidity per day',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
      </div>
    );
  }
}