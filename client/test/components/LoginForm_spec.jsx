import React from 'react/addons'
import {LoginForm} from '../../src/components/LoginForm'
import {expect} from 'chai'

const {renderIntoDocument, findRenderedDOMComponentWithTag, scryRenderedDOMComponentsWithTag} = React.addons.TestUtils;

describe('LoginForm', () => {
  it('Renders the login form on the screen', () => {
    const component = renderIntoDocument(<LoginForm />);
    const inputs = scryRenderedDOMComponentsWithTag(component, 'input');
    const submitButton = scryRenderedDOMComponentsWithTag(component, 'button')
    expect(inputs.length).to.equal(2);
    expect(submitButton.length).to.equal(1);
  })
  it('Supports multilanguage', () => {
    const component = renderIntoDocument(<LoginForm />);
  })
})
