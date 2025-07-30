import Dote from "/doted.svg";

function Icon() {
  return (
    <div className="bg-secondary flex justify-center border-3 border-[#363636] items-center rounded-full mt-2 size-24 w-32 lg:size-35">
      <img src={Dote} alt="" className="size-12 lg:size-25" />
    </div>
  );
}

export default Icon;
