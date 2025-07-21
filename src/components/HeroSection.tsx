import HeroSub from "./HeroSub";

function HeroSection() {
  return (
    <>
      <div className="w-full bg-secondary mt-5 rounded-xl p-5 lg:pb-[60px]">
        <div className="flex flex-col gap-3 lg:flex-row-reverse lg:justify-between lg:px-5">
          <div className="flex rounded-2xl w-50/100 h-5 bg-primary items-center px-2 gap-3 ml-2 lg:w-15/100 lg:justify-center md:w-23/100">
            <div className="rounded-2xl bg-third size-4 w-3 h-3"></div>
            <h1 className="text-[10px] lg:text-[12px]">AVAILABLE FOR JOB</h1>
          </div>
          <div>
            <h1>MERN developer, UI/UX Designer</h1>
          </div>
        </div>
        <HeroSub />
      </div>
    </>
  );
}

export default HeroSection;
