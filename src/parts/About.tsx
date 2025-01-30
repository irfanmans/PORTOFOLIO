import IconBrand from "../ui/IconBrand";
import profileImage from "../assets/images/profile-img.png";

export default function About() {
  return (
    <>
      <div className="pt-30">
        <div className="text-white/80 pb-20">
          <h1 className="text-3xl font-bold">Tentang Saya</h1>
          <p className="mt-5 text-lg">
            Hal hal penting untuk memperkenalkan diri saya dengan menarik
          </p>
        </div>
        <div>
          <div>
            <h1 className="bg-gradient-to-r from-blue-500 to-yellow-400 bg-clip-text text-transparent text-3xl font-bold">
              Hello, Saya
            </h1>
            <h1 className="text-3xl font-bold text-white">Irfan Mulya</h1>
            <p className="mt-5 text-lg text-white/80">
              Saya seorang siswa Teknik Informatika yang tertarik dalam
              pengembangan Front-End. Saya berfokus pada menciptakan pengalaman
              digital yang menarik dan selalu berusaha memberikan solusi terbaik
              dalam setiap proyek
            </p>
          </div>
          <div className="flex justify-center rounded-full overflow-hidden">
            <IconBrand src={profileImage} alt="Profile" />
          </div>
        </div>
      </div>
    </>
  );
}
