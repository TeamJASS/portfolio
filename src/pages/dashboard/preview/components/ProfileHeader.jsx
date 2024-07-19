/* eslint-disable react/prop-types */

const ProfileHeader = ({ user }) => {
  return (
    <div className="bg-white shadow-md rounded-2xl p-5 text-center">
      <div className="flex justify-center mb-5">
        <div className="h-24 w-24 rounded-full bg-gray-200 flex items-center justify-center text-2xl font-bold text-white">
          {user.firstName && user.firstName.charAt(0)}
        </div>
      </div>
      <h1 className="text-3xl -font-bold mb-2">
        {user.firstName} {user.lastName}
      </h1>
      <p className="text-xl text-gray-600 mb-4">{user.professionalTitle}</p>
      <p className="text-gray-700">{user.aboutMe}</p>
    </div>
  );
};

export default ProfileHeader;
