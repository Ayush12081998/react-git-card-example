import React from 'react';
import Card from './cards/Card';


class GitHubApp extends React.Component{

    render(){
        console.log(this.props.profiles);
        return(
        <div>
            <h1>GitHubCard App</h1>  
            {/* <Card {...testData[0]}/> */}
            {/* <Card {...testData[1]}/> */}
            {/* using loop instead of single class reference of <Card/> */}
            {this.props.profiles.map(profile => <Card key={profile.id} {...profile}/>)}
        </div>);
    }
}
export default GitHubApp