export default function SOF() {
  return (
    <main className="bg-[#1d1a3b] w-screen grid-cols-3 justify-around font-lucida">
      <div className=" text-white text-center py-12 flex-col">
        <h1 className="font-extrabold text-5xl pb-12">Statement of Faith</h1>
        <p className="mx-auto w-3/5">
          We believe in the resurrection of Jesus and the life everlasting,
          resulting in the salvation of humanity through faith in Jesus Christ
          alone, not by our works, but by God's grace.
        </p>
      </div>
      <div className="text-center pb-8">
        <button className="px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-white hover:text-red-600 ease-linear delay-100 duration-200">
          Who We Are
        </button>
      </div>
    </main>
  );
}
