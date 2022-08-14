import PropTypes from 'prop-types';
import TimeAgo from './TimeAgo';
import Tags from './Tags';
import get from 'lodash/get';
import { POINT_ESTIMATE } from '../../utils/constants';
import { useDeleteTask } from '../../api';

const Card = ({ task, refetchTasks }) => {
    const { id, name, tags, position, pointEstimate, dueDate, assignee: { avatar, fullName } } = task;
    const { mutate, isLoading } = useDeleteTask();
    const deleteTask = () => {
        mutate({
            input: {
                id
            }
        }, {
            onError: (err) => {
                const firstError = get(err,
                    'response.errors.0.extensions.response.message.0',
                    'Unexpected error ocurred'
                );
                alert(firstError)
            },
            onSuccess: refetchTasks
        })
    }
    return (
        <div className="card rounded-4 mt-2">
            <div className="card-body p-0 py-2 text-white px-3">
                <div className='d-flex justify-content-between'>
                    <span>{name}</span>
                    <span>
                        <div className="dropdown">
                            <i className="bi bi-three-dots dropdown-toggle" data-bs-toggle="dropdown"></i>
                            <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton2">
                                <li><button className="dropdown-item"><i className="bi bi-pencil pe-1"></i> Edit</button></li>
                                <li>
                                    <button className="dropdown-item" onClick={deleteTask} disabled={isLoading}>
                                        <i className="bi bi-trash pe-1"></i>
                                        Delete
                                    </button>
                                </li>
                            </ul>
                        </div>



                    </span>
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
    refetchTasks: PropTypes.func,
}

export default Card;