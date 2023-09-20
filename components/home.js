import "@/styles/home.module.css"

export default function Home() {
  return (
    <main className="bg-gradient-to-br from-rose-100 to-teal-100">
      <div className="inline-flex mt-[35%] mb-8">
        <h6 className="pt-14 pl-12 pr-2 leading-5">
          <p>We</p> 
          <p>Love</p>
          <p>You!</p>
        </h6>
        <div className="text-5xl pb-28 font-medium text-black w-3/4 ">
          <h2 className="text-5xl ">
            Welcome to KolaDaisi Interdenominational Chapel
          </h2>
          <h4 className="text-2xl font-thin w-3/4">
            At KDUiC, we believe that we are all called to spread the gospel to
            the ends of the earth.
          </h4>
        </div>
      </div>
    </main>
  );
}
