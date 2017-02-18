var React = require('react');
var ReactDOM = require('react-dom');
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

var listOfItems = <ul className="list-of-items">
                       <li className="item-1">Item 1</li>
                       <li className="item-2">Item 2</li>
                       <li className="item-3">Item 3</li>
                  </ul>;
                  
ReactDOM.render(listOfItems, document.getElementById('react-application'));
