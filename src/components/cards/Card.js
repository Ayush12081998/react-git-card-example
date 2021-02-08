import React from "react";
import './card.css';


class Card extends React.Component{
    profile = this.props;
    render(){
        return(
            <div className="profile">
                <img className="photo" src={this.profile.avatar_url} alt="image Here.."/>
                <div className="info" style={{display: 'inline-block', padding:'10px'}}>
                    <div className="name" style={{fontSize:'125%'}}>{this.profile.name.toLocaleUpperCase()}</div>
                    <div className="company">{this.profile.company}</div>
                </div>
            </div>
        );
    }
}
export default Card