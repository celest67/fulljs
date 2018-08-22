import React from 'react'
import Header from './Header'

class App extends React.Component {
    /*constructor(props) {
        super(props);
        this.state = {
            test: 42
        };
    }*/
    state = {
        test: 43,
        pageHeader: 'Naming Contests'
    };
    componentDidMount(){
        console.log('did mount');
        //Aca va ajax, timers, listeners
        debugger;
    }
    componentWillUnmount(){
        console.log('will unmount')
        //aca va clean timers, listeners
        debugger;
    }
    render () {
        return (
            <div className="App">
                <Header message={this.state.pageHeader}/>
                <div>
                    {this.state.test}
                </div>
            </div>
        )
    }
}

export default App;