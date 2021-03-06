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

    render(){
        return <KanbanBoard cards={cards}/>;
    }
}

export default KanbanBoardContainer;