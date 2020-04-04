import * as React from 'react'
import './PetList.scss'
import Pet from '../../models/pet'

export type Props = {
    title: string
    pets?: Pet[]
}

class PetList extends React.Component<Props> {
    render() {
        const { title, pets } = this.props
        return (
            <div className='pet-list'>
                <div className='pet-list__title-wrapper'>
                    <span className='pet-list__title'>{title}</span>
                </div>
                {pets && 
                    <ul className='pet-list__items'>
                        {pets.map(pet => {
                                return (
                                    <li 
                                        className='pet-list__item pet-list__name' 
                                        key={pet.name.toLowerCase()}
                                    >{pet.name}</li>
                                )
                            })
                        }
                    </ul>
                }
            </div>
        )
    }
}

export default PetList
