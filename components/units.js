import WWA from "./wwabutton";

export default function Units() {
  return (
    <main className="w-screen justify-around font-monospace bg-two-waves bg-cover bg-no-repeat bg-center">
      <div className="">
        <div className=" text-center flex-col">
          <div className="py-6">
            <h1 className="font-extrabold text-5xl py-6">Serving Units</h1>
            <p className="mx-auto w-3/4">
              Serving in church offers a fulfilling path for personal growth and
              spiritual enrichment, providing various ways to get involved and
              make valued contributions to your faith community
            </p>
          </div>
          <div className="py-12 px-8 relative bg-white rounded-2xl shadow-2xl mx-auto w-3/4 overflow-hidden ">
            <div className="py-4">
              <WWA />
            </div>
            <div className="flex justify-around py-4">
              <WWA />
              <WWA />
            </div>
            <div className="mx-auto flex justify-around py-4">
              <WWA />
              <WWA />
              <WWA />
            </div>
            <div className="flex justify-around py-4">
              <WWA />
              <WWA />
            </div>
            <WWA />
          </div>
        </div>
        <div className="">
          <div className=" text-center py-12 flex-col">
            <h1 className="font-extrabold text-5xl py-4">Be Born Again</h1>
            <h3 className="font-medium text-2xl py-4">Say this prayer</h3>
            <p className="mx-auto w-3/4">
              "Dear Lord Jesus, I come to you just as I am, recognizing my need
              for salvation and forgiveness. I acknoledge that i am a sinner in
              need of your grace and mercy. I believe in you and ask for your
              forgiveness. Please come into my heart and be Savior. Amen"
            </p>
          </div>
        </div>
        <div className="">
          {/* form */}
          <form className="mx-auto flex w-full ">
            <div className="flex-1 mx-auto text-gray-700 px-20">
              <div className="mt-4 ">
                {/* name input field */}
                <div className="pb-2 ">
                  <input
                    className="border-2 border-gray-500 mx-auto flex p-4 rounded-md w-3/4"
                    type="text"
                    name="name"
                    placeholder="Enter Full Name!"
                  />
                </div>
                <div className="mt-4 flex justify-between w-3/4 mx-auto ">
                  {/* Email input field */}
                  <div className="pb-2 pr-2 w-1/2">
                    <input
                      className="border-2 border-gray-500 p-4 rounded-md w-full "
                      type="email"
                      name="email"
                      placeholder="Enter Email"
                    />
                  </div>
                  <div className="pb-2 pl-2 w-1/2">
                    <input
                      className="border-2  border-gray-500 p-4 rounded-md w-full"
                      type="tel"
                      name="number"
                      placeholder="Enter Phone Number"
                    />
                  </div>
                </div>
                <div className="flex pb-6">
                  <button
                    type="submit"
                    className="bg-red-500 text-sm mx-auto text-white p-4 mt-4 rounded-lg w-3/4  hover:shadow-lg hover:bg-white hover:text-red-600 ease-linear delay-100 duration-200"
                  >
                    Submit!
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
