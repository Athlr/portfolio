import { useEffect } from "react";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import CodingPerson from "./Lottie/Coding-person.json";

export default function Projects() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="overflow-x-hidden w-full">
        <div className="pt-20">
          <div className="flex justify-center">
            <div className="w-1/2 h-1/3 text-center mt-12">
              <div className="text-5xl">Projects</div>
              <div className="flex justify-center">
                <Lottie animationData={CodingPerson} className="w-64" />
              </div>
            </div>
          </div>
          <hr className="my-6 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100" />
          <div className="flex justify-center">
            <div className="w-11/12 mb-10">
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
                <div className="flex flex-col justify-self-center max-w-full lg:max-w-lg bg-white border border-gray-200 rounded-lg shadow h-96 hover:shadow-xl transition duration-300 ease-out hover:duration-300 hover:ease-in">
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
                <div className="flex flex-col justify-self-center max-w-full lg:max-w-lg bg-white border border-gray-200 rounded-lg shadow h-96 hover:shadow-xl transition duration-300 ease-out hover:duration-300 hover:ease-in">
                  <div className="h-1/4 photo-wrapper p-2 pt-0">
                    <img
                      className="rounded-t-lg object-contain w-32 h-32 mx-auto"
                      src="http://athlr.github.io/portfolio/static/img/projex.jpg"
                      alt="idunno"
                    />
                  </div>
                  <div className="p-5 h-3/4">
                    <a href="#">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Projex
                      </h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      Projex is a task and project management app that allows
                      users to create, organize, and prioritize tasks
                      efficiently. Each user has a personalized task board where
                      they can view tasks that they've been assigned and create
                      note instances for each of those tasks.
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
                {/* Card #4 */}
                <div className="flex flex-col justify-self-center max-w-full lg:max-w-lg bg-white border border-gray-200 rounded-lg shadow h-96 hover:shadow-xl transition duration-300 ease-out hover:duration-300 hover:ease-in">
                  <div className="h-1/4 photo-wrapper p-2 pt-0">
                    <img
                      className="rounded-t-lg object-contain w-32 h-32 mx-auto"
                      src="http://athlr.github.io/portfolio/static/img/primogem.jpg"
                      alt="idunno"
                    />
                  </div>
                  <div className="p-5 h-3/4">
                    <a href="#">
                      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Genshin Calendar
                      </h5>
                      <div className="font-normal text-base mb-2">
                        In Progress
                      </div>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      Genshin Calendar is a helpful tool that keeps track of
                      time-gated materials required in order to level up and
                      ascend characters and weapons while the user journeys
                      throughout Teyvat.
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
        </div>
      </div>
    </>
  );
}
