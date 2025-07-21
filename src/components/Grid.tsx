function Grid() {
  return (
    <>
      <div className="lg:grid grid-cols-2 gap-3 grid-rows-auto">
        <div className="bg-secondary mt-5 pt-3 w-full pb-5 rounded-2xl lg:order-1 row-span-2 lg:pt-10">
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
                <h1 className="text-nowrap text-[14px]">Figma</h1>
              </div>
            </div>
            <div className="flex justify-between flex-1 pt-5">
              <div>
                <h1 className="">Sytem Admin</h1>
                <p className="pt-3 text-[14px]">2024-2025</p>
              </div>
              <div className="flex-1 text-end pt-7">
                <h1 className="text-nowrap text-[14px]">Linux</h1>
              </div>
            </div>
            <div className="flex justify-between flex-1 pt-5">
              <div>
                <h1 className="">UX/UI Designer</h1>
                <p className="pt-3 text-[14px]">2022-2023</p>
              </div>
              <div className="flex-1 text-end pt-7">
                <h1 className="text-nowrap text-[14px]">Adobe dx</h1>
              </div>
            </div>
          </div>
        </div>

        <div className="grid pt-5 gap-3 lg:order-2 w-full">
          <div className="col-span-2 grid-cols-subgrid text-center rounded-xl h-20 items-center bg-gradient-to-r from-transperent from-80% to-third">
            <div className="w-full mt-1 rounded-xl lg:pt-5 bg-secondary bg-linear-to-tr from-secondary from-50% to-[rgba(230,62,33,_0.4)] h-99/100 lg:w-full md:w-full">
              Product design
            </div>
          </div>
          <div className="h-20 rounded-xl bg-secondary bg-linear-to-tr from-secondary from-70% to-[rgba(230,62,33,_0.4)] text-center pt-7">
            User Experience
          </div>
          <div className="h-20 rounded-xl bg-secondary bg-linear-to-bl from-secondary from-75% to-[rgba(230,62,33,_0.4)] text-center pt-7">
            Code develop
          </div>
        </div>
        <div className="bg-secondary rounded-2xl lg:order-4 lg:row-span-2 lg:flex flex-col justify-between">
          <div className="flex justify-between p-5 mt-5">
            <div>
              <h1 className="text-white">iOS Mobile app</h1>
              <h1 className="text-[12px] mt-2">Product develop</h1>
            </div>
            <div className="self-center">
              <div className="bg-third rounded-full g-third rounded-full size-5 flex flex-col justify-center items-center">
                <img src="/arrow.svg" alt="" className="" />
              </div>
            </div>
          </div>
          <div className="flex pt-3 pl-15 lg:pl-30 lg:pl-30 md:pl-60 lg:w-full">
            <img
              src="/iPhone Space gray.svg"
              alt=""
              className="lg:w-70/100 md:60/100"
            />
          </div>
        </div>

        <div className="bg-secondary rounded-2xl lg:order-3 lg:h-120 row-span-2">
          <div className="flex justify-between p-5 mt-5">
            <div>
              <h1 className="text-white">AI Music product</h1>
              <h1 className="text-[12px] mt-2">UX Case study</h1>
            </div>
            <div className="">
              <div className="bg-third rounded-full g-third rounded-full size-5 flex flex-col justify-center items-center">
                <img src="/arrow.svg" alt="" />
              </div>
            </div>
          </div>
          <div className="flex pt-5 justify-center pb-15 h-80">
            <img src="/g1.svg" alt="" className="lg:size-70 md:size-65" />
          </div>
        </div>

        <div className="bg-secondary rounded-2xl lg:order-last">
          <div className="flex justify-between p-5 mt-5">
            <div>
              <h1 className="text-white">AI Music product</h1>
              <h1 className="text-[12px] mt-2">UX Case study</h1>
            </div>
            <div className="">
              <div className="bg-third rounded-full g-third rounded-full size-5 flex flex-col justify-center items-center">
                <img src="/arrow.svg" alt="" />
              </div>
            </div>
          </div>
          <div className="flex pt-5 justify-center pb-15 h-80">
            <div className="pr-7">
              <img
                src="/Group 35561.svg"
                alt=""
                className="lg:size-70 md:size-65"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Grid;
