import get from "lodash.get";
import { useGetProfile } from "../../api";
import Loader from '../Loader';

const Profile = () => {
    const { isLoading, data } = useGetProfile();
    const profile = get(data, 'profile', {});
    console.log(profile)

    return (
        <>
            {isLoading ? (
                <Loader />
            ) : (
                <div>
                    <h4 className="text-white">{profile.type}</h4>
                    <dl className="row text-white">
                        <dt className="col-sm-3">Name</dt>
                        <dd className="col-sm-9">{profile.fullName}</dd>
                    </dl>
                    <dl class="row text-white">
                        <dt className="col-sm-3">Email</dt>
                        <dd className="col-sm-9">{profile.email}</dd>
                    </dl>
                    <dl class="row text-white">
                        <dt className="col-sm-3">Updated At</dt>
                        <dd className="col-sm-9">{profile.updatedAt}</dd>
                    </dl>
                </div>

            )}
        </>
    )
}
export default Profile;