import React from 'react';
import HornedBeast from './HornedBeast';
import data from './data/data.json';
import './Main.css'
import SelectedBeast from './SelectedBeast';


class Main extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      showModal: false,
      beast: {},
    }
  }

  handleCloseModal = () => {
    this.setState({
      showModal: false,
    });
};

handleOpenModal = (beast) => {
   const selectedBeast = data.find (x => x.title === beast)
    this.setState({
      showModal: true,
      beast: selectedBeast
    });
    console.log(beast);

  }
  render(){
    return (
   <main>
     <SelectedBeast
     showModal={this.state.showModal}
     beast={this.state.beast}
     handleCloseModal={this.handleCloseModal}
     />
    {data.map((beastObj) => {
      return <HornedBeast title={beastObj.title} image_url={beastObj.image_url} description={beastObj.description}
      handleOpenModal={this.handleOpenModal} />
    })}

   </main>
  )
  }
}


export default Main;