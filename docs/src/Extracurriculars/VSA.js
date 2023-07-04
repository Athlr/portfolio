import { useEffect } from "react";
import { Carousel } from "flowbite-react";

export default function VSA() {
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);
  return (
    <>
      <div className="overflow-x-hidden w-full">
        <div className="pt-10">
          <div className="flex justify-center items-center">
            <div className="flex flex-col md:flex-row justify-center items-center w-4/5">
              <div className="w-full md:w-1/2 h-1/3 text-center mt-12 px-6 mb-10 md:mb-0">
                <div className="p-2">
                  <img
                    className="rounded-t-lg object-contain w-40 h-40 mt-2 mx-auto"
                    src="http://athlr.github.io/portfolio/static/img/ucsd-vsa.jpg"
                    alt="idunno"
                  />
                </div>
                <div className="text-5xl mb-12">
                  Vietnamese Student Association
                </div>
                <div className="flex md:flex-col justify-center items-center">
                  <div className="md:w-3/4">
                    <div className="flex text-left">
                      <div className="font-semibold mr-2">Position:</div>
                      <div>
                        External Vice President | Intercollegiate Council
                        Representative
                      </div>
                    </div>
                    <div className="flex text-left">
                      <div className="font-semibold mr-2">Duration:</div>
                      <div>June 2019 - June 2020</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="w-1/2 mb-10">
              <hr className="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100" />
              <div className="text-lg font-semibold mb-2">
                Mission Statement
              </div>
              <div className="text-md mb-2">
                "The Vietnamese Student Association of UCSD strives to promote
                and preserve the Vietnamese culture. We are dedicated to
                providing resources and a safe space for students to unite as a
                Vietnamese-American community. This organization is for
                nonprofit."
              </div>
              <div className="text-md mb-2">
                Our foundation is built on 4 pillars:
              </div>
              <div className="text-md mb-2">
                1. <span className="font-semibold">Social</span>: We set up a
                welcoming and inclusive community for all students to meet new
                people and build bonds with one another
              </div>
              <div className="text-md mb-2">
                2. <span className="font-semibold">Cultural</span>: We design
                and execute events that help students learn about and or stay in
                touch with the Vietnamese culture
              </div>
              <div className="text-md mb-2">
                3. <span className="font-semibold">Community</span>: We strive
                to create a supportive and cooperative community for all
                students regardless of race, ethnicity, or background
              </div>
              <div className="text-md mb-12">
                4. <span className="font-semibold">Academic</span>: We provide
                resources for students to be academically successful
              </div>
              <div className="text-lg font-semibold mb-2">My Experience</div>
              <div className="text-md mb-2">
                As the External Vice President, I served as the ambassador to
                connect UC San Diego's VSA to the Union of VSAs as well as to
                other VSAs across Southern California. During my term it was
                especially important to maintain good-standing within the union
                as well as to build rapport with other schools as we were only
                recently accepted to be a part of the Union. We needed traction
                to bring attention to our organization and its events.
              </div>
              <div className="text-md mb-2">
                In collaboration with other External Vice Presidents, we planned
                and executed 10 school-wide events allowing for hundreds of
                state-wide members to interact and network with one another.
                These events included UVSA Beach Day and UVSA Friendship games.
                We also collaborated with the Vietnamese community in Orange
                County, California to plan and be apart of the UVSA Tet
                Festival.
              </div>
              <div className="text-md mb-12">
                I also had the privilege of planning and hosting our
                organization's second external event, Wild n' Culture, a play on
                an American TV show based around improvisational comedy games.
                Although our school is one of the furthest from the Union, we
                managed to have a full house!
              </div>
              <div className="text-lg font-semibold mb-2">Gallery</div>
              <div className="flex justify-center">
                {/* <img
                  src="http://athlr.github.io/portfolio/static/img/wild-n-culture.jpg"
                  className="rounded-lg my-5 w-full max-w-[50rem]"
                ></img> */}
              </div>
              <div className="w-full h-[24rem] xl:h-[45rem]">
                <Carousel slideInterval={5000}>
                  <img
                    alt="..."
                    src="http://athlr.github.io/portfolio/static/img/film-fest.jpg"
                    className="rounded-lg"
                  />
                  <img
                    alt="..."
                    src="http://athlr.github.io/portfolio/static/img/uvsa-camp.jpg"
                    className="rounded-lg xl:h-full"
                  />
                  <img
                    alt="..."
                    src="http://athlr.github.io/portfolio/static/img/wild-n-culture-2.jpg"
                    className="rounded-lg"
                  />
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
