import React, {Component} from 'react';

export default class IDCard extends Component{


    render(){
        return(
            <div>
                <h4 className="cardNumber" > {this.props.currentCard}/{this.props.outOf} </h4>
                <h4 className="name" >{this.props.firstName} {this.props.lastName} </h4>
                <p className="from" > From: {this.props.city}, {this.props.country}</p>
                <p className="title" >Job Title: {this.props.title}</p>
                <p className="employer" > Employer: {this.props.employer}</p>
                <ol className="movies" > Favorite Movies:
                    <li className="movie" >: {this.props.m1}</li>
                    <li className="movie" >: {this.props.m2}</li>
                    <li className="movie" >: {this.props.m3}</li>
                </ol>
            </div>
        )
    }
}