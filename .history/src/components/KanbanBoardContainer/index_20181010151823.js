import React, {Component} from 'react';
import KanbanBoard from '../KanbanBoard';

const API_URL = 'http://kanbanapi.pro-react.com/';
const API_HEADERS = {
    'Content-Type': 'application/json',
    Authorization : 'any-string-you-like', 
};

class KanbanBoardContainer extends Component{
    constructor(props)
    {
        super(props);
        this.state = {
            cards: [],
        }
    }

    componentDidMount(){
        fetch(API_URL + '/cards', {headers: API_HEADERS})
            .then((response) => response.json())
            .then((responseData) => {
                this.setState({cards: responseData});
            })
            .catch((error) => {
                console.log("Error fetching data", error);
            });
    }

    addTask(cardId, taskName)
    {

    }

    deleteTask(cardId, taskId, taskIndex)
    {
        let cardIndex = this.state.cards.findIndex((card) => card.id == cardId);
        let nextState = update(this.state.cards, {
            [cardIndex] : {
                tasks: {$splice: [[taskIndex, 1]]}
            }
        });

        this.setState({cards: nextState});

        
    }

    toggleTask(cardId, taskId, TaskIndex)
    {

    }

    

    render(){
        return <KanbanBoard cards={this.state.cards}
                            taskCallbacks={
                                {
                                    toggle: this.toggleTask.bind(this),
                                    delete: this.deleteTask.bind(this),
                                    add: this.addTask.bind(this)
                                }
                            }    
        />;
    }
}

export default KanbanBoardContainer;