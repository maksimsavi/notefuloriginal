import React from 'react';
import "./comp/Main.css"
import FolderList from './comp/FolderList'
import NoteList from './comp/NoteList'
import { Link } from 'react-router-dom'
import { Route, Switch } from 'react-router-dom'
import Folder from './comp/Folder'
import Note from './comp/Note'
import NoteExpanded from './comp/NoteExpanded'
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {folders:[], notes:[]}
  }

  componentDidMount() {
    let data = this.state;

        var myHeaders = new Headers();
        myHeaders.append("Authorization", "supercrazytoken");
        myHeaders.append("Content-Type", "application/json");

        var requestOptions = {
        method: 'GET',
        headers: {"Authorization": "supercrazytoken"},
        redirect: 'follow'
        };

        fetch("http://localhost:8000/api/folders", requestOptions)
        .then(response => response.json())
        .then(result => data.folders = result)
        .catch(error => console.log('error', error));

        fetch("http://localhost:8000/api/notes", requestOptions)
        .then(response => response.json())
        .then(result => data.notes = result)
        .catch(error => console.log('error', error));

        this.setState(data);
        
  }
  render(){
    return (
      <div className="mainComp">
          <header><Link to="/"><h1>Noteful</h1></Link></header>
          <div className="sidebar">
              <FolderList />
          </div>
          <main>
          <Switch>
              <Route exact path="/" component={NoteList} />
              <Route path="/folder" component={Folder} />
              
              <Route path="/note/:id" 
                  render={(e)=>(
                      <NoteExpanded noteArray={this.state}/>
                  )}
              />
          </Switch>
          </main>
      </div>
  )
    // on path /folder/:folderId show notes containing the folder id
    //    wont allow the note to reassign the folder yet
    // on path /
    // check the router component supplied by thinkful
  }
}

export default App;
