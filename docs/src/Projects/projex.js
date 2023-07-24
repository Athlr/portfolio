export default function projex() {
  return (
    <>
      <div className="overflow-x-hidden w-full">
        <div>
          <div className="flex justify-center items-center">
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
                    <a
                      href="https://github.com/Athlr/projex"
                      target="_blank"
                      rel="noreferrer"
                      className="flex justify-center mb-2"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        className="bi bi-github"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                      </svg>
                      <span className="ml-2 transition ease-in-out hover:text-slate-500">
                        GitHub Repo
                      </span>
                    </a>
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
          <div className="flex justify-center bg-white">
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
              <div className="text-md mb-6">
                Projex is a task and project management application designed to
                streamline task organization and prioritization. With Projex,
                users can effortlessly create, organize and prioritize tasks,
                ensuring a smooth and efficient workflow. The app offers
                convenient features for project managers to assign tasks to
                specific team members, including ways to specify task details
                and priority levels. Users have access to a personalized task
                board where they can track their assigned tasks and create notes
                for each one.
              </div>
              <div className="text-lg font-semibold mb-2">Project</div>
              <div className="text-md font-semibold mb-2">Authentication</div>
              <div className="text-md mb-6">
                To handle authentication and authorization for Projex, I took
                advantage of Django’s built-in user authentication system. The
                process involved creating sign-up and login pages using Django
                Forms. I then defined corresponding view functions that handle
                two scenarios: first, populating the forms when the user
                initially visits the page, and second, validation and
                authenticating the user input when a user submits information
                through the forms. Upon successful validation and acceptance of
                user input, the user is redirected to the application’s home
                page. However, in the case of an invalid form or rejected input,
                the system promptly displays a corresponding error message to
                guide the user appropriately.
              </div>
              <div className="text-md font-semibold mb-2">UI / UX</div>
              <div className="text-md font-semibold mb-2">
                Home Page | My Projects
              </div>
              <div className="text-md mb-2">
                When the user successfully logs in, they are redirected to the
                Projects board where they can view a list of all projects they
                have created. Here they are able to view each project’s name,
                status, priority, and the number of tasks the project contains.
                From this page, you can edit or delete your projects. You can
                click on the table row to view its respective project details
                page.
              </div>
              <img
                alt="..."
                src="http://athlr.github.io/portfolio/static/img/projex-my-projects.JPG"
                className="rounded-lg mb-2"
              />
              <div className="text-md italic mb-6 text-center">
                Projex's "My Projects" page
              </div>
              <div className="text-md mb-6">
                The project details page contains information about the project
                and the tasks assigned to the various workers in the company.
                From this page, you can also edit or delete the tasks associated
                with the project. In addition, I designed a Gantt chart with CSS
                grid and Django’s custom template tag system to provide a visual
                representation that maps out the tasks associated with the
                project with the timeframe provided.
              </div>
              <img
                alt="..."
                src="http://athlr.github.io/portfolio/static/img/projex-my-projects-details.JPG"
                className="rounded-lg mb-2"
              />
              <div className="text-md italic mb-6 text-center">
                Projex's project details page
              </div>
              <div className="text-md font-semibold mb-2">Projex</div>
              <div className="text-md mb-2">
                When the user accesses the “Projex” section, they are able to
                view a comprehensive list of all projects within their company.
                The interface closely resembles the layout of the “My Projects”
                pages. However, this page operates solely as a read-only
                section. Users are unable to make any edits or deletions.
              </div>
              <div className="text-md mb-6">
                To enhance user experience, I incorporated jQuery to create a
                dynamic search bar. This search bar filters the table rows based
                on the characters entered by the user, allowing for quick and
                efficient searching within the project list.
              </div>
              <img
                alt="..."
                src="http://athlr.github.io/portfolio/static/img/projex-projects.JPG"
                className="rounded-lg mb-2"
              />
              <div className="text-md italic mb-6 text-center">
                View-only projects page with jQuery-based search bar
              </div>
              <div className="text-md font-semibold mb-2">My Tasks</div>
              <div className="text-md mb-2">
                Under the “My Tasks” section, users can conveniently view all
                the tasks assigned to them. Each task is displayed with its
                description at the center, alongside the status (indicating
                completion) and the due date in the corner.
              </div>
              <div className="text-md mb-2">
                To facilitate progress updates, users can utilize the edit
                button to mark tasks as completed or a work in-progress.
              </div>
              <img
                alt="..."
                src="http://athlr.github.io/portfolio/static/img/projex-tasks.JPG"
                className="rounded-lg mb-2"
              />
              <div className="text-md italic mb-6 text-center">
                Projex's Tasks page
              </div>
              <div className="text-md mb-6">
                Furthermore, this page grants users access to the notes
                functionality of the application. For each task, users have the
                option to create multiple notes, which are then saved and
                associated with the corresponding task. The navigation bar
                provides easy browsing through these notes, allowing users to
                edit previously created notes or create new ones directly from
                this page.
              </div>
              <img
                alt="..."
                src="http://athlr.github.io/portfolio/static/img/projex-notes.JPG"
                className="rounded-lg mb-2"
              />
              <div className="text-md italic mb-6 text-center">
                Projex's Notes functionality
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
