import React from 'react'
import ReactDOM from 'react-dom'

const Header = ({message}) => {
    return (
        <h2 className="text-center">
            {message}
        </h2>
    )
}

const App = () => {
    return (
        <div className="App">
            <Header message="Naming lala"/>
            <div>
                ...
            </div>
        </div>
    )
}
/* deprecated USAR npm install --save prop-types
App.propTypes = {
    headerMessage: React.PropTypes.string.isRequired
};
*/
App.defaultProps = {
    headerMessage: 'Hello'
};

ReactDOM.render(
    <App />,
    document.getElementById('root')
);