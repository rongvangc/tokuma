import React from 'react'

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { Store } from './Store'
import StoreInfo from '../components/StoreInfo/StoreInfo';
import StoreProfile from '../components/StoreProfile/StoreProfile';

configure({adapter: new Adapter()})

describe('<StoreInfo />', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Store onFetchData={() => {}} />)
  })

  it('should render <StoreInfo /> when receiving store data', () => {
    wrapper.setProps({store: {id: 'z_12', redInvoice: {taxCode: 'P77744944'}}});
    expect(wrapper.find(StoreInfo)).toHaveLength(1)
  });

  it('should render <StoreProfile /> when receiving store data', () => {
    wrapper.setProps({store: {id: 'z_12', redInvoice: {taxCode: 'P77744944'}}});
    expect(wrapper.find(StoreProfile)).toHaveLength(1)
  });
})