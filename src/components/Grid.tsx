function Grid() {
  return (
    <>
      <div className="lg:grid grid-cols-2 gap-3 grid-rows-auto">
        <div className="bg-secondary mt-5 pt-3 w-full border-3 border-[#363636] pb-5 rounded-2xl lg:order-1 row-span-2 lg:h-120 lg:pt-10">
          <div className="flex rounded-2xl w-50/100 h-5 bg-secondary items-center px-4 gap-3">
            <div className="rounded-2xl bg-last size-4 w-3 h-3"></div>
            <h1 className="text-base">Recent Work</h1>
          </div>
          <div className="px-4 pt-8 w-full">
            <div className="flex justify-between flex-1">
              <div>
                <h1 className="text-third">Front-end Developer</h1>
                <p className="pt-3 text-[14px]">2024-2025</p>
              </div>
              <div className="flex-1 text-end pt-7">
                <h1 className="text-nowrap text-[14px]">
                  HTML CSS tailwindcss
                </h1>
              </div>
            </div>
            <div className="flex justify-between flex-1 pt-5">
              <div>
                <h1 className="">UX/UI Designer</h1>
                <p className="pt-3 text-[14px]">2024-2025</p>
              </div>
              <div className="flex-1 text-end pt-7">
                <h1 className="text-nowrap text-[16px]">Figma</h1>
              </div>
            </div>
            <div className="flex justify-between flex-1 pt-5">
              <div>
                <h1 className="">Product Designer</h1>
                <p className="pt-3 text-[14px]">2024-2025</p>
              </div>
              <div className="flex-1 text-end pt-7">
                <h1 className="text-nowrap text-[16px]">Canvas</h1>
              </div>
            </div>
            <div className="flex justify-between flex-1 pt-5">
              <div>
                <h1 className="">UX/UI Designer</h1>
                <p className="pt-3 text-[14px]">2022-2023</p>
              </div>
              <div className="flex-1 text-end pt-7">
                <h1 className="text-nowrap text-[16px]">Canvas</h1>
              </div>
            </div>
          </div>
        </div>

        <div className="h-[15rem] lg:h-[20rem] lg:mt-5 lg:flex-2 flex my-5 lg:order-2 flex-col gap-3 text-white">
          <div className="flex-1  bg-[#1B1B1B] border border-[#363636] bg-gradient-to-tr from-[#262626]  from-75% to-[#E63E21] p-[1px] lg:p-[2px] rounded-[7.7px] lg:rounded-[14px]">
            <div className="h-full flex items-center justify-center bg-gradient-to-tr from-[#1B1B1B] from-45% via-section via-bouton to-[#33130E] rounded-[7.7px] lg:rounded-[14px] lg:text-2xl text-gris">
              Product design
            </div>
          </div>
          <div className="flex-1 flex gap-3">
            <div className="flex-1 h-full bg-[#1B1B1B] border border-[#363636] bg-gradient-to-tr from-[#262626] from-70% to-[#E63E21] p-[1px] lg:p-[2px] rounded-[7.7px] lg:rounded-[14px]">
              <div className="h-full flex items-center justify-center bg-gradient-to-tr from-[#1B1B1B] from-55%  to-[#33130E] rounded-[7.7px] lg:rounded-[14px] lg:text-2xl text-gris">
                User Experience
              </div>
            </div>
            <div className="flex-1 h-full bg-[#1B1B1B] border border-[#363636] bg-gradient-to-tr from-[#E63E21]  to-[#262626] to-30% p-[1px] lg:p-[2px] rounded-[7.7px] lg:rounded-[14px]">
              <div className="flex-1 h-full flex items-center justify-center bg-gradient-to-tr from-[#33130E] to-[#1B1B1B] to-40% rounded-[7.7px] lg:rounded-[14px] lg:text-2xl text-gris">
                NoCode develop
              </div>
            </div>
          </div>
        </div>
        <div className="bg-secondary  border-3 border-[#363636] rounded-2xl lg:order-4 lg:row-span-2 lg:h-160 lg:flex flex-col justify-between">
          <div className="flex justify-between p-5 mt-5">
            <div>
              <h1 className="text-white text-[18px]">iOS Mobile app</h1>
              <h1 className="text-[14px] mt-2">Product develop</h1>
            </div>
            <div className="self-center">
              <div className="lg:w-[4rem] lg:h-[4rem] rounded-full flex items-center justify-center bg-bouton">
                <img
                  className="w-[4rem] lg:w-full h-[4rem] lg:h-full"
                  src="public/arrow.svg"
                  alt="arrow"
                />
              </div>
            </div>
          </div>
          <div className="flex pt-3 pl-7 lg:pl-10 md:pl-30 lg:h-60/100 lg:w-90/100">
            <div className="bg-[url(public/CANAL2.png)] bg-center bg-no-repeat bg-cover flex absolute justify-center md:w-[13rem] lg:w-[14rem] md:h-[21.1rem] lg:h-[22rem] w-[13rem] h-[21rem] rounded-t-[2rem] lg:mt-4 md:ml-4.5 lg:ml-14 ml-4.5 md:mt-4 mt-4"></div>
            <img
              src="/iPhone Space gray.svg"
              alt=""
              className="lg:w-[40rem] justify-center items-center relative md:60/100"
            />
          </div>
        </div>

        <div className="bg-secondary rounded-2xl border-3 border-[#363636] lg:order-3 lg:h-90 row-span-2">
          <div className="flex justify-between p-5 mt-5">
            <div>
              <h1 className="text-white">AI Music product</h1>
              <h1 className="text-[12px] mt-2">UX Case study</h1>
            </div>
            <div className="lg:w-[4rem] lg:h-[4rem] rounded-full flex items-center justify-center bg-bouton">
              <img
                className="w-[4rem] lg:w-full h-[4rem] lg:h-full"
                src="public/arrow.svg"
                alt="arrow"
              />
            </div>
          </div>
          <div className="flex pt-5 justify-center pb-15 h-80">
            <img src="/g1.svg" alt="" className="lg:size-50 md:size-65" />
          </div>
        </div>

        <div className="bg-secondary border-3 border-[#363636] rounded-2xl lg:h-90 lg:order-last">
          <div className="flex justify-between p-5 mt-5">
            <div>
              <h1 className="text-white">AI Music product</h1>
              <h1 className="text-[12px] mt-2">UX Case study</h1>
            </div>
            <div className="">
              <div className="lg:w-[4rem] lg:h-[4rem] rounded-full flex items-center justify-center bg-bouton">
                <img
                  className="w-[4rem] lg:w-full h-[4rem] lg:h-full"
                  src="public/arrow.svg"
                  alt="arrow"
                />
              </div>
            </div>
          </div>
          <div className="flex pt-5 justify-center pb-15 h-80">
            <div className="pr-7">
              <img
                src="/Group 35561.svg"
                alt=""
                className="lg:size-50 md:size-65"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Grid;
