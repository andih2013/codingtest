import Owner from '../models/owner'

const APIURL = 'http://agl-developer-test.azurewebsites.net/'

async function loadData(objName: string): Promise<Owner[]> {
    const response = await fetch(`${APIURL}${objName}.json`)
    return response.json()
}

export { loadData }