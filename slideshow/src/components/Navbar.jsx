import React, {Component} from 'react';

export default class Navbar extends Component{

    render(){
        return(
            <div>
                <button 
                className="prev"
                onClick={this.props.prev}
                > Previous </button>
                <button className="edit" > Edit </button>
                <button
                className="del" 
                onClick={this.props.del}> Delete </button>
                <button className="new" > New </button>
                <button
                className="next" 
                onClick={this.props.next}> Next </button> 
            </div>

        )
    }
}