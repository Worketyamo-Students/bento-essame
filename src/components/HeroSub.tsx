import Profile from "./Profile";

function HeroSub() {
  return (
    <div className="pt-8 lg:flex flex-row-reverse justify-between items-center lg:px-5">
      <Profile />
      <div className="pt-10 lg:flex flex-col gap-3">
        <h1 className="text-white font-bold text-2xl lg:text-4xl">
          I’m Setane Essame
        </h1>
        <p className="mt-5 text-sm lg:text-xl lg:text-wrap">
          I design digital products with <br className="hidden lg:inline" />
          great experience.
        </p>
        <div className="flex gap-2 items-center lg:gap-5">
          <div className="flex gap-1 pt-4 lg:w-30">
            <div className="bg-third rounded-s-sm text-[10px] lg:w-80/100 lg:h-10 flex justify-center items-center h-8 w-15 shadow shadow-[0px_0px_25px_rgba(243,80,52,_0.8)]">
              <h1 className="font-bold text-white text-xm lg:text-base">
                Hire me
              </h1>
            </div>
            <div className="bg-third rounded-r-sm lg:text-base h-8 w-8 text-xm text-white font-bold flex justify-center items-center shadow shadow-third shadow shadow-[0px_0px_25px_rgba(243,80,52,_0.8)] lg:w-20/100 lg:h-10">
              +
            </div>
          </div>
          <div className="flex gap-1 pt-4 lg:w-30">
            <div className="bg-primary rounded-s-sm h-8 w-15 flex items-center justify-center lg:w-80/100 lg:h-10">
              <h1 className="ont-bold text-white text-[10px] lg:text-base">
                Copy Email
              </h1>
            </div>
            <div className="bg-primary rounded-r-sm h-8 w-8 flex items-center justify-center lg:w-20/100 lg:h-10">
              <img src="./assets/img/copie.svg" alt="" className="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSub;
