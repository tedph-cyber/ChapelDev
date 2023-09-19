import * as styles from "@/styles/home.module.css";

export default function Home() {
  return (
    <main className="font-lucida bg-gradient-to-br from-white to-slate-500 ">
      <div className="inline-flex">
        <h6 className={styles.home1}>
          <p>We</p> 
          <p>Love</p>
          <p>You!</p>
        </h6>
        <div className="text-5xl pb-28 font-medium text-black w-3/4 ">
          <h2 className={styles.home}>
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
