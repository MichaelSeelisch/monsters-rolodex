import * as React from 'react';
import * as ReactDOM from 'react-dom';

export class App 
    extends React.Component<{}, {}> {
        render() {
            return <div>
                Hello
            </div>;
        }
    }

ReactDOM.render(
    <App ></App>, document.getElementById('app_anchor')
);
