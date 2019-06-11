import React, { createContext } from 'react'
import { GraphData, GraphLink, GraphNode } from './GraphTypes'

interface StoreShape {
    transitiveQuorum: GraphData
}

type Action =
    | { type: 'receiveQuorum', payload: GraphData }

var links : GraphLink[] = []
var nodes : GraphNode[] = []
const initialState = {
    transitiveQuorum: {
        links,
        nodes
    }
}
export const Store = createContext<{
    state: {
        transitiveQuorum: GraphData
    },
    dispatch: React.Dispatch<Action>
}>({state: initialState, dispatch: (action) => {}})

function reducer(state : StoreShape, action : Action) {
    switch (action.type) {
        case 'receiveQuorum':
            return Object.assign({}, {
                transitiveQuorum: action.payload
            })
        default:
            return state
    }
}

export function StoreProvider(props: any) {
    const [ state, dispatch ] = React.useReducer(reducer, initialState)
    const value = { state, dispatch }
    return <Store.Provider value={ value }>
        { props.children }
    </Store.Provider>
}

export default Store