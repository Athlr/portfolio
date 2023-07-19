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
                iDunno is a random restaurant generator that curates restaurant
                recommendations for both solo and group food adventures. By
                leveraging JavaScript, Python, FastAPI, and PostgreSQL, we have
                created an application that allows users to spin for a random
                selection tailored to their own preferences, and their friends'
                preferences, if they choose to do so! No more saying, "I don't
                know". iDunno is here to help you pick your next dining
                experience. Let us take the stress out of your decision-making.
              </div>
              <div className="text-lg font-semibold mb-2">Project Roles</div>
              <div className="text-md font-semibold mb-2">Team Leader</div>
              <div className="text-md mb-2">
                As Team Leader, I took on the responsibility of establishing a
                safe and productive work environment. By promoting open
                communication, active listening, and respect for diverse
                perspectives, I established a supportive setting that encouraged
                team members to freely contribute and engage with one another.
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
                Futhermore, I effectively organized my schedule to allocate
                several hours each work day to offer support and assistance to
                any team members in need. Whether it involved brainstorming
                ideas, sharing resources for bug fixes, or engaging in peer
                coding to troubleshoot issues, I made myself readily avaliable
                to help. By actively engaging with my teammates, I hoped to
                foster an environment where everyone felt supported throughout
                the project. At the end of the day, we were able to collectively
                overcome all of our challenges.
              </div>
              <div className="text-md font-semibold mb-2">UI/UX Design</div>
              <div className="text-md mb-2">
                I took on the task of translating our group's collective ideas
                into a visual representation, creating a rough sketch of all the
                components discussed within our brainstorming sessions. Taking
                into consideration the user's perspective, I placed great
                emphasis on making sure that all interactable elements within
                our web application were easily noticeable. Furthermore, I
                prioritized designing a seamless pathway connecting all the
                components to ensure a smooth and intuitive user experience.
              </div>
              <div className="text-md mb-2">
                During the design process I drew inspiration from popular social
                media applications including Meta and Instagram. This is most
                apparent in our profile page and friend's list components. My
                goal was to create a cohesive and familar design that users
                could navigate through effortlessly. In addition, I aimed to
                minimize the number of clicks required for users to access all
                desired features, optimizing the flow of interactions and
                ensuring a streamlined experience.
              </div>
              <img
                alt="..."
                src="http://athlr.github.io/portfolio/static/img/idunno-design.jpg"
                className="rounded-lg mb-2"
              />
              <div className="text-md italic mb-6 text-center">
                Application design was drawn out using Excalidraw
              </div>
              <div className="text-md font-semibold mb-2">
                Database Design & FastAPI Endpoints
              </div>
              <div className="text-md mb-2">
                The application utilizes a relational database, specifically
                PostgreSQL. To reduce the redundancy of data and improve data
                integrity, I designed the database with data normalization
                principles in mind. Our data adheres to the first, second, and
                third normal form. Each column in the table has a single value,
                and there are no partial dependencies between columns or
                transitive functional dependencies within each table.
              </div>
              <div className="text-md mb-2">
                For the implementation of endpoints, we utilized FastAPI and
                followed RESTful API standards. Each route is designed to offer
                up to four basic types of functionality based on the CRUD
                paradigm: Create, Read, Update, Delete. I created a preliminary
                template of each endpoint outlining the endpoint path, endpoint
                method, query parameters, and the expected response shape in
                JSON format.
              </div>
              <img
                alt="..."
                src="http://athlr.github.io/portfolio/static/img/idunno-data.jpg"
                className="rounded-lg mb-6"
              />
              <div className="text-md italic mb-6 text-center">
                Relational database design that highlights primary and foreign
                key connections
              </div>
              <div className="text-md font-semibold mb-2">Authentication</div>
              <div className="text-md mb-2">
                To facilitate user authentication in our application, we
                employed JWTdown for FastAPI, a package that reduces the
                boilerplate authentication code of OAuth2. This package enables
                us to handle user login, logout, and endpoint security through a
                hybrid cookie and JSON-based token distribution approach.
              </div>
              <div className="text-md mb-6">
                In addition to authentication, I developed SQL queries to
                validate users’ permissions for accessing specific resources.
                For instance, in our application, users were only allowed to
                view the profile pages of other users with whom they were
                friends with. When a logged-in user attempts to access another
                user’s profile, the system executes a SQL query to verify the
                existence of a registered friendship. If the friendship is
                confirmed, the user gains access to their friend’s profile page.
                Conversely, if the friendship does not exist, the authorization
                fails, and a blank page is returned.
              </div>
              <div className="text-md font-semibold mb-2">
                Social Media Aspect
              </div>
              <div className="text-md mb-2">
                We wanted to provide a solution for the common problem of
                finding a place to eat as a group.To accomplish this, we decided
                to take the concept of a random restaurant generator and enhance
                it by incorporating a social media component that allow users to
                populate curated restaurants based on the preferences of both
                the user and their friends.
              </div>
              <div className="flex flex-col items-center text-md mb-2">
                By leveraging FastAPI endpoints, React state and hooks, and SQL
                queries, I implemented several features that provide users with
                the following functionalities:
                <div className="flex w-11/12 justify-content mt-2">
                  <ul className="list-disc">
                    <li className="mb-2">
                      Logged-in users can access a dedicated page that showcases
                      a list of their friends organized with favorited friends
                      appearing first, followed by non-favorited friends
                    </li>
                    <li className="mb-2">
                      Logged-in users have the ability to navigate to their
                      friend’s profile pages to explore their friend’s curated
                      lists of restaurants
                    </li>
                    <li>
                      Logged-in users have access to a Friend Request modal
                      where they can send friend requests to other users based
                      on their usernames, as well as accept or decline any
                      friend requests they’ve received.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="text-md mb-6">
                By incorporating these features, our application provides users
                with a social network-like experience, facilitating group
                decision-making when it comes to choosing a restaurant and
                fostering connections among users.
              </div>
              <img
                alt="..."
                src="http://athlr.github.io/portfolio/static/img/idunno-friends-page.jpg"
                className="rounded-lg mb-2"
              />
              <div className="text-md italic mb-6 text-center">
                Logged-in user's view of their Friends Page
              </div>
              <img
                alt="..."
                src="http://athlr.github.io/portfolio/static/img/idunno-friends-modal.jpg"
                className="rounded-lg mb-2"
              />
              <div className="text-md italic mb-6 text-center">
                Logged-in user's view of their Friend Request Modal
              </div>
              <div className="text-md font-semibold mb-2">
                CI/CD Pipelines & Deployment
              </div>
              <div className="text-md mb-2">
                To ensure continuous integration, I established CI pipelines
                using GitLab that automate various checks, including:
              </div>
              <div className="flex flex-col items-center text-md mb-2">
                <div className="flex w-11/12 justify-content">
                  <ul className="list-disc">
                    <li className="mb-2">
                      Verification of passing automated unit tests with Pytest
                    </li>
                    <li className="mb-2">
                      Evaluation of code quality against flake8 standards
                    </li>
                    <li>Building of React/JavaScript front-end</li>
                  </ul>
                </div>
              </div>
              <div className="text-md mb-2">
                Upon a successful build from the CI pipelines, the process of
                continuous deployment is triggered. GitLab constructs a Docker
                image, which is then published to the GitLab container registry
                and then subsequently deployed utilizing Cirrus SDK by
                Galvanize.
              </div>
              <div className="text-md mb-6">
                In addition to front-end deployment, we also utilize Cirrus SDK
                to deploy our backend database to a cloud service. This
                streamlined approach ensures the efficient and reliable
                deployment of both front-end and back-end components of our
                application.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
