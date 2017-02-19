var React = require('react');
var ReactDOM = require('react-dom');

// Chapter 1 & Chapter 2
//
// var reactElement = React.createElement('h1', { className: 'header' }, 'This is React');
// ReactDOM.render(reactElement, document.getElementById('react-application'));

// var listItemElement1 = React.DOM.li({
//     className: 'item-1',
//     key: 'item-1'
// }, 'Item 1');
// var listItemElement2 = React.DOM.li({
//     className: 'item-2',
//     key: 'item-2'
// }, 'Item 2');
// var listItemElement3 = React.DOM.li({
//     className: 'item-3',
//     key: 'item-3'
// }, 'Item 3');
// var reactFragment = [listItemElement1, listItemElement2,
//     listItemElement3
// ];
// var listOfItems = React.DOM.ul({ className: 'list-of-items' }, reactFragment);

// var listOfItems = <ul className="list-of-items">
//                        <li className="item-1">Item 1</li>
//                        <li className="item-2">Item 2</li>
//                        <li className="item-3">Item 3</li>
//                   </ul>;

// ReactDOM.render(listOfItems, document.getElementById('react-application'));

// Chapter 3
//
// var ReactTestClass = React.createClass({
//   render: function() {
//     return React.createElement('h1', { className: 'header' }, 'React Component');
//   }
// });
// var reactComponentElement = React.createElement(ReactTestClass);
// var reactComponent = ReactDOM.render(reactComponentElement, document.getElementById('react-application'));

//
var reactClass = React.createClass({
  getInitialState: function() {
    return {
      isHeaderHidden: false
    };
  },
  handleClick: function() {
    this.setState({
      isHeaderHidden: !this.state.isHeaderHidden
    });
  },
  render: function() {
    var title = 'Stateful React Component';
    var headerElement = React.createElement('h1', {
      className: 'header',
      key: 'header'
    }, title);
    var buttonElement = React.createElement('button', {
      className: 'btn btn-default',
      onClick: this.handleClick,
      key: 'button'
    }, 'Toggle header');
    if (this.state.isHeaderHidden) {
      return React.createElement('div', null, [buttonElement]);
    }
    return React.createElement('div', null, [buttonElement,
      headerElement
    ]);
  }
});
var reactComponentElement = React.createElement(reactClass);
var reactComponent = ReactDOM.render(reactComponentElement, document.getElementById('react-application'));
