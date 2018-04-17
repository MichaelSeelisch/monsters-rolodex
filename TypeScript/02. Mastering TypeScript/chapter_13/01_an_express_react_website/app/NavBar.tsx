import * as React from 'react'; 
import * as ReactDOM from 'react-dom'; 
 
export class MenuItem {
    ButtonName: string;
} 
 
export class NavBarProps { 
    menuItems ? : MenuItem [] ; 
} 
 
export default class NavBar extends React.Component<NavBarProps, {}> {
    state: NavBarProps; 
    
    constructor (props ? : NavBarProps) { 
        super(props); 
        this.state = {
            menuItems : []
        }; 
    }
    
    render() { 
        return <div>        
            <nav className="navbar navbar-default navbar-fixed-top navbar-inverse">
                <div className="container-fluid"> 
                    <a className="navbar-brand">Home</a> 
                    <ul className="nav navbar-nav"> 
                        { this.state.menuItems.map( (item, i) => { 
                            return( 
                                <li 
                                    key={i} 
                                    className="nav-item nav-link active"> 
                                        <a href="#">{item.ButtonName}</a>
                                </li> 
                            ); 
                        }, this)} 
 
                    </ul> 
                </div> 
          </nav> 
        </div>; 
    } 
};
