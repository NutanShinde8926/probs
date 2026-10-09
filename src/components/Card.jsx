import React from 'react'

const Card = (probs) => {
    console.log(probs);
  return (

    <div className='parent'>
      <div className="card">
      <img src={probs.img}></img>
      <h1>{probs.user}{probs.age}</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <button>view profile</button>
      </div>

    </div>
  )
}

export default Card
