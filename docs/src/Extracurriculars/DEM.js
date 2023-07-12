import { useEffect } from "react";

export default function DEM() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="overflow-x-hidden w-full">
      <div className="pt-12">
        <div className="flex justify-center items-center bg-gray-100">
          <div className="flex flex-col md:flex-row justify-center items-center w-4/5">
            <div className="w-full md:w-1/2 h-1/3 text-center mt-12 px-6 mb-10 md:mb-0">
              <div className="p-2">
                <img
                  className="rounded-full object-contain w-40 h-40 mt-2 mx-auto"
                  src="http://athlr.github.io/portfolio/static/img/dem.jpg"
                  alt="idunno"
                />
              </div>
              <div className="text-5xl mb-12">Delta Epsilon Mu</div>
              <div className="flex md:flex-col justify-center items-center">
                <div className="md:w-3/4">
                  <div className="flex text-left">
                    <div className="font-semibold mr-2">Position:</div>
                    <div>Social Chair</div>
                  </div>
                  <div className="flex text-left pb-12">
                    <div className="font-semibold mr-2">Duration:</div>
                    <div>June 2020 - June 2021</div>
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
              "The Members of Delta Epsilon Mu serve the community by advocating
              health education and care, and through active participation in
              service activities, fundraising, and outreach programs."
            </div>
            <div className="text-md mb-2">Our 4 Pillars:</div>
            <div className="text-md mb-2">
              1. <span className="font-semibold">Loyalty</span>: We pride
              ourselves of our ability to always be there for a brother or
              sister in need.
            </div>
            <div className="text-md mb-2">
              2. <span className="font-semibold">Dedication</span>: We
              demonstrate our devotion and commitment to greater causes through
              building our relationship with the community and hosting various
              philanthropy events.
            </div>
            <div className="text-md mb-2">
              3. <span className="font-semibold">Friendship</span>: You meet as
              strangers but leave as lifelong friends. Our brotherhood is what
              sets us apart from other organizations.
            </div>
            <div className="text-md mb-12">
              4. <span className="font-semibold">Support</span>: Our family
              inspires, motivates, and encourages you to step out of your
              comfort zone and live life to the fullest extent!
            </div>
            <div className="text-lg font-semibold mb-2">My Experience</div>
            <div className="text-md mb-2">
              As a member of Delta Epsilon Mu, I had the opportunity to
              contribute to our community alongside my fellow brothers and
              sisters. At the University of California, San Diego, I dedicated
              my time to volunteering at Roger's Commmunity Garden. Our main
              goal there was to establish an environment where local community
              members could grow their own produce and dispose of their waste
              through composting.
            </div>
            <div className="text-md mb-2">
              Furthermore, I had the privlege of collaborating with RARE Bear
              Sciences, one of our local philanthropies. Through their RARE Bear
              Program, community volunteers like myself have the honor of
              creating unique teddy bears for extraordinary children facing rare
              diseases. This program provides a special opportunity to bring joy
              and comfort to these individuals while also bringing attention to
              the research being done for these diseases.
            </div>
            <div className="text-md mb-2">
              As the Social Chair, my focus was on establishing an active
              virtual platform that would enable our members to build and
              maintain relationships with one another during the early stages of
              the Covid-19 pandemic. To achieve this, I created a Discord server
              for our chapter where I actively participated in Voice Channels
              every weekend, engaging members in conversation and activities.
            </div>
            <div className="text-md mb-2">
              In addition, I organized and hosted various online events for our
              members, including collaborative initiatives events with other
              chapters. Despite the challenging circumstances the world was
              facing, we managed to cultivate a sense of community within our
              group. Together, we created a supportive and tight-knit
              environment where our members could find solace and companionship.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
