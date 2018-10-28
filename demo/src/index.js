import React, {Component} from 'react'
import {render} from 'react-dom'

import Example from '../../src'

class Demo extends Component {
  render() {
    return <div>
      <h1>simple-month-picker Demo</h1>
      <Example dateFormat={'MM/YY'}/>
    </div>
  }
}

render(<Demo/>, document.querySelector('#demo'));
