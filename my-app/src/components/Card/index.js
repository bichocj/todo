import PropTypes from 'prop-types';
import TimeAgo from './TimeAgo';
import Tags from './Tags';
import { POINT_ESTIMATE } from '../../utils/constants';

const Card = ({task}) => {
    const { name, tags, position, pointEstimate, dueDate, assignee: { avatar, fullName }} = task;
    return (
        <div className="card rounded-4 mt-2">
            <div className="card-body p-0 py-2 text-white px-3">
                <div className='d-flex justify-content-between'>
                    <span>{name}</span>
                    <span><i className="bi bi-three-dots"></i></span>
                </div>
                <div className='d-flex justify-content-between mt-3'>
                    <span className='fs-7'>{POINT_ESTIMATE[pointEstimate]} Points</span>
                    <TimeAgo date={dueDate} />
                </div>
                <div className='d-flex mt-3'>
                    <Tags tags={tags} />
                </div>
                <div className='d-flex justify-content-between mt-3'>
                    <img 
                        src={avatar || `https://ui-avatars.com/api/?name=${fullName}`} 
                        className="rounded-circle avatar" 
                        alt={fullName} 
                        title={fullName} 
                        />
                    <div className='d-flex'>
                        <i className="bi bi-paperclip"></i>
                        <span className='ms-1'>{position} <i className="bi bi-diagram-2"></i></span>
                        <span className='ms-1'>{position * 2} <i className="bi bi-chat"></i></span>
                    </div>
                </div>
            </div>
        </div>
    );
};


Card.defaultProps = {
    task: []
}

Card.propTypes = {
    task: PropTypes.shape(),
}

export default Card;