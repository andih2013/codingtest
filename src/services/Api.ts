import Owner from '../models/owner'
import 'whatwg-fetch'

const APIURL = 'http://agl-developer-test.azurewebsites.net/'

async function loadData(objName: string): Promise<Owner[]> {
    // Use fetchPolyfill to avoid errors from the browsers that don't support fetch
    const response = await window.fetch(`${APIURL}${objName}.json`)
    return response.json()
}

export { loadData }
