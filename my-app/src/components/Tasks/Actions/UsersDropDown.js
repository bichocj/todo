import PropTypes from 'prop-types';
import { useGetUsers } from '../../../api';
import Loader from '../../Loader';

const EstimateDropDown = ({onChange, value}) => {
    const { data, isLoading } = useGetUsers();
    return (
        <div className="dropdown">
            <button className="btn btn-primary-outline text-white dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                <i className="bi bi-person"></i> Assignee
            </button>
            {isLoading ?
                <Loader />
                :
                <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuOffset">
                    {
                        data.users.map((u, i) => (
                            <li key={`user_${i}`}>
                                <button 
                                    className={`dropdown-item ${ value === u.id ? 'active' : ''}`} 
                                    onClick={() => onChange(u.id)}
                                >
                                    <i className="bi bi-person"></i> {u.fullName}
                                </button>
                            </li>
                        ))
                    }

                </ul>
            }
        </div>
    );
}

EstimateDropDown.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
}

export default EstimateDropDown;