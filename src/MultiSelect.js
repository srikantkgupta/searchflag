
import React from "react";
import { render } from "react-dom";
import Picky from "react-picky";
import "react-picky/dist/picky.css";

class MultiSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
      arrayValue: []
    };
   
    this.selectMultipleOption = this.selectMultipleOption.bind(this);
    this.getClear = this.getClear.bind(this);
  }
componentWillReceiveProps(nextProps){
  if(this.props.bigList!==nextProps.bigList){
 this.setState({
  arrayValue:[]
 })
  }
}
  
  selectMultipleOption(value) {
    //console.count("onChange");
   
    this.setState({ arrayValue:value });
    //console.log("Val", this.state.arrayValue);
   
  }

  getClear(){
    this.setState({ arrayValue:[] });
    // this.props.getSelectionClear();
  }

  render() {
    const {bigList} =this.props;
    const {arrayValue} =this.state;

    return (
     // <React.Fragment>
     <div className="row">
          <div className="col-lg-6">
            {/* <h3>Multi select</h3> */}
            <h3>Step 2</h3>
            <h5>Now, select a country.</h5>
            <Picky
              value={this.state.arrayValue}
              options={bigList}
              onChange={this.selectMultipleOption}
              open={false}
              valueKey="id"
              labelKey="name"
              multiple={true}
              includeSelectAll={false}
              includeFilter={false}
              dropdownHeight={600}
            />
          </div>
          {arrayValue.length>0 &&  <div className="col-lg-6">
          <h3>Step 3</h3>
          

          <ul>
          { arrayValue.map(x =>
            <li key={x.flag} >{x.flag}</li>
            
          )
        }
          </ul>

          <button className="btn btn-primary " onClick={this.getClear}> Clear Flags</button>
          </div>}
          </div>
     
    //</React.Fragment>
    );
  }
}
export default MultiSelect