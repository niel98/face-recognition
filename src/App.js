import React from 'react'
import Clarifai from 'clarifai'
import Particles from 'react-particles-js'
import Navigation from './components/navigation/Navigation'
import Logo from './components/logo/Logo'
import ImageLinkForm from './components/imageLinkForm/ImageLinkForm'
import Rank from './components/rank/Rank'
import FaceRecognition from './components/faceRecognition/FaceRecognition'
import './App.css';

const app = new Clarifai.App({
  apiKey: '8eb1919158904285878db5b61168c38f'
 });

const paramOptions = {
  particles: {
    number: {
      value: 60,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
}

class App extends React.Component {
  constructor () {
    super()
    this.state = {
      input: '',
      imageUrl: '',
      box: {}
    }
  }

  onChangeInput = (e) => {
    this.setState({ input: e.target.value })
  }

  calculateFace = (data) => {
    const clarifaiFace =  data.outputs[0].data.regions[0].region_info.bounding_box
    const image = document.getElementById('imageInput')
    const width = Number(image.width)
    const height = Number(image.height)
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * width,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: width - (clarifaiFace.bottom_row * height)
    }
  }

  displayFaceDetect = (box) => {
    console.log(box)
    this.setState({ box: box })
  }

  onButtonSubmit = (e) => {
    e.preventDefault()
  
    this.setState({ imageUrl: this.state.input })

    app.models.predict(
      Clarifai.FACE_DETECT_MODEL, this.state.input
    ).then(response => this.displayFaceDetect(this.calculateFace(response)))
    .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="App">
        <Particles className='particles'
                params={paramOptions} />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm onChangeInput = {this.onChangeInput} onButtonSubmit = {this.onButtonSubmit}/>
        <FaceRecognition box = {this.state.box} imageUrl = {this.state.imageUrl}/>
      </div>
    );
  }
}

export default App;
