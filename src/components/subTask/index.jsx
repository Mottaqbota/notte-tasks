import './style.css';

// ========= Icons =========
import { FiCheck } from "react-icons/fi";
import { FiEdit3 } from "react-icons/fi";
import { FiTrash } from "react-icons/fi";

export default function subTask(props) {
	return (
		<div key={ props.id } className="subTask">
			<input onChange={ props.status } className="checkbox" type="checkbox" name="" id="" /><FiCheck/>
			<p className="titleSubTask"> { props.title } </p>
			<div className="boxEditSubTask">
				<button className="EditButton">
					<FiEdit3 />
				</button>
				<button className="EditButton">
					<FiTrash />
				</button>
			</div>
		</div>
	)
}