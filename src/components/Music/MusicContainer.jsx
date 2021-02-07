import React from 'react';
import Music from './Music';

class MusicContainer extends React.Component {
  constructor(props) {
    super(props);
    // this.AIP = this.AIP.bind(this);
    this.dada = [];
  }
  componentDidCatch() {
    async function AIP() {
      const dateEmail = await fetch('https://jsonplaceholder.typicode.com/comments/10');
      return dateEmail.email;
    }
    this.dada = AIP()
  }

  render() {
    return <Music date = {this.props.date}  dada = {this.props.dada}/>;
  }
}

export default MusicContainer;
