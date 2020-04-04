import React from 'react';
import PetList from './PetList';
import { shallow } from 'enzyme'
import Pet from '../../models/pet';

describe('<PetList />', () => {
  it('renders PetList', () => {
    const list = shallow(<PetList title='Male' />)
    expect(list.find('.pet-list').length).toEqual(1)
  })

  it('renders PetList title', () => {
    const list = shallow(<PetList title='Male' />)
    const expectedOutput = 
      '<div class="pet-list">' +
      '<div class="pet-list__title-wrapper">' +
      '<span class="pet-list__title">Male</span>' +
      '</div>' +
      '</div>'
    const realOutput = list.find('div.pet-list').html()
    expect(realOutput.indexOf(expectedOutput) > -1).toEqual(true)
  })

  it('renders PetList title', () => {
    const pets: Pet[] = []
    pets.push({name: 'Simba', type: 'Cat'})
    pets.push({name: 'Tom', type: 'Cat'})
    const list = shallow(<PetList title='Female' pets={pets} />)
    const expectedOutput = 
      '<div class="pet-list">' +
      '<div class="pet-list__title-wrapper">' +
      '<span class="pet-list__title">Female</span>' +
      '</div>' +
      '<ul class="pet-list__items">' +
      '<li class="pet-list__item pet-list__name">Simba</li>' +
      '<li class="pet-list__item pet-list__name">Tom</li>' +
      '</ul>' +
      '</div>'
    const realOutput = list.find('div.pet-list').html()
    expect(realOutput.indexOf(expectedOutput) > -1).toEqual(true)
  })
})
