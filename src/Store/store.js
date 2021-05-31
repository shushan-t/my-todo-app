import { createStore } from 'redux';
import reducer from '../Reduser/reducer';
//import { composeWithDevTools } from 'redux-devtools-extension';


const store = createStore(reducer);
export default store;
