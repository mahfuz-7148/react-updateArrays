import React, { useState } from 'react'

const UpdateArrays = () => {

    const [foods, setFoods] = useState(['apple', 'orange', 'banana'])

    const addFood = () => {
        const newFood = document.getElementById('foodInput').value
        document.getElementById('foodInput').value = ''
        setFoods(food => ([...food, newFood]))
    }
    const removeFood = index => {
        setFoods(foods.filter((food, i) => i !== index))
    }
  return (
    <div>
        <h1>List of food</h1>

        <ul>
            { foods.map((food, index) => <li key={index} onClick={()=> removeFood(index)} >{food} </li> ) }
        </ul>

        <input type="text" placeholder="Enter food name" id="foodInput" />
        <button onClick={addFood}>Add food</button>
    </div>
  )
}

export default UpdateArrays