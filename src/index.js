import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import ToDoAppContainer from './containers/toDoAppContainer';
import configureStore from './redux/configureStore';

import * as serviceWorker from './serviceWorker';
const store = configureStore()

class Index extends React.Component {
    render(){
        return(
            <Provider store={store}> 
                <ToDoAppContainer />
            </Provider>
        )
    }
}
ReactDOM.render(<Index />, document.getElementById('root'));

serviceWorker.unregister();

// 热替换HMR，需要加入这段代码才会进行生效
if(module.hot)
    module.hot.accept();
