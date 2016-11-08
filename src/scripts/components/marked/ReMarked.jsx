'use strict';

import React from 'react';
var marked = require('marked');

export default React.createClass({
  getInitialState:function(){
    return{
      value:''
    }
  },
  reInput:function(){
    this.setState({
      value:this.refs.input.value
    })
  },
  change:function(val){
    var rawMarkup = marked(val, {sanitize: true});
     return { __html: rawMarkup };
  },
  render () {
    return (
      <div>
        <div>
          <textarea placeholder="A full-featured markdown parser and compiler, written in JavaScript. Built for speed." ref="input" onChange={this.reInput}></textarea>
        </div>
        <div dangerouslySetInnerHTML={this.change(this.state.value)}></div>
      </div>
    )
  }
})
