import './style.css';

import CreateTasks from '../../components/boxCreate';
import TaskCard from '../../components/cardTask';

export default function Home() {
	return (
		<div className="homepáge">
			<CreateTasks/>
			<TaskCard/>
		</div>
	)
}