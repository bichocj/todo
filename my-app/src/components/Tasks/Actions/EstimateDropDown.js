import PropTypes from 'prop-types';
import { POINT_ESTIMATE } from '../../../utils/constants';

const EstimateDropDown = ({value, onChange}) => {
    const points = Object.keys(POINT_ESTIMATE);
    return (
        <div className="dropdown">
            <button className="btn btn-primary-outline text-white dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                <i className="bi bi-plus-slash-minus"></i> Estimate
            </button>
            <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuOffset">
                {
                    points.map((p, i) => (
                        <li key={`estimate_${i}`}>
                            <button 
                                className={`dropdown-item ${ value === p ? 'active' : ''}`}
                                onClick={() => onChange(p)}
                            >
                                <i className="bi bi-plus-slash-minus"></i> {POINT_ESTIMATE[p]} points
                            </button>
                        </li>
                    ))
                }

            </ul>
        </div>
    );
}


EstimateDropDown.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
}

export default EstimateDropDown;