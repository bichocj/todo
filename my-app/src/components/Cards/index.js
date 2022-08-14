import PropTypes from 'prop-types';
import Card from '../Card';

const Cards = ({allTags, tasks, refetchTasks}) => {
    return tasks.map((task, index) => (
        <Card 
            key={`task_${index}`} 
            allTags={allTags}
            task={task} 
            refetchTasks={refetchTasks} 
        />
    ))
}

Cards.defaultProps = {
    allTags: [],
    tasks: []
}

Cards.propTypes = {
    allTags: PropTypes.array,
    tasks: PropTypes.array,
}

export default Cards;