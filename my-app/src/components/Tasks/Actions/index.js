import PropTypes from 'prop-types';
import CreateButton from "./CreateButton";

const Actions = ({tags, refetchTasks}) => {
    return (
        <div className='content text-secondary mt-3'>
            <div className='d-flex justify-content-between'>
                <div>
                    <span>
                        <button type="button" className="btn btn-outline-secondary">
                            <i className="bi bi-list"></i>
                        </button>
                    </span>
                    <span>
                        <button type="button" className="btn btn-outline-primary">
                            <i className="bi bi-grid"></i>
                        </button>
                    </span>
                </div>
                <div>
                    <CreateButton tags={tags} refetchTasks={refetchTasks}/>
                </div>
            </div>
        </div>
    )
}


Actions.propTypes = {
    tags: PropTypes.array,
    refetchTasks: PropTypes.func,
}
export default Actions;