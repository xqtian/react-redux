import { connect } from 'react-redux';
import ToDoApp from '../components/toDoApp.js'
import {
    inputChange,
    inputSubmit,
    deleteListItem,
    listItemClick
}from '../redux/modules/toDoApp'


function mapStateToProps(state) {
    return {
      toDoApp: state.ToDoApp // gives our component access to state through props.toDoApp
    }
  }
  
  function mapDispatchToProps(dispatch) {
    return {
        inputChange: (value) => dispatch(inputChange(value)),
        inputSubmit: () => dispatch(inputSubmit()),
        deleteListItem: (i) => dispatch(deleteListItem(i)),
        listItemClick: (i) => dispatch(listItemClick(i))
    }; 
  }
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(ToDoApp);
