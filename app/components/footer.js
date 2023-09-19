export default function Footer() {
  return (
    <section className="bg-[#1d1a3b] py-8 flex justify-evenly">
      <div className="p-2  px-8 w-1/2 text-white">
        <h1 className="text-3xl ">Contact Us</h1>
        <p>+234 *** *** ****</p>
        <p>name@gmail.com</p>
      </div>
      <div className="px-2 p-2 grid-flow-row w-1/2">
        <div className=" flex pb-2">
          <h1 className="mx-auto text-2xl leading-6 text-white">
            Join our mailing list
          </h1>
        </div>
        <form className="w-full">
          <div className="py-1 ">
            <input
              className="border-2 border-gray-500 mx-auto flex p-2 w-3/4 rounded-lg bg-slate-400 placeholder:text-white"
              name="name"
              type="text"
              placeholder="Enter Full name"
            />
          </div>
          <div className="py-1">
            <input
              className="border-2 border-gray-500 mx-auto flex p-2 w-3/4 rounded-lg bg-slate-400 placeholder:text-white"
              name="email"
              type="email"
              placeholder="Enter email address"
            />
          </div>
          <div className="mx-auto py-1 flex items-center">
            <button
              type="submit"
              className="px-4 py-2 flex mx-auto rounded-lg bg-red-600 text-white text-2xl hover:bg-white hover:text-red-600 ease-linear delay-100 duration-200 hover:shadow-lg"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
