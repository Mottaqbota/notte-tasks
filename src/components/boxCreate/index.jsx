import './style.css'

import React, { useState, useEffect } from 'react';

import CardTask from '../cardTask';
import SubTask from '../subTask';

export default function CreateTasks() {
	const [inputTaskName, setinputTaskName] = useState('');

	const getTaskName = (e) => {
		setinputTaskName(e.target.value)
	}


	function CreateTask() {
		
	}

	return (
		<div className="box_createTasks">
			<p className="title"></p>
			<input onChange={ getTaskName } type="text" placeholder='O que precisamos fazer hoje? Ex: Estudar programação.' />
			<p>Nome da Tarefa: { inputTaskName }</p>
			<button onClick={ CreateTask() }> Criar tarefa</button>
		</div>
	)
}