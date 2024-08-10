import { Carousel, Typography, Button } from "@material-tailwind/react";

export default function CarouselDefault() {
  return (
    <section className="text-gray-800 body-font  m-auto  w-[70%] h-[70%] bg-blue-50 ">
      <div className="container mx-auto flex px-5 py-24 md:flex-row md:justify-center flex-col items-center overflow-hidden relative">
        <Carousel className="rounded-xl">
          <div className="relative  w-[100%] h-[70%] m-auto">
            <img
              src="https://images.pexels.com/photos/9393922/pexels-photo-9393922.jpeg"
              alt="image 1"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/65">
              <div className="w-3/4 text-center md:w-2/4">
                <Typography
                  variant="h1"
                  color="white"
                  className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                >
                  Mens Wear
                </Typography>
                <Typography
                  variant="lead"
                  color="white"
                  className="mb-12 opacity-80"
                >
                  Trend-setting icon for fasion icons
                </Typography>
              </div>
            </div>
          </div>
          <div className="relative h-full w-full">
            <img
              src="data:image/jpeg;base64,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"
              alt="image 2"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 grid h-full w-full items-center bg-black/65">
              <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
                <Typography
                  variant="h1"
                  color="black"
                  className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                >
                  Connect with latest fashion trends
                </Typography>
                <Typography
                  variant="lead"
                  color="black"
                  className="mb-12 opacity-40 "
                >
                  A Spectacular assortment ofminimal yetalluring styles
                </Typography>
              </div>
            </div>
          </div>
          <div className="relative h-full w-full">
            <img
              src="data:image/jpeg;base64,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"
              alt="image 3"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 grid h-full w-full items-end bg-black/65">
              <div className="w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32">
                <Typography
                  variant="h1"
                  color="black"
                  className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                >
                  Hidden Gems from the Diffrents brands
                </Typography>
                <Typography
                  variant="lead"
                  color="black"
                  className="mb-12 opacity-80"
                >
                  Choose your fashion styles
                </Typography>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    </section>
  );
}

// import { useState } from "react";
// import {
//   BsFillArrowRightCircleFill,
//   BsFillArrowLeftCircleFill,
// } from "react-icons/bs";
// export default function CarouselDefault() {
//   let slides = [
//     "https://i.pinimg.com/originals/51/82/ac/5182ac536727d576c78a9320ac62de30.jpg",
//     "https://images.pexels.com/photos/9393922/pexels-photo-9393922.jpeg",
//     "https://wallpapercave.com/wp/wp3386769.jpg",
//     "https://wallpaperaccess.com/full/809523.jpg",
//     "https://getwallpapers.com/wallpaper/full/5/c/0/606489.jpg",
//   ];
//   let [current, setCurrent] = useState(0);

//   let previousSlide = () => {
//     if (current === 0) setCurrent(slides.length - 1);
//     else setCurrent(current - 1);
//   };

//   let nextSlide = () => {
//     if (current === slides.length - 1) setCurrent(0);
//     else setCurrent(current + 1);
//   };
//   return (
//     <div className="w-[60%] h-[70%] m-auto pt-11">
//       <div className="overflow-hidden relative">
//         <div
//           className={`flex transition ease-out duration-40`}
//           style={{
//             transform: `translateX(-${current * 100}%)`,
//           }}
//         >
//           {slides.map((s) => {
//             return <img src={s} />;
//           })}
//         </div>

//         <div className="absolute top-0 h-full w-full justify-between items-center flex text-white px-10 text-3xl">
//           <button onClick={previousSlide}>
//             <BsFillArrowLeftCircleFill />
//           </button>
//           <button onClick={nextSlide}>
//             <BsFillArrowRightCircleFill />
//           </button>
//         </div>

//         <div className="absolute bottom-0 py-4 flex justify-center gap-3 w-full">
//           {slides.map((s, i) => {
//             return (
//               <div
//                 onClick={() => {
//                   setCurrent(i);
//                 }}
//                 key={"circle" + i}
//                 className={`rounded-full w-5 h-5 cursor-pointer  ${
//                   i == current ? "bg-white" : "bg-gray-500"
//                 }`}
//               ></div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// }
