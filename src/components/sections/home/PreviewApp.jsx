import Image from "../../ui/Image";
import AppVideo from "../../../assets/images/home/app.png";
import WorldBg from "../../../assets/images/home/world.png";

export default function PreviewApp() {
  return (
    <section className="relative z-20 mb-32 container mx-auto">
      <Image
        src={WorldBg}
        alt=""
        className="absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-70 w-full"
      />

      <div className="relative border border-border/60 rounded-2xl overflow-hidden h-[85vh]">
        <Image
          src={AppVideo}
          alt="article hub app preview"
          className="w-full h-full object-cover absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
        />
      </div>
    </section>
  );
}
