import Marquee from "react-fast-marquee";

const LogoSlide = () => {
  const baseUrl = "https://pub-bc4cae30cb704275a2d82ae56b32c9b6.r2.dev/cfs/";
  const images = [
    "HM_Prison_Service_logo.jpg",
    "haringey.jpeg",
    "image-sport-resolutions.jpg",
    "octopus_investments_logo.jpeg",
  ];

  return (
    <>
      {/* Logo Slider */}
      <div className="py-4 px-4 md:px-24 lg:px-96 mx-auto">
        <Marquee gradient={false} speed={100}>
          {images.map((image, index) => (
            <img
              key={index}
              src={`${baseUrl}${image}`}
              alt={`Logo ${index + 1}`}
              className="mx-8 h-36 w-48 object-cover rounded-lg grayscale"
            />
          ))}
        </Marquee>
      </div>
    </>
  );
};

export default LogoSlide;
