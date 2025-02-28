import './styling.css'
import { useState } from 'react'
import searchIcon from '../icons/search (1).svg'
import deleteIcon from '../icons/trash-alt.svg'
import addListIcon from '../icons/plus.svg'

export function ToDoApp(){
 const [userInput, setUserInput] = useState('')
 const [displayArray, setDisplayArray] = useState([])
 const [searchTrigger, setSearchTrigger] = useState(false)
 const [searchArray, setSearchArray] = useState('')
 const [displayResult, setDisplayResult] = useState([])
 // const listArray = []


 // triger search box
 const triggerFunction = () => {
  setSearchTrigger((prevState) => !prevState)
 }

 const addList = () => {
  if (userInput === '') {
   alert("You really need to add a list plan!")
  } else{
   setDisplayArray([...displayArray, userInput]);
   setUserInput('');
  }
   
 }

 const removeItem = (index) =>{
   setDisplayArray(displayArray.filter((_, i) => i !== index))
  
 }

 const searchItems = (e) => {
   let query = e.target.value.toLowerCase()
   setSearchArray(query)

   if (query.length === 0) {
    // alert('Search Box is empty')
    setDisplayResult([])
    return
   }

   const results = displayArray.filter((item) => item.toLowerCase().includes(query))

   setDisplayResult(results)
 }

 return(
  <div className='general'>
    <input type="text" 
      id='searchList' 
      style={{display: searchTrigger ? "block" : "none"}} placeholder='search listed events...' 
      value={searchArray}
      onChange={searchItems}
      />

      <div id='searchOutcome'  style={{display: displayResult.length > 0 ? "block" : 'none'}}>
    
        <ul>
          {displayResult.map((item, index) => (
            <li key={index}>{item}</li>
          ))}

        </ul>
    
      </div>
    <div id="userInputDiv">
      <input type="text" 
         placeholder="Add to your List..." 
         id="todoInput" 
         value={userInput}
         onChange={(e) => setUserInput(e.target.value)}
      />
      <div id="submitInput" onClick={addList}>
        <img src={addListIcon} className='iconSvg' alt="add icon" />
      </div>
      <div id="promptSearch" onClick={triggerFunction} >
        <img src={searchIcon} className='iconSvg' />
      </div>
    </div>

       <div id="itemListDiv">
            <ul>
               {displayArray.map((item, index) =>(
                <label id='label' key={index}>
                <label htmlFor={`item-${index}`}>{item}</label>
                  <button id='cancel' onClick={() => removeItem(index)}>
                    <img src={deleteIcon} className='iconSvg' />
                  </button>
                  <input type="checkbox" name="completed" id="completed" />
                </label>
               ))}
            </ul>
       </div>
  </div>
 )
}

export default ToDoApp