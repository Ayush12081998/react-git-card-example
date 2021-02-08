import logo from './logo.svg';
import './App.css';
import GitHubApp from './components/GitHubApp'
import Form from './components/form/Form';
import React from 'react';

const testData =[
  {id:1, name:'mojombo', avatar_url: "https://avatars.githubusercontent.com/u/1?v=4", company: 'Mindtree'},
  {id:2, name:'defunkt', avatar_url: "https://avatars.githubusercontent.com/u/2?v=4", company: 'L&T'}
];
class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      profiles: testData
    };
  }
  addNewProfile=(profileData)=>{
    const obj={
      id: profileData.id,
      name: profileData.login,
      avatar_url: profileData.avatar_url
    }
    console.log(obj);
    // this.setState= prevState =>({
    //   profiles: [...prevState.profiles,profileData] //adding profile data in state
    // });
    testData.push(obj);
    this.setState = {
      profiles: testData
    };
    // console.log(this.state.profiles);
  }
  render(){
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <Form onSubmit={this.addNewProfile}/>
        <GitHubApp profiles={this.state.profiles}/>
      </div>
    );
  }
}

export default App;
