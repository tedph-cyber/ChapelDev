export default function Belief() {
    return (
      <main>
        <div className="mt-20 grid-cols-2 text-center mx-auto px-24 w-screen flex justify-around">
          <div className="relative  bg-gradient-to-b from-gray-300 to-gray-300 rounded-lg shadow-lg w-1/2 h-90 overflow-hidden md:h-96 md:w-96 lg:flex gap-10 ">
            {/* <Image src="#" alt="TeD" fill className="h-[10px] w-[10px]" /> */}
          </div>
          <div className="grid-rows-3 w-1/2 my-auto px-8">
            <h2 className="font-bold text-3xl text-left py-4">
              KolaDaisi Interdenominational Chapel
            </h2>
            <p className="py-4 pb-12 text-left">
              We believe in the resurrection of Jesus and the life everlasting,
              resulting in the salvation of humanity through faith in Jesus
              Christ alone, not by our works, but by God's grace.
            </p>
            <button className="px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-white hover:text-red-600 ease-linear delay-100 duration-200 hover:shadow-lg">
              Learn more
            </button>
          </div>
        </div>
      </main>
    );
};