import ReduxThunk from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';
import reducer from './reducers/reducer';

//creation of the store and adding the ReduxThunk as a middleWare
const store = createStore(reducer,{}, applyMiddleware(ReduxThunk));

//exporting the store
export default store;