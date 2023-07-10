import React, {useState} from 'react'

const initState = {
    fname: 'Ram',
    lname: 'Krishna'
}

export const ObjectUseState = () => {

   const [name, setName]=useState(initState)

   const changeName = () => {
  //   name.fname = 'Raghav'
  //   name.lname = 'Shyam'
  //   setName(name)

    const newName = {...name}
    newName.fname = 'Raghav'
    newName.lname = 'Shyam'
    setName(newName)
   }

   console.log('ObjectUseState Render')

  return (
    <div>
        <button onClick={changeName}>{name.fname} {name.lname}</button>
    </div>
  )
}
