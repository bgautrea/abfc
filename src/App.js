import Main from './components/Main';
import Header from './components/Header';
import Footer from './components/Footer';
import React from 'react';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Container } from '@mui/material';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

class App extends React.Component {
  
  constructor() {
    super();
    this.state = {
      count: {
        hgt: '0',
        nc: '0.0',
        wc: '0.0'
      },
      score: {
        hgt: '0',
        nc: '0',
        wc: '0',
        bf: '0'
      }
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const value = event.target.value;
    const id = event.target.id.replace('abfc_', '');

    let score = { ...this.state.score };
    let count = { ...this.state.count };
    /*let hgt = { ...this.state.hgt };
    let nc = { ...this.state.nc };
    let hc = { ...this.state.hc };
    let wc = { ...this.state.wc };*/

    // assign changed value to corresponding item
    if ('hgt' === id) {
      count.hgt = value;
    } else if ('nc' === id) {
      count.nc = value;
    } else if ('wc' === id) {
      count.wc = value;
    } else {
      alert('Something went wrong.');
    }
    
    if (count.wc >= 1 && count.hgt >= 1 && count.nc >= 1) {
      // Male Formula
      score.bf = parseFloat((86.010 * Math.log10(+count.wc - +count.nc)) - [70.041 * Math.log10(+count.hgt)] + 36.76).toFixed(2);
      // Female Formula
      // score.bf = parseFloat((163.205 * Math.log10(+count.wc + +count.hc - +count.nc)) - [97.684 * Math.log10(+count.hgt)] - 78.387).toFixed(2);
    } else {
      score.bf = 0
    }

    this.setState({ score });
    this.setState({ count });
  }

render () {
  return (
    <ThemeProvider theme={darkTheme}>
      <Container class="App" >
      <CssBaseline  />
        <Header />
        <Main handleChange={this.handleChange} score={this.state.score} count={this.state.count} />
        <Footer handleChange={this.handleChange} score={this.state.score} />
      </Container>
    </ThemeProvider>
  );
}

}

export default App;