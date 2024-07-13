import BannerSlider from "@/components/banner-slider/BannerSlider";

const Banner = () => {
  return (
    <div className="min-h-screen  flex justify-around items-center ">
      <div className="w-[450px] space-y-4">
        <h1 className="text-4xl font-bold uppercase">laptops for the future</h1>
        <p>
          The new 18 inch bezeless display offering a 4K display with smart
          screen feature.
        </p>
        <div className="space-x-5">
          <button className="uppercase btn btn-outline">shop now </button>
          <button className="uppercase btn bg-black text-white hover:text-black">add to cart</button>
        </div>
      </div>
      <div>
        <BannerSlider></BannerSlider>
      </div>
    </div>
  );
};

export default Banner;
