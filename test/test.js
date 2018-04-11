import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { spy } from 'sinon';
import { createMockStore } from 'redux-test-utils';
import ValidatorsList from '../src/components/ValidatorsList.react';

spy(ValidatorsList.prototype, 'componentDidMount');

describe('<ValidatorsList />', () => {
    it('calls componentDidMount', () => {
        const initialState = {};
        const store = createMockStore(initialState);
        const wrapper = shallow(<ValidatorsList />, {context: {store}});
        expect(ValidatorsList.prototype.componentDidMount.calledOnce).to.equal(true);
    });
});
