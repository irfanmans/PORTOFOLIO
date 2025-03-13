import IconBrand from "../ui/IconBrand";
import profileImage from "../assets/images/profile-img.png";

export default function About() {
  return (
    <>
      <div className="pt-20 text-start">
        <div>
          <h1 className="text-3xl font-bold text-gray-500">Tentang Saya</h1>
        </div>
        <div>
          <div>
            <p className="mt-5 text-lg tracking-wide text-gray-500">
              Saya <span>Irfan Mulya</span> seorang siswa Teknik Informatika
              yang tertarik dalam pengembangan Front-End. Saya berfokus pada
              menciptakan pengalaman digital yang menarik dan selalu berusaha
              memberikan solusi terbaik dalam setiap proyek
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
