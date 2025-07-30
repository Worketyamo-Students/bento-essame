import Profile from "./Profile";

function HeroSub() {
  return (
    <div className="pt-8 lg:flex flex-row-reverse justify-between items-center lg:px-5">
      <Profile />
      <div className="pt-10 lg:flex flex-col gap-3">
        <h1 className="text-white font-bold text-2xl lg:text-4xl">
          I’m Ngongnou Yann
        </h1>
        <p className="mt-5 text-sm lg:text-xl lg:text-wrap">
          I design digital products with <br className="hidden lg:inline" />
          great experience.
        </p>
        <div className="mt-4 flex gap-2 md:justify-start mt-8">
          <div className="flex items-center gap-[.1rem]">
              <button className="bg-[#E63E21] text-xs lg:text-[16px] h-[2.5rem] text-white lg:h-[2.5rem] px-3 py-1 rounded-l-lg">
                Hire me
              </button>
            <button className="flex items-center bg-[#E63E21] justify-center text-white w-[1.8rem] h-[2.5rem] lg:h-[2.5rem] rounded-r-lg text-lg lg:text-xl">
              +
            </button>
          </div>
         <div className="flex items-center gap-[.1rem]">
            <button className="bg-[#161616] border text-xs h-[2.5rem] lg:h-[3rem] border-[#363636] px-3 py-2 rounded-l-lg">Copy Email</button>
            <button className="bg-[#161616] border border-[#363636] px-2 py-2 rounded-r-lg "><img src="public/ph_copy.svg" alt="" className="w-[1.2rem] h-[1.4rem] lg:h-[1.9rem]" /></button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSub;
