export default function Offering() {
  return (
    <main className="relative z-10 bg-one-wave bg-cover bg bg-center">
        <div className="mt-20 grid-cols-2 text-center mx-auto px-24 w-screen flex justify-around">
          <div className="grid-rows-3 w-1/2 my-auto px-8 font-impact">
            <h2 className="font-bold text-3xl text-left py-4">
              It is more blessed to give than to receive.
            </h2>
            <p className="py-4 pb-12 text-left">
              Through the financial support of our partners, we have been able
              to spread the good news through unique methodology prompted by the
              kingdom requirements necessary to fulfill our vision.
            </p>
            <button className="px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-white hover:text-red-600 ease-linear delay-100 duration-200">
              Give Now
            </button>
          </div>
          <div className="relative  bg-gradient-to-b from-gray-300 to-gray-300 rounded-lg shadow-lg px-72 py-72 w-1/2 h-90 overflow-hidden md:h-96 md:w-96 ">
            {/* <Image src="#" alt="TeD" fill className="h-[10px] w-[10px]" /> */}
          </div>
      </div>
    </main>
  );
};
