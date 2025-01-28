import Marquee from "react-fast-marquee";

const LogoSlide = () => {
  const baseUrl = "https://pub-bc4cae30cb704275a2d82ae56b32c9b6.r2.dev/cfs/";
  const images = [
    "haringey.jpeg",
    "image-sport-resolutions.jpg",
    "octopus_investments_logo.jpeg",
  ];

  return (
    <>
      {/* Logo Slider */}
      <div className=" py-8">
        <Marquee gradient={false} speed={100}>
          {images.map((image, index) => (
            <img
              key={index}
              src={`${baseUrl}${image}`}
              alt={`Logo ${index + 1}`}
              className="mx-8 h-36 w-36 object-cover rounded-lg"
            />
          ))}
        </Marquee>
      </div>
    </>
  );
};

export default LogoSlide;
