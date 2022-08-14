import PropTypes from 'prop-types';
import Card from '../Card';

const Cards = ({tasks, refetchTasks}) => {
    return tasks.map((task, index) => <Card task={task} refetchTasks={refetchTasks} key={`task_${index}`} />)
}

Cards.defaultProps = {
    tasks: []
}

Cards.propTypes = {
    tasks: PropTypes.array,
}

export default Cards;