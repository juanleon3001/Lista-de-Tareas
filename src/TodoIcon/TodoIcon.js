import { ReactComponent } from 'react';
import { GiConfirmed } from 'react-icons/gi';
import { MdDelete } from 'react-icons/md';
import './TodoIcon.css';

const iconsTypes = {
	check: (color) => (
		<GiConfirmed
			className="Icon-svg"
			fill={color}
		></GiConfirmed>
	),
	delete: (color) => (
		<MdDelete
			className="Icon-svg"
			fill={color}
		></MdDelete>
	),
};

function TodoIcon({ type, color, onClick }) {
	return (
		<span
			className={`Icon-container Icon-container-${type}`}
			onClick={onClick}
		>
			{iconsTypes[type](color)}
		</span>
	);
}

export { TodoIcon };
