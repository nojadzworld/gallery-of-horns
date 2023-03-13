import React from 'react';
import HornedBeast from './HornedBeast';
import Person from './HornedBeast'

class Main extends React.Component {

  render(){
    return (
    <>
   
   <HornedBeast title='Lion' imageUrl='' description='beast 1'/>
   <HornedBeast title='Elephant' imageUrl='' description='beast 2' />
    </>
  )
  }
}

export default Main;