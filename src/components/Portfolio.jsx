import React from "react";
import portfolio from "../assets/portfolio/portfolio.PNG";
import HearHub from "../assets/portfolio/HearHub.PNG";
import sentiment from "../assets/portfolio/sentiment.png";
import abhohawa from "../assets/portfolio/Abhohawa.PNG"
import cricket from "../assets/portfolio/cricket.PNG"

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: HearHub,
      link: "https://hear-hub-a-ecommerce-website.vercel.app/" ,
      code:"https://github.com/Tahsin-Zaman-Jilan/HearHub-A-Ecommerce-Website" ,
      name: "HearbHub-A Ecommerce website", 
    },
    {
      id: 2,
      src: cricket,
      link:"https://cricket-live-three.vercel.app/",
      code:"https://github.com/Tahsin-Zaman-Jilan/CRICKET-LIVE",
      name: "Live Cricket Score App",
    },

    {
      id: 3,
      src: portfolio,
      link:"https://jilanportfolio.netlify.app/",
      code:"https://github.com/Tahsin-Zaman-Jilan/PortFolio-Website",
      name: "Portfolio Website",
    },
    {
    id: 4,
    src: abhohawa,
    link:"https://abhohawa.vercel.app/",
    code:"https://github.com/Tahsin-Zaman-Jilan/Abhohawa",
    name: "Abhohawa: A weather app",
  },
    {
      id: 5,
      src: sentiment,
      link:"",
      code:"https://github.com/Tahsin-Zaman-Jilan/Sentiment-Analysis-",
      name: "Sentiment Analysis",
    },

  ];

  return (
    <div
    name="portfolio"
    className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
  >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src,link ,code,name}) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
            <div >{name}</div>
            
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
              <a href={link} target="_blank" rel="noreferrer" >
  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
    Live
  </button>
</a>

<a href={code}  target="_blank" rel="noreferrer" >
  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
    Code
  </button>
</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
