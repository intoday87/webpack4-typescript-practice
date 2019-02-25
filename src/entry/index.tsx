import * as React from 'react'
import * as ReactDOM from 'react-dom'

interface HelloProps {
    name: string
}

class HelloMessage extends React.Component<HelloProps, {}> {
    render() {
        return (
            <div>Hello {this.props.name}</div>
        );
    }
}

ReactDOM.render(
    <HelloMessage name="Taylor" />,
    document.getElementById('hello-example')
);