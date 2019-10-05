import React from 'react'
import Lista from './ComponentsProps'
import Nome from './ComponentNome'

export default class ComponentState extends React.Component {
    
    initialState = {
        escola: 'Impacta',
        cursos: ['React','MEAN','Excel']
    }

    count = 1
    
    constructor() {
		super();
		this.state = this.initialState
    }

    adicionar(){
        const {cursos} = this.state
        cursos.push('Novo Curso')

        ++this.count
        const state = {escola : 'Impacta' + this.count, cursos}

        this.setState(state)
    }
    
    render() {
		return (
			<div>
				<h1>Escola: <Nome value={this.state.escola}/></h1>
				<button onClick={this.adicionar.bind(this)}>Adicionar</button>
                <h2>Cursos:</h2>
				<div>
					{this.state.cursos.map((curso, i) =>
                        <Lista	key={i} info={curso} />
                    )}
				</div>
                
			</div>
		);
	}
}

