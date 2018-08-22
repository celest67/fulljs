import React from 'react'
import Header from './Header'
import ContestPreview from './ContestPreview'
import axios from 'axios';

//const json = require('../testData.json');

class App extends React.Component {
    /*constructor(props) {
        super(props);
        this.state = {
            test: 42
        };
    }*/
    state = {
        test: 43,
        pageHeader: 'Naming Contests',
        contests: []
    };
    componentDidMount(){
        console.log('did mount');
        //Aca va ajax, timers, listeners
        //debugger;
        axios.get('/api/contests')
            .then(resp => {
                console.log(resp);
                console.log(resp.data.contests)
                this.setState({
                    contests: resp.data.contests
                })
            })
            .catch(console.error)
        
    }
    componentWillUnmount(){
        console.log('will unmount')
        //aca va clean timers, listeners
        //debugger;
    }
    render () {
        return (
            <div className="App">
                <Header message={this.state.pageHeader}/>
                <div>
                    {this.state.contests.map(contest =>
                        <ContestPreview key={contest.id} {...contest}/>
                    )}
                </div>
            </div>
        )
    }
}

export default App;