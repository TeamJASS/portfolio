import { useSelector } from "react-redux";

const Profile = () => {
  const { user } = useSelector((state) => ({ ...state }));
  return (
    <div className="p-10 h-full flex flex-col justify-center align-middle items-center">
      <div className="w-[50%] mx-auto">
        <img
          src={user.profile.profilePicture}
          alt="profile pic"
          className="h-full w-full rounded-2xl"
        />
      </div>
    </div>
  );
};

export default Profile;
