import { selectContinents } from './index'
import { continentsData } from '../query/Query'

class continentsDispatcher {
    
    dispatchContinents(dispatch) {
        
        fetch('https://countries.trevorblades.com/graphql', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                query: continentsData})
        })
            .then(response => response.json())
            .then(json => {
                dispatch(selectContinents(json.data))
            })

    }

}
/* eslint import/no-anonymous-default-export: [2, {"allowNew": true}] */
export default new continentsDispatcher()