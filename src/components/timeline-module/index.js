import React from "react";
import "./style.scss";

export default class Timeline extends React.Component {
  
componentDidMount() {
    console.log(this.props);
  };

  sendDataToParents = () =>{
      this.props.parentCallback('heya i am data from child')
  }

  render() {
    return(
        <div style = {{ backgroundColor: this.props.backgroundcolor ? this.props.backgroundcolor : 'black', width: '100%' }} className= 'timeline-wrapper'>
            <div className='timeline'>
                {
                    this.props.data && <div>
                        {this.props.data.map((item, index) => 
                            <div className='individualCard'>
                                {item.heading}
                            </div>
                        )}
                    </div>
                }
                <button onClick = {()=>this.sendDataToParents()}>Hello frnds</button>
            </div>
        </div>
    )
  }
}
