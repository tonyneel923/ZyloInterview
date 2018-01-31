import React from 'react';
import { VictoryLine, VictoryChart, VictoryTheme, VictoryAxis } from 'victory';

const StocksLineGraph = ({ data }) => {

  const plainData = [];
  if (data.size){
    data.map((value, key) => {
      // weirdness from api
      return plainData.push({ x: key, y: parseInt(value['4. close']) });
    });
  }

  // no stock info yet
  if (!plainData.length) {
    return null;
  }

  return (
    <VictoryChart>
      <VictoryAxis tickCount={3}/>
      <VictoryLine
        style={{
          data: { stroke: "#c43a31" },
          parent: { border: "1px solid #ccc" }
        }}
        data={plainData.reverse()}
      />
    </VictoryChart>
  );
}

export default StocksLineGraph;
