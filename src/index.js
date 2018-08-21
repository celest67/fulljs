import React from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
    return (
        <h2 className="text-center">
            {props.headerMessage}
        </h2>
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