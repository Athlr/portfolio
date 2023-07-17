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
      <div className="overflow-x-hidden w-full bg-[#EFEFEF]">
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
                I am a passionate software engineer proficient in JavaScript and
                Python, with expertise in React, Django, FastAPI, and SQL. As a
                quick learner, I can swifty adapt to new technologies. I thrive
                in collaborative environments where I can effectively work with
                others to develop innovative products. I have a genuine love for
                helping others and believe that technology can be a powerful
                tool for creating meaningful change. Whether it's building
                user-friendly applications, or optimizing existing technologies,
                I hope to make an impact on the lives of those around me through
                code!
              </div>
            </div>
            <div className="flex w-1/2 md:w-1/3 lg:w-1/4 h-1/3 justify-center items-center mt-12 aspect-ratio-auto">
              <img
                src="https://raw.githubusercontent.com/Athlr/portfolio/main/docs/public/static/img/aaron-2.JPG"
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
                    <div>
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        iDunno
                      </h5>
                    </div>
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
                      alt="manucar"
                    />
                  </div>
                  <div className="p-5 h-3/4">
                    <div>
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        ManuCar
                      </h5>
                    </div>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      ManuCar is an app designed to assist automobile
                      dealerships in managing their operation. The platform
                      streamlines vehicle and automobile inventory tracking,
                      employee management, sales records, and car appointments.
                    </p>
                    <Link to="/projects/manucar">
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
                    <div>
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Projex
                      </h5>
                    </div>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      iDunno is a random restaurant picker created to provide a
                      simple and innovative solution to take the guesswork out
                      of your dining decisions. Users can spin for a random
                      restaurant tailored to their own preferences, as well as
                      their friends' preferences, if they choose to do so.
                    </p>
                    <Link to="/projects/projex">
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
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <Link to="/projects">
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
            </Link>
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
              <div className="flex flex-col items-center md:flex-row md:justify-center md:items-start w-full text-center bg-white border border-gray-200 rounded-lg shadow h-screen md:h-96 mt-5">
                <div className="w-full h-fill md:w-1/3 md:h-full p-4">
                  <div className="flex justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="1em"
                      viewBox="0 0 576 512"
                      className="w-16 h-16 mb-2 rounded-full bg-gray-300 p-2"
                    >
                      <path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z" />
                    </svg>
                  </div>
                  <div className="text-lg font-bold mb-2">Front End</div>
                  <div className="text-md flex items-center justify-center">
                    <div className="mr-1">JavaScript ES6+</div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="1em"
                      viewBox="0 0 448 512"
                    >
                      <path d="M0 32v448h448V32H0zm243.8 349.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5V237.7h42.1v143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18-12.3 0-20.1 7.8-20.1 18 0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2 0 37.8-29.8 58.6-69.7 58.6z" />
                    </svg>
                  </div>
                  <div className="text-md">React</div>
                  <div className="text-md">React Hooks</div>
                  <div className="text-md">HTML5</div>
                  <div className="text-md">DOM Manipulation</div>
                  <div className="text-md">CSS</div>
                  <div className="text-md">Bootstrap</div>
                  <div className="text-md">TailwindCSS</div>
                </div>
                <div className="w-full h-fill md:w-1/3 border-y-2 md:border-x-2 md:border-y-0 md:h-full p-4">
                  <div className="flex justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="1em"
                      viewBox="0 0 576 512"
                      className="w-16 h-16 mb-2 rounded-full bg-gray-300 p-2"
                    >
                      <path d="M9.4 86.6C-3.1 74.1-3.1 53.9 9.4 41.4s32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L178.7 256 9.4 86.6zM256 416H544c17.7 0 32 14.3 32 32s-14.3 32-32 32H256c-17.7 0-32-14.3-32-32s14.3-32 32-32z" />
                    </svg>
                  </div>
                  <div className="text-lg font-bold mb-2">Back End</div>
                  <div className="text-md">Python3</div>
                  <div className="text-md">Django</div>
                  <div className="text-md">FastAPI</div>
                  <div className="text-md">SQL</div>
                  <div className="text-md">PostgreSQL</div>
                  <div className="text-md">MongoDB</div>
                </div>
                <div className="w-full h-1/3 md:w-1/3 md:h-full p-4">
                  <div className="flex justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="1em"
                      viewBox="0 0 640 512"
                      className="w-16 h-16 mb-2 rounded-full bg-gray-300 p-2"
                    >
                      <path d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z" />
                    </svg>
                  </div>
                  <div className="text-lg font-bold mb-2">Technologies</div>
                  <div className="text-md">Microservice Architecture</div>
                  <div className="text-md">Monolithic Architecture</div>
                  <div className="text-md">Domain-Driven Design</div>
                  <div className="text-md">Message Passing</div>
                  <div className="text-md">RabbitMQ</div>
                  <div className="text-md">CI/CD Pipelines</div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="w-11/12 mb-10">
              <div className="text-2xl font-bold mb-6">Contact Me</div>
              <div className="flex flex-col items-center">
                <div className="w-1/2 text-center font-semibold text-lg mb-2">
                  Let's be a part of each other's journey!
                </div>
                <div className="w-1/2 lg:w-1/3 text-center">
                  Whether you have a question, an opportunity, or simply want to
                  connect, feel free to reach out! I'm always eagar to make new
                  connections.
                </div>
                <div className="w-1/3 grid grid-cols-1 gap-x-5 gap-y-5 mt-5 mx-auto lg:grid-cols-2">
                  {/* Email */}
                  <a
                    href="mailto:aatran2021@gmail.com"
                    className="flex justify-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 512 512"
                      className="fill-current"
                    >
                      <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
                    </svg>
                    <span className="ml-2 transition ease-in-out hover:text-slate-500">
                      Email
                    </span>
                  </a>
                  {/* GitHub */}
                  <a
                    href="https://github.com/athlr"
                    target="_blank"
                    rel="noreferrer"
                    className="flex justify-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      className="bi bi-github"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                    </svg>
                    <span className="ml-2 transition ease-in-out hover:text-slate-500">
                      GitHub
                    </span>
                  </a>
                  {/* GitLab */}
                  <a
                    href="https://gitlab.com/aatran2021"
                    target="_blank"
                    rel="noreferrer"
                    className="flex justify-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 512 512"
                      className="fill-current"
                    >
                      <path d="M503.5 204.6L502.8 202.8L433.1 21.02C431.7 17.45 429.2 14.43 425.9 12.38C423.5 10.83 420.8 9.865 417.9 9.57C415 9.275 412.2 9.653 409.5 10.68C406.8 11.7 404.4 13.34 402.4 15.46C400.5 17.58 399.1 20.13 398.3 22.9L351.3 166.9H160.8L113.7 22.9C112.9 20.13 111.5 17.59 109.6 15.47C107.6 13.35 105.2 11.72 102.5 10.7C99.86 9.675 96.98 9.295 94.12 9.587C91.26 9.878 88.51 10.83 86.08 12.38C82.84 14.43 80.33 17.45 78.92 21.02L9.267 202.8L8.543 204.6C-1.484 230.8-2.72 259.6 5.023 286.6C12.77 313.5 29.07 337.3 51.47 354.2L51.74 354.4L52.33 354.8L158.3 434.3L210.9 474L242.9 498.2C246.6 500.1 251.2 502.5 255.9 502.5C260.6 502.5 265.2 500.1 268.9 498.2L300.9 474L353.5 434.3L460.2 354.4L460.5 354.1C482.9 337.2 499.2 313.5 506.1 286.6C514.7 259.6 513.5 230.8 503.5 204.6z" />
                    </svg>
                    <span className="ml-2 transition ease-in-out hover:text-slate-500">
                      GitLab
                    </span>
                  </a>
                  {/* LinkedIn */}
                  <a
                    href="https://www.linkedin.com/in/aaron-k-tran/"
                    target="_blank"
                    rel="noreferrer"
                    className="flex justify-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 512 512"
                      className="fill-current"
                    >
                      <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path>
                    </svg>
                    <span className="ml-2 transition ease-in-out hover:text-slate-500">
                      LinkedIn
                    </span>
                  </a>
                </div>
                <div className="w-3/5 md:w-5/12 lg:w-1/3 xl:w-1/4">
                  <Lottie animationData={Contact} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
