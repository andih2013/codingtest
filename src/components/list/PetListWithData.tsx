import * as React from 'react'
import PetList from './PetList'
import { loadData } from '../../services/Api'
import Pet from '../../models/pet'
import { PetType } from '../../models/petType'

type Props = {
    petTypeFilter?: PetType
}

type State = {
    maleOwnerPets?: Pet[]
    femaleOwnerPets?: Pet[]
}

class PetListWithData extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {}
    }

    async componentDidMount() {
        const filter = this.props.petTypeFilter
        try {
            const data = await loadData('people')
            const maleOwnerPets: Pet[] = []
            const femaleOwnerPets: Pet[] = []
            if (data) {
                data.map(owner => {
                    if (owner.pets) {
                        if (owner.gender === 'Male') {
                            maleOwnerPets.push(...owner.pets)
                        } else {
                            femaleOwnerPets.push(...owner.pets)
                        }
                    }
                    return owner
                })
            }

            let processedMaleOwnerPets = maleOwnerPets.sort((a, b) => (a.name > b.name) ? 1 : -1)
            let processedFemaleOwnerPets = femaleOwnerPets.sort((a, b) => (a.name > b.name) ? 1 : -1)
            if (filter) {
                processedMaleOwnerPets = maleOwnerPets.filter(pet => pet.type === filter)
                processedFemaleOwnerPets = femaleOwnerPets.filter(pet => pet.type === filter)
            }
            this.setState({ 
                maleOwnerPets: processedMaleOwnerPets, 
                femaleOwnerPets: processedFemaleOwnerPets 
            })
        } catch (error) {
            console.log(error)
        }
    }

    render() {
        const {maleOwnerPets, femaleOwnerPets} = this.state
        return (
            <>
                <PetList
                    title={'Male'}
                    pets={maleOwnerPets}
                />
                <PetList
                    title={'Female'}
                    pets={femaleOwnerPets}
                />
            </>
        )
    }
}

export default PetListWithData
