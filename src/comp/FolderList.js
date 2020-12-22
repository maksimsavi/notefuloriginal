import React from 'react';
import "../dummyStore"
import dummyStore from '../dummyStore';

class FolderList extends React.Component {
    handleFolderClick(id){
        //display notes with selected folder id
        //read id, send to state
        //if state null then render all, if not then render the id 
        console.log('caught folder click', id)
    }
    render(){
        const folderList = dummyStore.folders.map(folder => 
        <li key={folder.id}>
        <button onClick={()=>this.handleFolderClick(folder.id)} >{folder.name}</button>
        </li>);
        return (
            <ul>
                {folderList}
            </ul>
        )
    }
}

export default FolderList