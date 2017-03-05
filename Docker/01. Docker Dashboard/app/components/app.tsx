import * as React from 'react'

import { Container, ContainerListItem } from './containerListItem'
import { ContainerList } from './containerList'

export class AppComponent extends React.Component<{}, {}> {
    containers: Container[] = [
    {
        id: '1',
        name: 'test container',
        image: 'some image',
        state: 'running',
        status: 'Running'
    },
    {
        id: '2',
        name: 'another test container',
        image: 'some image',
        state: 'stopped',
        status: 'Running'
    }]
    
    render() {
        return (<h1>Docker Dashboard</h1>)
    }
}