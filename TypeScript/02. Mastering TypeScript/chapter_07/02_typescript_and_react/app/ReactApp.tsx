import * as React from 'react';
  
export class ClickableItem {
  displayName: string; 
  id: number;
} 
 
export class ClickItemView extends React.Component<ClickableItem,{}> { 
  
  constructor() { 
    super();

    this.handleClick = this.handleClick.bind(this); 
  } 
  
  handleClick() {
    alert(`handleClick() { id : ${this.props.id} displayName : ${this.props.displayName} }`);
  }

  render() { 
    return ( 
      <li>
        <button onClick={this.handleClick}>
          {this.props.displayName}
        </button>
      </li> 
    ); 
  } 
}

export interface IArrayViewProps {
  items: ClickableItem[],
  title: string  
}; 
 
export class ArrayView extends React.Component<IArrayViewProps, {}> { 
  
  render() {
    let buttonNodes = this.props.items.map(function(item) { 
      return ( 
        <ClickItemView {...item} key={item.id} /> 
      ); 
    }); 

    return <div> 
      <h1>{this.props.title}</h1> 
        <ul> 
          {buttonNodes} 
        </ul> 
      </div>; 
  } 
};