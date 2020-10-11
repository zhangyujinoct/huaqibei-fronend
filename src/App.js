import React from 'react';
import { BrowserRouter as Router,Route} from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Register from './Register';
 
class App extends React.Component {
	render(){
		return(
		<Router >
		 <div>
			<Route path="/" component={Home} />
			<Route path="/Login" component={Login} />                                                                                                                                                                                                                                                                                   
			<Route path="/Register" component={Register} />                                                                                                                                                                                                                                                                                                                                                                                                                                       
		</div>
		</Router>
		)
 
		}
	}
export default App;