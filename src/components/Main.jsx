import React from "react";

const Main = () => {
  return (
    <div>
      <div className="container mx-auto grid grid-cols-3 lg:grid-rows-2 gap-10 max-sm:p-10 pt-10 lg:h-[750px]">
        <img
          className=" col-span-2 max-lg:col-span-3 object-cover h-[320px] w-full"
          src={require("./desktop.jpg")}
          alt="desktop img"
        />
        <div className="grid-col-1 row-span-2 p-10 bg-black dark:text-white text-xl max-lg:col-span-3">
          <h1 className=" text-5xl text-yellow-400 font-extrabold ">New</h1>
          <div className=" border-b-2 border-white py-10">
            <h2>Hydrogen vs Electric cars</h2>
            <p>Will Hydrogen- fueled cars ever catch up to EVs?</p>
          </div>
          <div className=" border-b-2 border-white py-10">
            <h2>Hydrogen vs Electric cars</h2>
            <p>Will Hydrogen- fueled cars ever catch up to EVs?</p>
          </div>
          <div className=" border-b-0 border-white py-10">
            <h2>Hydrogen vs Electric cars</h2>
            <p>Will Hydrogen- fueled cars ever catch up to EVs?</p>
          </div>
        </div>
        <div className="grid-col-1 max-lg:col-span-3">
          <h1 className="text-6xl font-extrabold">
            The bright future of web 3.0?
          </h1>
        </div>
        <div className="grid-col-1  max-lg:col-span-3">
          <p className="text-lg mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
            libero. Eius blanditiis cumque quod repudiandae ullam, ut rerum quam
            esse molestiae quibusdam, dolore eligendi dolor?
          </p>
          <button className=" uppercase text-white bg-orange-600 px-8 py-4 tracking-widest text-lg font-bolder">
            Read more
          </button>
        </div>
      </div>
      <div className="container mx-auto flex items-center justify-between py-20 max-lg:flex-col gap-10 max-sm:p-10">
        <div className="card">
          <img src={require("./image-gaming-growth.jpg")} alt="" />
          <div className="space-y-5">
            <h1 className="text-4xl text-gray-400 font-extrabold ">01</h1>
            <h3 className="font-extrabold text-xl">Reviving Retro Pcs</h3>
            <p className="text-lg text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem,
              distinctio.
            </p>
          </div>
        </div>
        <div className="card">
          <img src={require("./image-retro-pcs.jpg")} alt="" />
          <div className="space-y-5">
            <h1 className="text-4xl text-gray-400 font-extrabold ">02</h1>

            <h3 className="font-extrabold text-xl">Reviving Retro Pcs</h3>
            <p className="text-lg text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem,
              distinctio.
            </p>
          </div>
        </div>
        <div className="card">
          <img src={require("./image-top-laptops.jpg")} alt="" />
          <div className="space-y-5">
            <h1 className="text-4xl text-gray-400 font-extrabold ">03</h1>
            <h3 className="font-extrabold text-xl">Reviving Retro Pcs</h3>
            <p className="text-lg text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem,
              distinctio.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
