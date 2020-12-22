import React from 'react';
import dummyStore from '../dummyStore';
//import { Link } from 'react-router-dom'
import Note from "./Note"

class NoteList extends React.Component {
    render(){
        const noteList = dummyStore.notes.map(note => <Note note={note} key={note.id}/>);
        return (
            <ul>
                {noteList}
            </ul>
        )
    }
}

export default NoteList