export default function About() {
  return (
    <div className="grid grid-cols-2 gap-2">
      <img src="./2.jpeg" alt="" width={500} className="pl-10 ml-10 rounded" />
      <div className="profile-description">
        <h2 className="text-xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-5xl dark:text-white mb-5">Profile Saya</h2>
        <hr />

        <div className="mt-5">
          <ol class="border-l border-neutral-300 dark:border-neutral-500">
            <li>
              <div class="flex-start flex items-center pt-3">
                <div class="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-300 dark:bg-neutral-500"></div>
                <p class="text-sm text-neutral-500 dark:text-neutral-300">Nama</p>
              </div>
              <div class="mb-6 ml-4 mt-2">
                <h4 class="mb-1.5 text-xl font-semibold">Raafi Syarahil Azhar</h4>
              </div>
            </li>
            <li>
              <div class="flex-start flex items-center pt-3">
                <div class="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-300 dark:bg-neutral-500"></div>
                <p class="text-sm text-neutral-500 dark:text-neutral-300">Tanggal Lahir</p>
              </div>
              <div class="mb-6 ml-4 mt-2">
                <h4 class="mb-1.5 text-xl font-semibold">23 Agustus 2003</h4>
              </div>
            </li>
            <li>
              <div class="flex-start flex items-center pt-3">
                <div class="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-300 dark:bg-neutral-500"></div>
                <p class="text-sm text-neutral-500 dark:text-neutral-300">Alamat</p>
              </div>
              <div class="mb-6 ml-4 mt-2">
                <h4 class="mb-1.5 text-xl font-semibold">Cihampelas, Bandung Barat</h4>
              </div>
            </li>
          </ol>
          <p className="text-lg mt-6">
            Saya adalah seorang mahasiswa yang berambisi menjadi seorang <b className="text-yellow-700">Fullstack - developer</b> dan ingin mempunyai sebuah usaha dengan impian bisa membanggakan orang tua terutama membuktikan kepada ayah
            yang sudah tiada bahwasanya saya bisa menggapai kehidupan yang telah beliau ajarkan kepada saya dan tentunya dengan <b className="text-yellow-700">ridho - Nya</b>
          </p>
        </div>
      </div>
    </div>
  );
}
