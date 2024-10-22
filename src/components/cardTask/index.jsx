import './style.css'

import SubTask from '../subTask';

var tasksArray = [
	{
		id: 0,
		name: 'Ir ao mercado',
		dateInitial: '2024-10-22T04:26:48.033Z',		
		dateFinal: '2024-10-23T08:00:00.000Z',		
		subTasks: [
			{
				"id": 0,
				"subTask": "Macarrão",
				"status": "Pending",
			},
			{
				"id": 1,
				"subTask": "Carne",
				"status": "Finished",
			}
		],
	}
]

export default function CardTask() {
	console.log(tasksArray)
	
	return (
		tasksArray.map((task)=> (
			<div className="cardTask">
				<div className="header">
					<h1 className="titleTask"> </h1>
					<div className="boxDate">
						<p className="date"> </p>
						<p className="date"></p>
					</div>

					<div className="boxSubTasks">
						<SubTask />
					</div>
				</div>
			</div>
		))
	)
	
}