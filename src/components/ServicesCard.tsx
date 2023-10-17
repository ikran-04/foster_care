import React from "react";

interface ServicesCardProps {
  title: string;
  classes?: string;
  mode: string;
}

export const ServicesCard: React.FC<ServicesCardProps> = ({
  classes,
  title,
  mode,
}) => {
  return (
    <div
      className={`md:w-1/2 h-96 px-5 pt-5 rounded-xl ${
        mode != "dark" ? classes + " bg-[#F9F9F9]" : " bg-[#7BB468]"
      }`}
    >
      <div
        className={`flex flex-col items-center text-center ${
          mode == "dark" ? "text-white" : ""
        } space-y-5 px-6`}
      >
        <img
          src={`${mode == "dark" ? "/icons/icon.png" : "/icons/icon2.png"}`}
          alt=""
          className="w-24 h-24 md:w-36 md:h-36 text-red"
        />
        <h1 className="text-base md:text-2xl">{title}</h1>
        <p className="text-xs md:text-base font-light">
          Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis. ac aliquet
          odio mattis.
        </p>
      </div>
    </div>
  );
};
