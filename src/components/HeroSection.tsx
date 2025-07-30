import HeroSub from "./HeroSub";

function HeroSection() {
  return (
    <>
      <div className="w-full bg-secondary border-3 border-[#363636] mt-5 rounded-xl p-5 lg:pb-[60px]">
        <div className="flex flex-col gap-3 lg:flex-row-reverse lg:justify-between lg:px-5">
          <div className="flex rounded-full w-45 border-2 border-[#363636] h-5 bg-primary items-center px-6 py-5 gap-3 ml-2 lg:w-auto lg:justify-center md:w-auto">
            <div className="rounded-2xl bg-third size-4 w-3 h-3"></div>
            <h1 className="text-[10px] lg:text-[12px]">AVAILABLE FOR JOB</h1>
          </div>
          <div>
            <h1 className="text-3xl">UI/UX Designer</h1>
          </div>
        </div>
        <HeroSub />
      </div>
    </>
  );
}

export default HeroSection;
