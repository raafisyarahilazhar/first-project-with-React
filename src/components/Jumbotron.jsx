import Button from "./Button";

export default function Jumbotron() {
  return (
    <section id="jumbotron" className="section-jumbotron">
      <div className="flex flex-wrap">
        <div className="heading">
          <h1 className="text-xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-5xl dark:text-white">
            Hai, Selamat datang di profile <br /> Raafi Syarahil Azhar
          </h1>
          <Button>Kunjungi</Button>
        </div>
        <img src="./people-2.png" alt="" className=" mb-5" />
      </div>
    </section>
  );
}
