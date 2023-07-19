export default function projex() {
  return (
    <>
      <div className="overflow-x-hidden w-full">
        <div>
          <div className="flex justify-center items-center bg-gray-100">
            <div className="flex flex-col md:flex-row justify-center items-center w-4/5">
              <div className="w-full md:w-1/2 h-1/3 text-center mt-12 px-6 mb-10 md:mb-0 ">
                <div className="p-2">
                  <img
                    className="rounded-full object-contain w-40 h-40 mt-2 mx-auto bg-white"
                    src="http://athlr.github.io/portfolio/static/img/projex.jpg"
                    alt="manucar"
                  />
                </div>
                <div className="text-5xl mb-2">Projex</div>
                <div className="flex justify-center items-center">
                  <div className="w-5/6 lg:w-3/4 text-center">
                    <div className="mb-5">Task and Project Management App</div>
                    <div className="">
                      <div className="font-semibold mr-2">Skills:</div>
                    </div>
                    <div className="mb-5">
                      Python &#x2022; Django &#x2022; HTML5 &#x2022; CSS
                      &#x2022; Bootstrap &#x2022; jQuery
                    </div>
                  </div>
                </div>
                <div className="flex md:flex-col justify-center items-center">
                  <div className="w-3/4">
                    <div className="flex text-left">
                      <div className="font-semibold mr-2">Position:</div>
                      <div>Lead Developer</div>
                    </div>
                    <div className="flex text-left mb-12">
                      <div className="font-semibold mr-2">Duration:</div>
                      <div>Mar 2023 - Apr 2023</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="w-1/2 mb-10">
              {/* <hr className="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100" /> */}
              {/* <div className="aspect-video w-full">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/xaAiMfJj2Es`}
                  title="YouTube Video"
                  allowFullScreen
                ></iframe>
              </div> */}
              {/* <div className="text-center font-semibold">
                Project Demo Video (In-Progress)
              </div> */}
              {/* <hr className="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100" /> */}
              <div className="text-lg font-semibold mb-2 mt-12">Overview</div>
              <div className="text-md mb-12">placeholder</div>
              <div className="text-lg font-semibold mb-2">Project Roles</div>
              <div className="text-md font-semibold mb-2">Placeholder Role</div>

              <div className="text-md mb-6">placeholder</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
