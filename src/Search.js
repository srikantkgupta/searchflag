import React from 'react'
import './App.css';
import data from './data.js';
import {SimpleSelect} from 'react-selectize';
import MultiSelect from './MultiSelect';

class Search extends React.Component {
    constructor(props){
        super(props)
        this.state={
            continentList:data,
            selectedContinent:'',
            continentState:[]
        }
        this.renderDropDownCountry = this.renderDropDownCountry.bind(this);
        this.getSelectionClear = this.getSelectionClear.bind(this)
    }
  renderDropDownCountry(){
      const country = this.state.continentList;
      const options = country.map(function(cont){
                return {label: cont.continent, value: cont.continent}
            });

       return <SimpleSelect 
            options = {options} 
            placeholder = "select country"
            theme = "material" // can be one of "default" | "bootstrap3" | "material" | ...
            transitionEnter = {true}
        
            onValueChange={value => this.getSelectedContinent(value)}
           />
  }
  getSelectedContinent(selectedcon){
      if(selectedcon){
        this.setState({selectedContinent:selectedcon.value})
        const result = this.state.continentList.filter(item => item.continent === selectedcon.value);
        this.setState({continentState:result[0].countries})
      }
      else{
        this.setState({selectedContinent:''
    })  
   }
     
  }
  getSelectionClear(){
   this.getSelectedContinent()
  }

  render() {
      const continent = this.state.selectedContinent;
     
    return (
      <div className="container-fluid">
       <div className="heading" >
           <h2>Flag Picker</h2>
           <p>This app will help you to learn flags around the world in <u>3 step</u></p>

       </div>
       <div className="row">
       <div className="col-lg-4">
       <h3>Step 1</h3>
       <h5>Select a continent.</h5>
        {this.renderDropDownCountry()}
        {continent && <p><span>you selected</span> <span className="continent_heading">{continent}</span></p>}
        </div>
       <div className="col-lg-8">
            {continent && <MultiSelect getSelectionClear ={this.getSelectionClear} bigList={this.state.continentState.map(function(x,i) { 
                return { id:i, name: x.name,flag:x.flag} })} />}
            </div>
      </div>
      </div>
    );
  }
}

export default Search;