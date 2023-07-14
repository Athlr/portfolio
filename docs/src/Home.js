import { useEffect } from "react";
import { Carousel } from "flowbite-react";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import Lottie from "lottie-react";
import Contact from "./Lottie/Contact.json";
import HappyMail from "./Lottie/Happy-Mail.json";

export default function Home() {
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);
  return (
    <>
      <div className="overflow-x-hidden w-full">
        <div className="pt-10">
          <div className="flex flex-col items-center md:flex-row md:justify-center">
            <div className="w-1/2 md:w-1/3 text-center mt-12 md:mr-10 xl:mr-0">
              <div className="text-md">Hello, I'm</div>
              <div className="text-6xl">Aaron Tran</div>
              <div className="text-xl">
                <TypeAnimation
                  sequence={[
                    "Software Engineer",
                    2500,
                    "Fullstack Developer",
                    2500,
                  ]}
                  wrapper="span"
                  speed={20}
                  repeat={Infinity}
                />
              </div>
              <br></br>
              <div className="text-left text-md">
                Helping others was the core reason for my journey into medicine.
                Although my desire to make a positive impact remains at heart, I
                now want to channel that passion through a different lens -
                technology. Whether it's building user-friendly applications, or
                optimizing existing technologies, I hope to make an impact on
                the lives of those around me through code!
              </div>
            </div>
            <div className="flex w-1/2 md:w-1/3 lg:w-1/4 h-1/3 justify-center items-center mt-12 aspect-ratio-auto">
              <img
                src="http://athlr.github.io/portfolio/static/img/aaron-2.JPG"
                className="rounded-full h-[20rem]"
              />
            </div>
          </div>
          <hr className="my-12 mb-6 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100" />
          <div className="flex justify-center items-center mb-6">
            <div className="w-20">
              <Lottie animationData={HappyMail} />
            </div>
            <div className="text-center text-md font-semibold">
              "Everyone you meet is a part of your journey"
            </div>
            <div className="w-20">
              <Lottie animationData={HappyMail} />
            </div>
          </div>
          <div className="w-full h-[24rem] lg:h-[45rem]">
            <Carousel slideInterval={5000}>
              <img
                alt="..."
                src="http://athlr.github.io/portfolio/static/img/portfolio-1.jpg"
              />
              <img
                alt="..."
                src="http://athlr.github.io/portfolio/static/img/portfolio-2.jpg"
              />
              <img
                alt="..."
                src="http://athlr.github.io/portfolio/static/img/portfolio-3.jpg"
              />
              <img
                alt="..."
                src="http://athlr.github.io/portfolio/static/img/portfolio-4.jpg"
              />
              <img
                alt="..."
                src="http://athlr.github.io/portfolio/static/img/portfolio-5.jpg"
              />
            </Carousel>
          </div>
          <hr className="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100" />
          <div className="flex justify-center">
            <div className="w-11/12 mb-10">
              <div className="text-2xl font-bold mb-6">Project Highlights</div>
              <div className="flex justify-center">
                <div className="text-md text-center mb-6 w-4/5">
                  Here are a few projects I've recently worked on!
                </div>
              </div>
              <div className="grid grid-cols-1 gap-x-5 gap-y-5 mt-5 mx-auto w-full lg:grid-cols-2 xl:grid-cols-3">
                {/* Card #1 */}
                <div className="flex flex-col justify-self-center max-w-full lg:max-w-lg bg-white border border-gray-200 rounded-lg shadow h-96 hover:shadow-xl transition duration-300 ease-out hover:duration-300 hover:ease-in">
                  <div className="h-1/4 photo-wrapper p-2">
                    <img
                      className="rounded-t-lg object-contain w-24 h-24 mt-2 mx-auto"
                      src="http://athlr.github.io/portfolio/static/img/bunny-burger.jpg"
                      alt="idunno"
                    />
                  </div>
                  <div className="p-5 h-3/4">
                    <a href="#">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        iDunno
                      </h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      iDunno is a random restaurant picker created to provide a
                      simple and innovative solution to take the guesswork out
                      of your dining decisions. Users can spin for a random
                      restaurant tailored to their own preferences, as well as
                      their friends' preferences, if they choose to do so.
                    </p>
                    <Link to="/projects/iDunno">
                      <div className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Read more
                        <svg
                          aria-hidden="true"
                          className="w-4 h-4 ml-2 -mr-1"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    </Link>
                  </div>
                </div>
                {/* Card #2 */}
                <div className="flex flex-col justify-self-center max-w-full lg:max-w-lg bg-white border border-gray-200 rounded-lg shadow h-96 hover:shadow-xl hover:shadow-xl transition duration-300 ease-out hover:duration-300 hover:ease-in">
                  <div className="h-1/4 photo-wrapper p-2">
                    <img
                      className="rounded-t-lg object-contain w-24 h-24 mt-2 mx-auto"
                      src="http://athlr.github.io/portfolio/static/img/manucar-logo.png"
                      alt="idunno"
                    />
                  </div>
                  <div className="p-5 h-3/4">
                    <a href="#">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        ManuCar
                      </h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      ManuCar is an app designed to assist automobile
                      dealerships in managing their operation. The platform
                      streamlines vehicle and automobile inventory tracking,
                      employee management, sales records, and car appointments.
                    </p>
                    <a
                      href="#"
                      className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Read more
                      <svg
                        aria-hidden="true"
                        className="w-4 h-4 ml-2 -mr-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
                {/* Card #3 */}
                <div className="flex flex-col justify-self-center max-w-full lg:max-w-lg bg-white border border-gray-200 rounded-lg shadow h-96 hover:shadow-xl hover:shadow-xl transition duration-300 ease-out hover:duration-300 hover:ease-in">
                  <div className="h-1/4 photo-wrapper p-2 pt-0">
                    <img
                      className="rounded-t-lg object-contain w-32 h-32 mx-auto"
                      src="http://athlr.github.io/portfolio/static/img/projex.jpg"
                      alt="projex"
                    />
                  </div>
                  <div className="p-5 h-3/4">
                    <a href="#">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Projex
                      </h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      iDunno is a random restaurant picker created to provide a
                      simple and innovative solution to take the guesswork out
                      of your dining decisions. Users can spin for a random
                      restaurant tailored to their own preferences, as well as
                      their friends' preferences, if they choose to do so.
                    </p>
                    <a
                      href="#"
                      className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Read more
                      <svg
                        aria-hidden="true"
                        className="w-4 h-4 ml-2 -mr-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="w-auto text-lg mb-6 inline-flex justify-center items-center px-3 py-2 font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              See more
              <svg
                aria-hidden="true"
                className="w-4 h-4 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="w-11/12 mb-10">
              <div className="text-2xl font-bold mb-6">Skills</div>
              <div className="flex justify-center">
                <div className="text-md text-center mb-6 w-4/5">
                  These are the skills that I've developed thus far into my
                  Software Engineering journey. As I dive deeper into this
                  field, I hope to expand this list as I keep up to date with
                  the latest technologies and industry trends!
                </div>
              </div>
              <div className="flex flex-col items-center md:flex-row md:justify-center md:items-start w-full text-center bg-white border border-gray-200 rounded-lg shadow h-96 mt-5">
                <div className="w-full h-1/3 md:w-1/3 md:h-full p-4">
                  <div className="text-lg font-bold">Front End</div>
                </div>
                <div className="w-full h-1/3 md:w-1/3 md:border-x-2 md:h-full p-4">
                  <div className="text-lg font-bold">Back End</div>
                </div>
                <div className="w-full h-1/3 md:w-1/3 md:h-full p-4">
                  <div className="text-lg font-bold">Technologies</div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="w-11/12 mb-10">
              <div className="text-lg font-semibold">Contact Me</div>
              <div className="w-1/4">
                <Lottie animationData={Contact} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
