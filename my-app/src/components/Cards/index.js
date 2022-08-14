import PropTypes from 'prop-types';
import Card from '../Card';

const Cards = ({tasks}) => {
    return tasks.map((task, index) => <Card task={task} key={`task_${index}`} />)
}

Cards.defaultProps = {
    tasks: []
}

Cards.propTypes = {
    tasks: PropTypes.array,
}

export default Cards;