import { useEffect } from "react";

export default function OL() {
  return (
    <div className="overflow-x-hidden w-full">
      <div>
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
                  <div className="flex text-left pb-12">
                    <div className="font-semibold mr-2">Duration:</div>
                    <div>March 2019 - September 2020</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center bg-white">
          <div className="w-1/2 mb-10">
            <hr className="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100" />
            <div className="text-lg font-semibold mb-2">Mission Statement</div>
            <div className="text-md mb-12">
              "The Thurgood Marshall College Orientation Team is a group of
              passionate student leaders that work tirelessly to build
              community, and welcome incoming students and families to the UC
              San Diego Community."
            </div>
            <div className="text-lg font-semibold mb-2">My Experience</div>
            <div className="text-md mb-2">
              As an Orienation Leader, I worked in collaboration with a team of
              40 other leaders to develop and promote team-building and
              community involvement for more than 300 incoming students.
            </div>
            <div className="text-md mb-2">
              Recognizing that college is a time of many significant "firsts"
              for students, we understood the importance of our role as one of
              their initial points of contact at UCSD. To effectively support
              and guide these students, we displayed cultural humility,
              encouraged academic success, prioritized adaptability and
              demonstratded a deep understanding and appreciation for diverse
              cultures.
            </div>
            <div className="text-md mb-2">
              To build a safe environment for all students at Marshall College,
              Orientation Leaders along with staff members lead a diversity,
              equity and inclusion based event. We share aloud the definitions
              of terminology including but not limited to: race, ethnicity,
              class, gender, sex, sexual orientation, and ability. We then
              invite students to share which identities they feel the most
              oppression in, the most privilege in, and the most empowered by.
              We adknowledge that this conversation could be a first for many,
              but we want students to see how despite all their differences,
              they are all here together at Marshall College, UCSD.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
