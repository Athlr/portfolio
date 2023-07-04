export default function OL() {
  return (
    <div className="overflow-x-hidden w-full">
      <div className="pt-10">
        <div className="flex justify-center items-center">
          <div className="flex flex-col md:flex-row justify-center items-center w-4/5">
            <div className="w-full md:w-1/2 h-1/3 text-center mt-12 px-6 mb-10 md:mb-0">
              <div className="p-2">
                <img
                  className="rounded-t-lg object-contain w-40 h-40 mt-2 mx-auto"
                  src="http://athlr.github.io/portfolio/static/img/marshall-logo.png"
                  alt="idunno"
                />
              </div>
              <div className="text-5xl mb-12">Marshall College Orientation</div>
              <div className="flex md:flex-col justify-center items-center">
                <div className="md:w-3/4">
                  <div className="flex text-left">
                    <div className="font-semibold mr-2">Position:</div>
                    <div>Orientation Leader</div>
                  </div>
                  <div className="flex text-left">
                    <div className="font-semibold mr-2">Duration:</div>
                    <div>March 2019 - September 2020</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="w-1/2 mb-10">
            <hr className="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100" />
            <div className="text-lg font-semibold mb-2">Mission Statement</div>
            <div className="text-md mb-2">
              "The Thurgood Marshall College Orientation Team is a group of
              passionate student leaders that work tirelessly to build
              community, and welcome incoming students and families to the UC
              San Diego Community."
            </div>
            <div className="text-lg font-semibold mb-2">My Impact</div>
          </div>
        </div>
      </div>
    </div>
  );
}
