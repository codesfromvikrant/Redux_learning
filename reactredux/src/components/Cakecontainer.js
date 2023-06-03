import React from 'react'
import { connect } from 'react-redux'
import { buyCake } from '../redux'
import HooksCakeConatiner from './HooksCakeConatiner'

function Cakecontainer() {
  return (
    <>
      <HooksCakeConatiner />
      <div>
        <h2>Number of Cakes</h2>
        <button>Buy Cake</button>
      </div>
    </>
  )
}

const mapStateToProps = state => {
  return {
    numOfCakes: state.numOfCakes
  }
}

const mapDispatchToProps = dispatch => {
  return {
    buyCake: () => dispatch(buyCake())
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Cakecontainer);