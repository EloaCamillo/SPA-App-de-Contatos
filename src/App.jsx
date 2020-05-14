import React from 'react';
import './App.scss';
import Topbar from './components/Topbar';
import Filter from './components/Filters';
import Contacts from './components/Contacts';
import Contact from './components/Contact';
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      contact: []
    }
  }
  componentDidMount() {
    const url = "https://5e82ac6c78337f00160ae496.mockapi.io/api/v1/contacts"
    fetch(url)
      .then((resp) => resp.json())
      .then(data => {
        this.setState({
          contact: data

        })
      }).catch((error) => {
        console.log("Error!" + error)
      })

  }
  render() {
    console.log("render")
    return (
      <React.Fragment>

        <Topbar />
        <Filter />
        <Contacts>
        <Contact />
        </Contacts>

      </React.Fragment>
    )
  }
}

export default App;
