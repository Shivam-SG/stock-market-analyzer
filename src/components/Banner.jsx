import React from "react";
import TradingViewWidget from "./TradingViewWidget";
import Modal from "./Modal";
import useAuth from "../hooks/useAuth";
import Profile from "./Profile";

const Banner = () => {
  const { user } = useAuth();
  return (
    <div className="text-white max-w-screen-2xl container mx-auto xl:px-24 px-4 bg-gradient-to-r from[#FAFAFA] from-0% to-[#FCFCFC] to-100%">
      <div className="py-14 flex flex-col md:flex-row justify-between items-center gap-8 pt-[2rem]">
        <div className="md:w1/3">
          <h2 className="md:text-5xl text-4xl font-bold md:leading-snug leading-sung text-shadow-md">
            Your one-stop solution for tracking stock market data.
          </h2>
          <p className="text-xl text-[#4A4A4A] mt-10">
            Stay informed with the latest market news and analysis.
            <br />
            Get the latest stock market data in real-time.
          </p>
          <div className="mb-4 mt-4">
            {user ? (
              <Profile user={user} />
            ) : (
              <a
                onClick={() =>
                  document.getElementById("my_modal_5").showModal()
                }
                className="btn bg-blue border-none rounded-full px-6 text-white flex items-center"
              >
                Let's Go
              </a>
            )}

            <Modal />
          </div>
          <TradingViewWidget />
        </div>
        <div className="md:w-1/1">
          <img className="w-50 h-50" src="/Static_11.png" alt="" />
        </div>
        <div className="topblur absolute w-1 h-1 min-w-[150px] min-h-[150px] top-[28px] left-10vw border-[3px] bg-blue filter blur-[100px] z-0" />
        <div className="bottomblur absolute w-1 h-1 min-w-[150px] min-h-[150px] bottom-[-28px] right-[10vw] border-[6px] bg-blue filter blur-[100px] z-0" />
      </div>

      <div className="py-14 flex flex-col md:flex-row justify-between items-center gap-8 pt-[2rem]">
        <div className="md:w-1/2">
          <h2 className="md:text-4xl text-3xl font-bold md:leading-snug leading-sung text-shadow-md">
            Trade Globally, Succeed Locally: Join Our Widely-Used Trading
            Platform Today
          </h2>
          <p className="text-xl text-[#4A4A4A] mt-10">
            Our plateform reaches people all over the world.
            <br />
            hereby we are trusted as the best platform for trading.
          </p>

          <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-[3rem]">
            <div className="md:w-1/3">
              <h2 className="md:text-3xl folt-bold md:leading-sung leading-sung tex">
                16M+
              </h2>
              <p className="text-[1rem] text-[#4A4A4A] mt-5">
                People who have joined
              </p>
            </div>

            <div className="md:w-1/3">
              <h2 className="md:text-3xl folt-bold md:leading-sung leading-sung tex">
                105+
              </h2>
              <p className="text-[1rem] text-[#4A4A4A] mt-5">
                Famous people playing
              </p>
            </div>

            <div className="md:w-1/3">
              <h2 className="md:text-3xl folt-bold md:leading-sung leading-sung tex">
                80
              </h2>
              <p className="text-[1rem] text-[#4A4A4A] mt-5">
                corporation with big companies
              </p>
            </div>
          </div>
        </div>
        <div className="md:w-1/2">
          <img
            src="m.jpg"
            alt="Your Image"
            className="bg-transparent"
            style={{ background: "none" }}
          />
        </div>
        <div className="topblur absolute w-1 h-1 min-w-[150px] min-h-[150px] top-[50rem] left-10vw border-[3px] bg-blue filter blur-[100px] z-0" />
        <div className="bottomblur absolute w-1 h-1 min-w-[150px] min-h-[150px] bottom-[-40rem] right-[10vw] border-[6px] bg-blue filter blur-[100px] z-0" />
      </div>

      <div className="mt-10">
        <div className="grid justify-center">
          <h2 className="md:text-4xl text-3xl font-bold md:leading-sung  leading-sung text-shadow-md">
            Streamline Your Trading Process with
          </h2>
          <h3 className="flex justify-center md:text-3xl text-3xl font-bold md:leading-4 leading-4 text-shadow-md">
            <br />
            Automated Trading Features
          </h3>
          <p className="flex justify-center text-xl text-[#4A4A4A] mt-10">
            We always provide our best quality for users
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-[3rem]">
          <div className="grid justify-center p-5 items-center md:w-1/3 border border-solid border-gray-500 ">
            <div className="flex justify-center">
              <img
                className="rounded-full h-16 w-16 border border-solid border-gray-500"
                src="i.jpg"
              />
            </div>
            <div className="flex justify-center pt-5">
              <h2 className="md:text-2xl folt-bold md:leading-sung leading-sung">
                Advanced Charting
              </h2>
            </div>
            <div className="flex justify-center">
              <p className="text-[1rem] text-[#4A4A4A] mt-5">
                Plenty of opportunities for successful trading Find the option
                of online
              </p>
            </div>
          </div>

          <div className="grid justify-center p-5 items-center md:w-1/3 border border-solid border-gray-500 ">
            <div className="flex justify-center">
              <img
                className="rounded-full h-16 w-16 border border-solid border-gray-500"
                src="mo.jpg"
              />
            </div>
            <div className="flex justify-center pt-5">
              <h2 className="md:text-2xl folt-bold md:leading-sung leading-sung">
                Mobile and Web Platforms
              </h2>
            </div>
            <div className="flex justify-center">
              <p className="text-[1rem] text-[#4A4A4A] mt-5">
                Plenty of opportunities for successful trading Find the option
                of online
              </p>
            </div>
          </div>

          <div className="grid justify-center p-5 items-center md:w-1/3 border border-solid border-gray-500 ">
            <div className="flex justify-center">
              <img
                className="rounded-full h-16 w-16 border border-solid border-gray-500"
                src="c.jpg"
              />
            </div>
            <div className="flex justify-center pt-5">
              <h2 className="md:text-2xl folt-bold md:leading-sung leading-sung">
                24/7 Support
              </h2>
            </div>
            <div className="flex justify-center">
              <p className="text-[1rem] text-[#4A4A4A] mt-5">
                Plenty of opportunities for successful trading Find the option
                of online
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-[5rem] pb-[5rem]">
        <div className="md:w-1/3">
          <h2 className="md:text-4xl text-3xl font-bold md:leading-snug leading-sung text-shadow-md">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-[#4A4A4A] mt-10">
            Have a question that is not answered? You can contact us at
            sma@gmail.com
          </p>
        </div>
        <div className="md:w-2/3">
          <div className="collapse collapse-arrow bg-black border border-solid border-gray-500">
            <input type="radio" name="my-accordion-2" defaultChecked />
            <div className="collapse-title text-xl font-medium">
              What is Trading?
            </div>
            <div className="collapse-content">
              <p>
                Trading is the buying and selling of securities, such as stocks,
                bonds, currencies, commodities, and derivatives, with the goal
                of making a profit.
              </p>
            </div>
          </div>

          <div className="collapse collapse-arrow bg-black border border-solid border-gray-500">
            <input type="radio" name="my-accordion-2" defaultChecked />
            <div className="collapse-title text-xl font-medium">
              What is a stock market analyzer?
            </div>
            <div className="collapse-content">
              <p>
                A stock market analyzer is a tool or platform that provides
                users with the ability to analyze and interpret various aspects
                of the stock market. It includes features such as real-time
                market data, technical analysis tools, financial indicators, and
                other functionalities to help users make informed investment
                decisions.
              </p>
            </div>
          </div>

          <div className="collapse collapse-arrow bg-black border border-solid border-gray-500">
            <input type="radio" name="my-accordion-2" defaultChecked />
            <div className="collapse-title text-xl font-medium">
              Is it suitable for beginners in the stock market?
            </div>
            <div className="collapse-content">
              <p>
                Yes, many stock market analyzers are designed to be
                user-friendly and cater to investors with varying levels of
                experience. They often provide educational resources, intuitive
                interfaces, and guidance to help beginners understand market
                dynamics and make sound investment decisions.
              </p>
            </div>
          </div>

          <div className="collapse collapse-arrow bg-black border border-solid border-gray-500">
            <input type="radio" name="my-accordion-2" defaultChecked />
            <div className="collapse-title text-xl font-medium">
              Can I use a stock market analyzer for day trading?
            </div>
            <div className="collapse-content">
              <p>
                Yes, a stock market analyzer can be valuable for day traders. It
                offers real-time data, technical analysis tools, and charting
                capabilities that are essential for making quick decisions in
                the fast-paced environment of day trading.
              </p>
            </div>
          </div>

          <div className="collapse collapse-arrow bg-black border border-solid border-gray-500">
            <input type="radio" name="my-accordion-2" defaultChecked />
            <div className="collapse-title text-xl font-medium">
              Is real-time news integration available in stock market analyzers?
            </div>
            <div className="collapse-content">
              <p>
                Yes, real-time news integration is a common feature in stock
                market analyzers. It provides users with the latest financial
                news, economic updates, and corporate announcements that may
                impact stock prices and market trends.
              </p>
            </div>
          </div>

          <div className="collapse collapse-arrow bg-black border border-solid border-gray-500">
            <input type="radio" name="my-accordion-2" defaultChecked />
            <div className="collapse-title text-xl font-medium">
              Can I access a stock market analyzer on mobile devices?
            </div>
            <div className="collapse-content">
              <p>
                Yes, many stock market analyzers offer mobile applications or
                responsive web interfaces, allowing users to access the platform
                on smartphones and tablets. This ensures flexibility and
                convenience for users who want to monitor the market on the go.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
