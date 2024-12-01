function ScrollDown() {
  return (
    <section id="sec-1" >
      <div className="container h-9 flex justify-center items-end">
        <a href="#sec-2">
          <div className="scroll-down relative h-12 w-7 border-2 border-black rounded-full cursor-pointer">
            <div className="scroll-arrow absolute left-1/2 top-[20%] h-2.5 w-2.5 border-2 border-black border-t-transparent border-l-transparent transform -translate-x-1/2 -translate-y-full rotate-45 animate-scroll-down"></div>
            <div className="scroll-arrow absolute left-1/2 top-[30%] h-2.5 w-2.5 border-2 border-black border-t-transparent border-l-transparent transform -translate-x-1/2 -translate-y-full rotate-45 animate-scroll-down-delay"></div>
          </div>
        </a>
      </div>
    </section>
  );
}

export default ScrollDown;
