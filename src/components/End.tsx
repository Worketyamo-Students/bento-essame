function End() {
  return (
    <footer className="lg:bg-gradient-to-tr from-[#E63E21]  to-[#262626] to-30% lg:p-[1px]  lg:w-full lg:mx-0 mt-6 mb-10 rounded-[9px] lg:rounded-[14px]">
            <div className="h-full bg-section lg:bg-gradient-to-tr bg-[#1B1B1B] border-[#363636] lg:from-[#33130E] lg:to-[#1B1B1B] to-40% py-8 lg:py-10 lg:px-8 rounded-[9px] lg:rounded-[14px] border-[1.3px] border-bord flex flex-col justify-center items-center gap-8 lg:flex-row-reverse lg:justify-between">
                <div className="flex px-2 py-1 gap-1 w-[125px] lg:w-[180px] border border-[#262626] rounded-[14px] items-center lg:justify-center lg:gap-2">
                    <div className="w-[.7rem] lg:w-[9px] h-[.7rem] lg:h-[9px] bg-[#E63E21] rounded-full"></div>
                    <span className="text-[9px] lg:text-[13px] text-gris">AVAILABLE FOR JOB</span>
                </div>
                
                <div className="flex gap-8 lg:gap-6 text-white lg:text-xl">
                    <a className="text-[#F35034]" href="#">Twitter</a>
                    <a href="#">Instagram</a>
                    <a href="#">LinkdIn</a>
                </div>
                <div className="text-gris lg:text-2xl">Portfolio 2024</div>
            </div>    
        </footer>
  );
}

export default End;
