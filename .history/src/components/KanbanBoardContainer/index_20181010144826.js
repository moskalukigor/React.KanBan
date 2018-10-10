import React, {Component} from 'react';
import KanbanBoard from '../KanbanBoard';

class KanbanBoardContainer extends Component{
    constructor(props)
    {
        super(props);
        this.state = {
            cards: [],
        }
    }

    render(){
        return <KanbanBoard cards={cards}/>;
    }
}

export default KanbanBoardContainer;