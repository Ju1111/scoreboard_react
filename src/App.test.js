import React from 'react';
// import ReactDOM from 'react-dom';
import { shallow } from 'enzyme'
import App from './App';
import Title from './components/Title';
import Board from './containers/Board'

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

describe('<App />', () => {
  const app = shallow(<App />)

  it('wraps everything in a div tag', () => {
    expect(app).toHaveTagName('div')
  })

  it('Renders the Board', () => {
    expect(app).toContainReact(Board)
  })
})
