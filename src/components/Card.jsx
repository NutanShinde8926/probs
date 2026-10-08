import React from 'react'

const Card = (probs) => {
    console.log(probs);
  return (

    <div className='parent'>
      <div className="card">
      <img src='https://images.unsplash.com/photo-1790863962630-de3c3c84e1ee?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'></img>
      <h1>{probs.user}</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <button>view profile</button>
      </div>

    </div>
  )
}

export default Card
