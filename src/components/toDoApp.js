import React from 'react';
import List from './list';
import Input from './Input';

class ToDoApp extends React.Component {
  
    componentWillMount(){
    
    }
    onInputChange = (event) => {
       this.props.inputChange(event.target.value);
    };
    onInputSubmit = (event) => {
        event.preventDefault();
        this.props.inputSubmit();
    }
    onListClick = (i) => {
        this.props.listItemClick(i);
    }
    deleteListItem = (i) => {
        this.props.deleteListItem(i)
    }
   
        
    render() {
        console.log(this.props)
        return(
            <div className="row">
            <div className="col-md-10 col-md-offset-1">
              <div className="panel panel-default">
                <div className="panel-body">
                  <h1>My To Do App</h1>
                  <hr/>
                  <Input  
                    value={this.props.toDoApp.newToDo}
                    onChange={this.onInputChange}
                    onSubmit={this.onInputSubmit}
                    />
                  <List 
                    listItems={this.props.toDoApp.list} 
                    onClick={this.onListClick}
                    deleteListItem={this.deleteListItem}/>
                </div>
              </div>
            </div>
          </div>
        )
    }
}
  export default ToDoApp;