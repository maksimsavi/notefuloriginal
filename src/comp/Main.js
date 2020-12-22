import React from 'react';
import "./Main.css"
import FolderList from './FolderList'
import NoteList from './NoteList'
import { Link } from 'react-router-dom'
import { Route, Switch } from 'react-router-dom'
import Folder from './Folder'
import Note from './Note'
import NoteExpanded from './NoteExpanded'

class Main extends React.Component {
    render(){
        console.log(this.props.data)
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
                        render={(props)=>(
                            <NoteExpanded {...props} noteArray={this.props.data.notes}/>
                        )}
                    />
                </Switch>
                </main>
            </div>
        )
    }
}

export default Main

