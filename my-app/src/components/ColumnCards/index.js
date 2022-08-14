import PropTypes from 'prop-types';
import Cards from '../Cards';

const ColumnCards = ({title, status, tasks}) => {
    const filtered = tasks.filter(c => c.status === status);
    return (
        <div className='col'>
            <div className='mb-1'>{title} ({filtered.length})</div>
            <Cards tasks={filtered} />
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
}

export default ColumnCards;