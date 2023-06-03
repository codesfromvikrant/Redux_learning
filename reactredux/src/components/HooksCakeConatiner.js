import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { buyCake } from '../redux'

const HooksCakeConatiner = () => {
  const numOfCakes = useSelector(state => state.cake.numOfCakes)
  const dispatch = useDispatch()
  return (
    <div>
      <h2>Num of Cakes - {numOfCakes}</h2>
      <button onClick={() => { dispatch(buyCake()) }}>Buy Cakes</button>
    </div>
  )
}

export default HooksCakeConatiner