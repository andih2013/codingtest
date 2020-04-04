import React from 'react';
import App from './App';
import { shallow } from 'enzyme'

describe('<App />', () => {
  it('renders app', () => {
    const app = shallow(<App />)
    expect(app.find('.agl-test').length).toEqual(1)
  })
})
