import React from 'react'
import Navigation from './components/navigation/Navigation'
import Logo from './components/logo/Logo'
import ImageLinkForm from './components/imageLinkForm/ImageLinkForm'
import Rank from './components/rank/Rank'
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm />
      </div>
    );
  }
}

export default App;
