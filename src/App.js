import React from 'react';


import ListItem from'./ListItem';
import './App.css';

class App extends React.Component {
  constructor() {
      super()
      this.state = {
          currentItem:{
            input: '',
            key: ''
          },
          items: []
          
      }
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.deleteItem = this.deleteItem.bind(this);
  }
  
  handleChange(event) {
      this.setState({
    currentItem:{
            input: event.target.value,
            key: Date.now()
          }
    //take value from input
  });
}
handleSubmit(event) {
  event.preventDefault();
  const newItem = this.state.currentItem;
  console.log(newItem)
  this.setState({
    items: [...this.state.items, newItem],
   
  });
  if(newItem.input!==''){
    const newItems = [...this.state.items, newItem];
    this.setState({
      items: newItems,
      currentItem: {
        input: '',
        key: ''
      }
    })
  }
}
deleteItem(key){
  const filterItem = this.state.items.filter(item=>item.key!==key);
  this.setState({
    items: filterItem
  })
}
  render() {
      return (
          <div>
             <form>
             <h1>Note App</h1>
              <div className='Notefrom'>
                <input type='text' value= {this.state.currentItem.input}
                onChange = {this.handleChange}
                className='input'/>
                <button onClick={this.handleSubmit} className='submit'>Submit</button>
              </div>
              <ListItem items = {this.state.items}
                        deleteItem={this.deleteItem}
                />
             </form>
          </div>
      )
  }
}
/* 
import React from "./App.js";
import ReactDOM from "react-dom";
import './noteApp.css';
class App extends React.Component {
    constructor() {
        super()
        this.state = {
            currentItem:{
              input: '',
              key: ''
            },
            items: []
            
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }
    
    handleChange(event) {
        this.setState({
      currentItem:{
              input: event.target.value,
              key: Date.now()
            }
      //take value from input
    });
  }
  handleSubmit(event) {
    event.preventDefault();
    const newItem = this.state.currentItem;
    console.log(newItem)
    this.setState({
      items: [...this.state.items, newItem],
     
    });
    if(newItem.input!==''){
      const newItems = [...this.state.items, newItem];
      this.setState({
        items: newItems,
        currentItem: {
          input: '',
          key: ''
        }
      })
    }
  }
  deleteItem(key){
    const filterItem = this.state.items.filter(item=>item.key!==key);
    this.setState({
      items: filterItem
    })
  }
    render() {
        return (
            <div>
               <form>
               <h1>Note App</h1>
                <div className='Notefrom'>
                  <input type='text' value= {this.state.currentItem.input}
                  onChange = {this.handleChange}
                  className='input'/>
                  <button onClick={this.handleSubmit} className='submit'>Submit</button>
                </div>
                <ListItem items = {this.state.items}
                          deleteItem={this.deleteItem}
                  />
               </form>
            </div>
        )
    }
}
function ListItem(props){
  const items = props.items;
  const listrItems = items.map(item=>{
      return (<div>
          <p className='noteItem' key={item.key}>{item.input} <span class='deleteBnt' onClick={()=>{
                props.deleteItem(item.key)
              }}></span></p>
      </div>)
    }                 
  )
  return <div>{listrItems}</div>
}
*/
export default App;
