import * as React from 'react';
import * as ReactDOM from 'react-dom';

import NavBar from './NavBar';

export class App 
    extends React.Component<{}, {}> {
        render() {
            return <div>
                <NavBar />
            </div>;
        }
    }

ReactDOM.render(
    <App />, 
    document.getElementById('app_anchor')
);
