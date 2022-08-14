import { avatarUrl } from '../../../utils/constants';

const Topbar = () => (
    <div className="card rounded-4">
    <div className="card-body p-2">
        <div className="input-group">
        <span className="input-group-text" id="basic-addon1">
            <i className="bi bi-search"></i>
        </span>
        <input type="text" className="form-control" placeholder='Search'/>
        <span className="input-group-text">
            <i className="bi bi-bell"></i>
            <img src={avatarUrl} className="rounded-circle avatar ms-3" alt="avatar" />
        </span>
        </div>
    </div>
    </div>
);

export default Topbar;