import { useEffect } from "react";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import Coder from "./Lottie/Coder.json";

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="overflow-x-hidden w-full">
      <div className="w-full pt-10">
        <div className="flex justify-center items-center">
          <div className="flex flex-col md:flex-row justify-center items-center w-4/5">
            <div className="w-full md:w-1/2 h-1/3 text-center mt-12 px-6 mb-10 md:mb-0">
              <div className="text-5xl">About me</div>
              <div className="text-xl">and my journey into tech</div>
              <div className="flex justify-center">
                <Lottie animationData={Coder} className="w-64" />
              </div>
              <hr className="my-6 md:my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100" />
              <div className="text-left text-md">
                Hello! I graduated from UC San Diego in 2021 with a B.S. in
                Human Biology and a minor in Cognitive Science. While taking
                time off after finishing my medical school examinations, I
                decided to explore some of my interests, one of which was
                Computer Science.
              </div>
              <br></br>
              <div className="text-left text-md">
                I started exploring through some beginner courses online and
                found myself hooked. Each problem was like an open ended puzzle.
                Different lines of code could produce the same output. I loved
                how it wasn't just memorization and regurgitation. It was more
                of understanding and implementing concepts into products that I
                could see with my own two eyes.
              </div>
              <br></br>
              <div className="text-left text-md">
                After relecting on my aspirations, I decided to give coding a
                chance and enrolled myself into a coding bootcamp, and now here
                we are! I'm now a capable full-stack software developer that
                hopes to change the world through code.
              </div>
            </div>
            <div className="flex justify-center w-1/2">
              <img
                src="http://localhost:3000/static/img/aaron.jpg"
                className="min-w-[10rem] max-w-[30rem] rounded-lg md:mt-10"
              />
            </div>
          </div>
        </div>
        <hr className="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100" />
        <div className="flex justify-center">
          <div className="w-11/12 mb-10">
            <div className="text-lg font-semibold">
              Extracurriculars & Experiences
            </div>
            <div className="grid grid-cols-1 gap-x-5 gap-y-5 mt-5 mx-auto w-full lg:grid-cols-2 xl:grid-cols-3">
              {/* Card #1 */}
              <div className="flex flex-col justify-self-center max-w-sm bg-white border border-gray-200 rounded-lg shadow h-96">
                <div className="h-1/4 photo-wrapper p-2">
                  <img
                    className="rounded-t-lg object-contain w-24 h-24 mt-2 mx-auto"
                    src="http://localhost:3000/static/img/ucsd-vsa.jpg"
                    alt="idunno"
                  />
                </div>
                <div className="p-5 h-3/4">
                  <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      Vietnamese Student Assoc.
                    </h5>
                    <div className="text-md font-semibold mb-2">
                      External Vice President
                    </div>
                  </a>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    VSA is a non-profit cultural organization that strives to
                    promote and preserve the Vietnamese culture. We are
                    dedicated to providing a safe environment for all students
                    to build ever-lasting friendships.
                  </p>
                  <Link to="/about/vsa">
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
              <div className="flex flex-col justify-self-center max-w-sm bg-white border border-gray-200 rounded-lg shadow h-96">
                <div className="h-1/4 photo-wrapper p-2">
                  <img
                    className="rounded-t-lg object-contain w-24 h-24 mt-2 mx-auto"
                    src="http://localhost:3000/static/img/dem.jpg"
                    alt="idunno"
                  />
                </div>
                <div className="p-5 h-3/4">
                  <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      Delta Epsilon Mu
                    </h5>
                    <div className="text-md font-semibold mb-2">
                      Social Chair
                    </div>
                  </a>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    A co-ed fraternity for students with interests in pre-health
                    or health-related fields. Members serve the community by
                    actively participating in service activities, fundraising,
                    and outreach programs.
                  </p>
                  <Link to="/about/dem">
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
              <div className="flex flex-col justify-self-center max-w-sm bg-white border border-gray-200 rounded-lg shadow h-96">
                <div className="h-1/4 photo-wrapper p-2">
                  <img
                    className="rounded-t-lg object-contain w-24 h-24 mt-2 mx-auto"
                    src="http://localhost:3000/static/img/marshall-logo.png"
                    alt="idunno"
                  />
                </div>
                <div className="p-5 h-3/4">
                  <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      Marshall College Orientation
                    </h5>
                    <div className="text-md font-semibold mb-2">
                      Orientation Leader
                    </div>
                  </a>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    A program designed to support students in their transition
                    to UC San Diego and Marshall College. Collaborated with 40
                    other leaders to promote team-building and community
                    involvement for over 300 incoming students.
                  </p>
                  <Link to="/about/marshall-orientation">
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
      </div>
    </div>
  );
}
