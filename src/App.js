import React from 'react';
import logo from './logo.svg';
// import './App.css';
import './style.css';


class App extends React.Component{
  state = {
    itemName: '',
    itemPrice: '',
    itemList:[],
  }

  handleItemNameChange(e){
    this.setState({ itemName: e.target.value })
  }

  handleItemPriceChange(e){
    this.setState({ itemPrice: e.target.value })
  }
  render(){
    return(
      <div>
        <form className="form">
        <div className="item-group">
          <h1>Cart App</h1>
          <label className="label">Item Name</label><br></br>
          <input type="text" className="input" value={this.state.itemName} onChange={(e) => this.handleItemNameChange(e)}/>
          <p className="state">{this.state.itemName}</p>
        </div>

        <div className="item-group">
          <label className="label">Item Price</label><br></br>
          <input type="text" className="input" value={this.state.itemPrice} onChange={(e) => this.handleItemPriceChange(e)}/>
          <p className="state">{this.state.itemPrice}</p>
        </div><br></br>

        <input type="submit" className="submit" />
        </form>
      </div>
    )
  }
}
export default App;
