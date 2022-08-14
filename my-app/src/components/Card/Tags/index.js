import PropTypes from 'prop-types';
import { TASK_TAGS_COLORS } from '../../../utils/constants';

const Tags = ({tags}) => (
    tags.map((tag, i) =>
        <span key={`tag_${i}`} className={`badge bg-dark text-${TASK_TAGS_COLORS[tag]}`}>
            {tag}
        </span>
    )
);

Tags.propTypes = {
    tags: PropTypes.array,
}
export default Tags;