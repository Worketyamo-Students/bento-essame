import Profle from "/young-man-avatar.avif";

function Profile() {
  return (
    <div className="bg-primary border border-3 border-[#363636] size-30 rounded-full mr-2 flex items-center justify-center lg:size-45 md:size-35">
      <img
        src={Profle}
        alt="YVAN-DEV profile"
        className="rounded-full size-22 lg:size-40 md:size-30"
      />
    </div>
  );
}

export default Profile;
