import PropTypes from 'prop-types';
import get from 'lodash/get';
import EstimateDropDown from './EstimateDropDown';
import UsersDropDown from './UsersDropDown';
import LabelsDropDown from './LabelsDropDown';
import DueDateDropDown from './DueDateDropDown';
import { useCreateTask, useUpdateTask } from '../../../api';
import { useEffect, useState } from 'react';

const CreateUpdateTask = ({ visible, onClose, tags, refetchTasks, task }) => {
    const { mutate, isLoading } = useCreateTask();
    const { mutate: mutateUpdate, isLoading: isLoadingUpdate } = useUpdateTask();
    const [data, setData] = useState({
        assigneeId: '',
        dueDate: new Date(),
        name: '',
        pointEstimate: '',
        status: 'BACKLOG',
        tags: [],
    });

    const {
        assigneeId,
        dueDate,
        name,
        pointEstimate,
        tags: tagsData
    } = data;

    const updateVal = (field, value) => {
        setData((prev) => ({ ...prev, [field]: value }))
    }

    const onError = (err) => {
        const firstError = get(err,
            'response.errors.0.extensions.response.message.0',
            'Please fill the form properly'
        );
        alert(firstError)
    };

    const onSuccess = () => {
        refetchTasks();
        onClose();
    }

    const saveTask = () => {
        let savingMutation;
        if (!task) {
            savingMutation = mutate;
        } else {
            savingMutation = mutateUpdate;
        }
        savingMutation({
            input: {
                ...data,
                dueDate: dueDate instanceof Date ? dueDate.toISOString().substr(0, 10) : dueDate
            }
        }, {
            onError: onError,
            onSuccess: onSuccess
        })
    }

    useEffect(() => {
        if (task) {
            setData({
                id: task.id,
                assigneeId: task.assignee.id,
                dueDate: task.dueDate,
                name: task.name,
                pointEstimate: task.pointEstimate,
                status: task.status,
                tags: task.tags,
            });
        }
    }, [task]);

    return (
        <div className="modal" tabIndex="-1" style={{ display: visible ? 'inherit' : 'none' }}>
            <div className="modal-dialog">
                <div className="modal-content bg-dark">
                    <div className="modal-body">
                        <input className="form-control text-white"
                            placeholder="Task Title"
                            onChange={(e) => updateVal('name', e.target.value)}
                            value={name}
                        />
                        <div className='d-flex justify-content-between'>
                            <EstimateDropDown onChange={(val) => updateVal('pointEstimate', val)} value={pointEstimate} />
                            <UsersDropDown onChange={(val) => updateVal('assigneeId', val)} value={assigneeId} />
                            <LabelsDropDown tags={tags} onChange={(val) => updateVal('tags', val)} value={tagsData} />
                            <DueDateDropDown onChange={(val) => updateVal('dueDate', val)} value={dueDate} />
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={onClose}>Cancel</button>
                        <button
                            type="button"
                            className="btn btn-primary"
                            onClick={saveTask}
                            disabled={isLoading || isLoadingUpdate}
                        >
                            Save
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

CreateUpdateTask.propTypes = {
    visible: PropTypes.bool,
    tags: PropTypes.array,
    onClose: PropTypes.func,
    refetchTasks: PropTypes.func,
}

export default CreateUpdateTask;