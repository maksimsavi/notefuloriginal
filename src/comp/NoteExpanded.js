import React from 'react';
import "./Main.css"

class NoteExpanded extends React.Component {
    
    componentDidMount(){

    }
    getNotes(){
        const currentNoteId = this.props.match.params.id;
        const noteInfo = this.props;
        return noteInfo
    }
    render(){
       // console.log('note log', noteInfo)
        console.log(this.props)
        return (
            <div className="noteExp">
                
            </div>
        )
    }
}

export default NoteExpanded