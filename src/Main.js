import React from 'react';
import HornedBeast from './HornedBeast';
import data from './data/data.json';
import './Main.css'
import SelectedBeast from './SelectedBeast';
import Form from 'react-bootstrap/Form';


class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      beast: {},
      selectedBeast: '',
      selectedBeastImg: '',
      selectedBeastDesc: '',
      filteredData: data
    }
  }

  handleCloseModal = () => {
    this.setState({
      showModal: false,
    });
  };

  handleOpenModal = (beast) => {
    const selectedBeast = data.find(x => x.title === beast)
    this.setState({
      showModal: true,
      beast: selectedBeast
    });
    console.log(beast);

  }

  handleSelect = (event) => {
    event.preventDefault()
    let selected = +event.target.value;
    console.log(selected);
    if (selected === 1) {
      let newData = data.filter(beast => beast.horns === 1)
      this.setState({
        filteredData: newData
      })
    } else if (selected === 2) {
      let newData = data.filter(beast => beast.horns === 2)
      this.setState({
        filteredData: newData
      })
    } else if (selected === 3) {
      let newData = data.filter(beast => beast.horns === 3)
      this.setState({
        filteredData: newData
      })
    } else if (selected === 100) {
      let newData = data.filter(beast => beast.horns === 100)
      this.setState({
        filteredData: newData
      })
    }
    

  }

  render() {
    return (
      <>
      <main>
          <Form>
                <Form.Group>
                  <Form.Select name="selected" onChange={this.handleSelect}>
                    <option value="">Select an Option</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="100">100</option>
                  </Form.Select>
                </Form.Group>
              </Form>
        <SelectedBeast
          showModal={this.state.showModal}
          beast={this.state.beast}
          handleCloseModal={this.handleCloseModal}
        />
        {this.state.filteredData.map((beastObj) => {
          return <HornedBeast title={beastObj.title} image_url={beastObj.image_url} description={beastObj.description}
      handleOpenModal={this.handleOpenModal} />
      
    })}
    </main>
      
      </>
    )
  }
}


export default Main;