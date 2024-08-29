import React, { useState } from 'react'

const Anish = () => {
    const [count,setCount] = useState(0)
  return (
      <div onClick={() => setCount(count + 1)}>Anish {count} </div>
  )
}

export default Anish