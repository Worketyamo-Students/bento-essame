function End() {
  return (
    <footer className="bg-secondary mt-5 rounded-2xl w-full h-30 pt-5 lg:flex justify-around items-center lg:bg-gradient-to-bl from-secondary from-80% to-[rgba(243,80,52,_0.8)]">
      <div className="hidden lg:inline lg:order-first">
        <p>Portfolio 2024</p>
      </div>
      <div className="flex justify-center lg:order-last">
        <div className="flex rounded-2xl w-50/100 h-5 bg-primary items-center px-2 gap-3 ml-2 md:w-40">
          <div className="rounded-2xl bg-third size-4 w-3 h-3"></div>
          <h1 className="text-[10px]">AVAILABLE FOR JOB</h1>
        </div>
      </div>
      <div className="flex justify-around gap-2 p-5 lg:orde">
        <a href="" className="hover:text-third">
          Twitter
        </a>
        <a href="" className="hover:text-third">
          Instagram
        </a>
        <a href="" className="hover:text-third">
          LinkdIn
        </a>
      </div>
    </footer>
  );
}

export default End;
