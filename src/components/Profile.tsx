import Profle from "/profile-pic.png";

function Profile() {
  return (
    <div className="bg-[#2C2C2C] size-25 rounded-full flex items-center justify-center lg:size-40 md:size-35">
      <img
        src={Profle}
        alt=""
        className="rounded-full size-22 lg:size-35 md:size-30"
      />
    </div>
  );
}

export default Profile;
