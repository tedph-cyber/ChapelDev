export default function Footer() {
  return (
    <section className="bg-[#1d1a3b] py-12 flex justify-around">
      <div className="p-4 px-8 text-white">
        <h1 className="text-3xl ">Contact Us</h1>
        <p>+234 *** *** ****</p>
        <p>name@gmail.com</p>
      </div>
      <div className="px-8 p-4">
        <form className="flex-cols">
          <div>
            <input
              className="border-2 border-gray-500 mx-auto flex p-3 rounded-md w-3/4"
              name="name"
              type="text"
              placeholder="Enter Full name"
            />
          </div>
          <div>
            <input
              className="border-2 border-gray-500 mx-auto flex p-3 rounded-md w-3/4"
              name="email"
              type="email"
              placeholder="Enter email address"
            />
          </div>
          <div>
            <button
              type="submit"
              className="px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-white hover:text-red-600 ease-linear delay-100 duration-200 hover:shadow-lg"
            ></button>
          </div>
        </form>
      </div>
    </section>
  );
}
