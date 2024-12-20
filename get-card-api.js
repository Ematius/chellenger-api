import CARDS from './data/api.json' with {type: 'json'}


export function getPersonFromBackend(){
    return CARDS;
}