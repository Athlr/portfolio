export default function iDunno() {
  return (
    <>
      <div className="overflow-x-hidden w-full">
        <div>
          <div className="flex justify-center items-center bg-gray-100">
            <div className="flex flex-col md:flex-row justify-center items-center w-4/5">
              <div className="w-full md:w-1/2 h-1/3 text-center mt-12 px-6 mb-10 md:mb-0 ">
                <div className="p-2">
                  <img
                    className="rounded-full object-contain w-40 h-40 mt-2 mx-auto"
                    src="http://athlr.github.io/portfolio/static/img/bunny-burger.jpg"
                    alt="idunno"
                  />
                </div>
                <div className="text-5xl mb-2">iDunno</div>
                <div className="flex justify-center items-center">
                  <div className="w-5/6 lg:w-3/4 text-center">
                    <div className="mb-5">
                      Random Restaurant Generation based on User & User's
                      Friends' preferences{" "}
                    </div>
                    <div className="">
                      <div className="font-semibold mr-2">Skills:</div>
                    </div>
                    <div className="mb-5">
                      JavaScript &#x2022; React &#x2022; TailwindCSS &#x2022;
                      Python &#x2022; FastAPI &#x2022; JWTdown for FastAPI
                      &#x2022; SQL &#x2022; PostgreSQL &#x2022; Beekeeper
                      &#x2022; CI/CD Pipelines &#x2022; Agile Methodology
                    </div>
                  </div>
                </div>
                <div className="flex md:flex-col justify-center items-center">
                  <div className="w-3/4">
                    <div className="flex text-left">
                      <div className="font-semibold mr-2">Position:</div>
                      <div>Team Leader</div>
                    </div>
                    <div className="flex text-left mb-12">
                      <div className="font-semibold mr-2">Duration:</div>
                      <div>May 2023 - June 2023</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="w-1/2 mb-10">
              <hr className="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100" />
              <div className="aspect-video w-full">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/xaAiMfJj2Es`}
                  title="YouTube Video"
                  allowFullScreen
                ></iframe>
              </div>
              <hr className="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100" />
              <div className="text-lg font-semibold mb-2">Overview</div>
              <div className="text-md mb-12">
                iDunno is your go-to random restaurant picker. Our team
                understands that choosing a restaurant can often be a
                challenging task, especially when you're out and about with a
                group. Here at iDunno, we've created a simple and innovative
                solution to take the guesswork out of your dining decisions.
                Users can spin for a random selection tailored to their own
                preferences, and their friends' preferences, if they choose to
                do so! No more saying, "I don't know". iDunno is here to help
                you pick your next dining experience. Let us take the stress out
                of decision-making.
              </div>
              <div className="text-lg font-semibold mb-2">Project Roles</div>
              <div className="text-md font-semibold mb-2">Team Leader</div>
              <div className="text-md mb-2">
                As Team Leader, I took on the responsibility of establishing a
                safe and productive work environment in hopes of creating a
                cohesive and motivated group dynamic. By promoting open
                communication, active listening, and respect for diverse
                perspectives, I managed to establish a supportive setting that
                encouraged team members to freely contribute and engage with one
                another.
              </div>
              <div className="text-md mb-2">
                The nurturing atmosphere played a vital role in my ability to
                address the issue of declining interest among some teammates
                during our project. Through open communication, I initiated
                discussions with the team to better understand their individual
                interests and strengths. Drawing on this knowledge, I was able
                to redelegate tasks that aligned more closely with each
                teammate's passion and skillset which helped to reignite their
                enthusiasm and engagement.
              </div>
              <div className="text-md mb-6">
                In addition, I dedicated specific group work hours to provide
                support and assistance to any teammate who required it. Whether
                it involved brainstorming ideas, sharing resources for bug
                fixes, or engaging in peer coding to troubleshoot issues, I made
                myself avaliable to help! By actively engaging with my
                teammates, we were able to collectively overcome challenges and
                ensured that everyone felt supported throughout the project.
              </div>
              <div className="text-md font-semibold mb-2">UI/UX Design</div>
              <div className="text-md mb-2">
                After brainstorming sessions with my team, I translated our
                collective ideas into a visual representation, creating a rough
                sketch of all the discussed components. Taking into
                consideration the user's perspective, I placed great emphasis on
                making sure that all interactable elements within our web
                application were easily noticeable. Furthermore, I prioritized
                designing a seamless pathway connecting all the components to
                ensure a smooth and intuitive user experience.
              </div>
              <div className="text-md mb-2">
                During the design process I drew inspiration from popular social
                media applications including Meta and Instagram, particularly
                when designing the profile page and friend's list. My goal was
                to create a cohesive and familar design that users could
                navigate effortlessly. I aimed to minimize the number of clicks
                required for users to access desired features, optimizing the
                flow of interactions and ensuring a streamlined experience.
              </div>
              <img
                alt="..."
                src="http://athlr.github.io/portfolio/static/img/idunno-design.jpg"
                className="rounded-lg"
              />
              <div className="text-md font-semibold mb-2">
                Database Design & FastAPI Endpoints
              </div>
              <div className="text-md mb-6">Placeholder</div>
              <div className="text-md font-semibold mb-2">Authentication</div>
              <div className="text-md mb-6">Placeholder</div>
              <div className="text-md font-semibold mb-2">
                Social Media Aspect
              </div>
              <div className="text-md mb-6">Placeholder</div>
              <div className="text-md font-semibold mb-2">
                CI/CD Pipelines & Deployment
              </div>
              <div className="text-md mb-6">Placeholder</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
