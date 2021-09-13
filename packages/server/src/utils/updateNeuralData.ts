import fs from 'fs'
import neuralData from '../train-data.json'

export const updateNeuralData = (data: any) => {
  neuralData.push(data)
  fs.writeFile('./train-data.json', JSON.stringify(neuralData), (err) => {
    if (err) {
      console.log(`Error writing file: ${err}`);
    }
  });
}