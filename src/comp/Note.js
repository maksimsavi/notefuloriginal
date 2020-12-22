import React from 'react';
import { Link } from 'react-router-dom'

class Note extends React.Component {
    
    handleNoteClick(){
        console.log('caghut note click')
    }
    handleDeleteClick(e){
        console.log('caghut delete click')
        e.stopImmediatePropagation()();
    }

    render(){
        var modified = this.props.note.modified.slice(0, 10);
        const note = this.props.note;
        return (
            <li className="note" key={note.id} 
            
            >
                <h2><Link to={`/note/${note.id}`} >{note.name}</Link></h2>
                <p>modified: {modified}</p>
                <button
                    onClickCapture={()=>this.handleDeleteClick()}
                >delete</button>
            </li>
        )
    }
}

export default Note