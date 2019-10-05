import React from 'react'
import './Component.css'
import {Link} from 'react-router-dom'

export default class Componente1 extends React.Component {
    
    initialState = {}
    
    render(){
        console.log('Render Componente 1')
        const style = {
            fontWeight: 'bold'
        }

        return (
            <div>
                <h2 className='red' style={style}>Teste Componente 1</h2>
                <Link to={'/state'}>State</Link>
            </div>
        )
    }
}