import PropTypes from 'prop-types';
import Cards from '../Cards';

const ColumnCards = ({title, status, tasks, refetchTasks}) => {
    const filtered = tasks.filter(c => c.status === status);
    return (
        <div className='col'>
            <div className='mb-1'>{title} ({filtered.length})</div>
            <Cards tasks={filtered} refetchTasks={refetchTasks} />
        </div>
    );
}


ColumnCards.defaultProps = {
    tasks: [],
}

ColumnCards.propTypes = {
    title: PropTypes.string,
    status: PropTypes.string,
    tasks: PropTypes.array,
    refetchTasks: PropTypes.func,
}

export default ColumnCards;