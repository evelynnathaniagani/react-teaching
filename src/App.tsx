import React from 'react';
import './App.css';
import Info from './components/info';
import Counter from './components/counter'
import Image from './components/image';
import { textChangeRangeIsUnchanged } from 'typescript';

interface IState {
  nama : string;
  kelas : string;
  isMorning : boolean;
  counter: number;
}

class App extends React.Component<{}, IState> {
  constructor (props: any) {
    super(props);

    this.incrementCounter = this.incrementCounter.bind(this);
  }

  state = {
    nama: ' Evelyn ',
    kelas: 'XI MIPA 2 11',
    isMorning: false,
    counter: 0,
  }

  incrementCounter() {
    const {counter} = this.state;
    this.setState({counter: counter + 1});
  }

  render() {
    const {nama, kelas, isMorning, counter} = this.state
    return (
      <div className='app-wrapper'>
      <Info
      nama={nama}
      kelas={kelas}
      isMorning={isMorning}
      />
      <Counter num={counter} handleAppState={this.incrementCounter}/>
      <Image num={counter} />
      </div>
    ) 
  }
}



export default App;