import PropTypes from 'prop-types';
import { useState } from "react";
import CreateUpdateTask from "./CreateUpdateTask";

const CreateButton = ({ tags, refetchTasks }) => {
    const [isShowingModal, setIsShowingModal] = useState(false);
    const showModal = () => setIsShowingModal(true);
    const hideModal = () => setIsShowingModal(false);
    return (
        <span>
            <CreateUpdateTask 
                visible={isShowingModal} 
                onClose={hideModal} 
                tags={tags} 
                refetchTasks={refetchTasks}    
            />
            <button type="button" className="btn btn-primary text-white" onClick={showModal}>
                <i className="bi bi-plus"></i>
            </button>
        </span>
    )
}

CreateButton.propTypes = {
    onClose: PropTypes.func,
    refetchTasks: PropTypes.func,
}

export default CreateButton;
