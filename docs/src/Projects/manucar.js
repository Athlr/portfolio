export default function manucar() {
  return (
    <>
      <div className="overflow-x-hidden w-full">
        <div>
          <div className="flex justify-center items-center">
            <div className="flex flex-col md:flex-row justify-center items-center w-4/5">
              <div className="w-full md:w-1/2 h-1/3 text-center mt-12 px-6 mb-10 md:mb-0 ">
                <div className="p-2">
                  <img
                    className="rounded-full object-contain w-40 h-40 mt-2 mx-auto"
                    src="http://athlr.github.io/portfolio/static/img/manucar-logo.png"
                    alt="manucar"
                  />
                </div>
                <div className="text-5xl mb-2">Manucar</div>
                <div className="flex justify-center items-center">
                  <div className="w-5/6 lg:w-3/4 text-center">
                    <a
                      href="https://github.com/Athlr/manucar"
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
                    <div className="mb-5">
                      Management App catered for Automobile Dealerships
                    </div>
                    <div className="">
                      <div className="font-semibold mr-2">Skills:</div>
                    </div>
                    <div className="mb-5">
                      JavaScript &#x2022; React &#x2022; Bootstrap &#x2022;
                      Python &#x2022; Django &#x2022; SQL &#x2022; PostgreSQL
                      &#x2022; Insomnia &#x2022; Polled Operations &#x2022;
                      Docker
                    </div>
                  </div>
                </div>
                <div className="flex md:flex-col justify-center items-center">
                  <div className="w-3/4">
                    <div className="flex text-left">
                      <div className="font-semibold mr-2">Position:</div>
                      <div>Co-Developer</div>
                    </div>
                    <div className="flex text-left">
                      <div className="font-semibold mr-2 mb-12">Duration:</div>
                      <div>Apr 2023 - May 2023</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center bg-white">
            <div className="w-1/2 mb-10">
              <hr className="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100" />
              <img
                alt="..."
                src="http://athlr.github.io/portfolio/static/img/manucar-main.jpg"
                className="rounded-lg mb-2"
              />
              <div className="text-md italic mb-6 text-center">
                Manucar Home Page
              </div>
              <hr className="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100" />{" "}
              <div className="text-lg font-semibold mb-2 mt-12">Overview</div>
              <div className="text-md mb-6">
                ManuCar is a Python & Django-based web application that is
                designed to assist automobile dealerships in efficiently
                managing various aspects of their operation. The platform
                streamlines vehicle and automobile inventory tracking, employee
                management, sales records, and car appointments, allowing for
                dealerships to increase overall productivity.
              </div>
              <img
                alt="..."
                src="http://athlr.github.io/portfolio/static/img/manucar-diagram.png"
                className="rounded-lg mb-2"
              />
              <div className="text-md italic mb-6 text-center">
                Manucar Project Design
              </div>
              <div className="text-lg font-semibold mb-2">Project</div>
              <div className="text-md font-semibold mb-2">
                Inventory Microservice
              </div>
              <div className="flex flex-col items-center text-md mb-2">
                Our Inventory API is designed to effectively manage automobile
                inventory for any automobile dealership. The API offers RESTful
                endpoints that are designed for the following entities:
                <div className="flex w-11/12 justify-content mt-2">
                  <ul className="list-disc">
                    <li className="mb-2">
                      <span className="font-semibold">Manufacturer</span>: The
                      company that manufactures the automobile
                    </li>
                    <li className="mb-2">
                      <span className="font-semibold">VehicleModel</span>: The
                      model of a vehicle created by the Manufacturer
                    </li>
                    <li>
                      <span className="font-semibold">Automobile</span>: The
                      actual automobile of a specific vehicle model
                    </li>
                  </ul>
                </div>
              </div>
              <div className="text-md mb-2">
                Each of these entities has its own set of RESTful endpoints that
                provide the same functionalities. There are 5 different
                endpoints per entity that: lists the entity, creates a new
                entity, retrieves a specific entity, updates a specific entity,
                and deletes a specific entity.
              </div>
              <div className="text-md mb-6">
                To enhance user experience, we designed React components that
                complement these endpoints. These components allow users to view
                a list of entities and create a new entity using a form.
              </div>
              <div className="text-md font-semibold mb-2">
                Service Microservice
              </div>
              <div className="flex flex-col items-center text-md mb-2">
                Our Service API is designed to keep track of service
                appointments for automobiles and their owners. It provides a
                range of RESTful endpoints that are designed for the following
                entities:
                <div className="flex w-11/12 justify-content mt-2">
                  <ul className="list-disc">
                    <li className="mb-2">
                      <span className="font-semibold">Technician</span>:
                      Employees responsible for conducting service appointments
                    </li>
                    <li className="mb-2">
                      <span className="font-semibold">Appointment</span>: Holds
                      all appointment information including the date, status,
                      customer, technician, and automobile information
                    </li>
                    <li>
                      <span className="font-semibold">AutomobileVO</span>:
                      Models derived from the Inventory API’s Automobile
                      entities
                    </li>
                  </ul>
                </div>
              </div>
              <div className="text-md mb-2">
                For technician entities, users have the ability to view a list
                of technicians and create new instances of technicians.
              </div>
              <div className="text-md mb-2">
                Regarding appointment entities, users can access a list of
                ongoing service appointments, create new service appointments,
                modify the status of existing appointments, and view a list of
                past service appointments. When a user changes the status of an
                appointment, the appointment is automatically moved from the
                in-progress service appointment table to the service history
                table. The service history table can be filtered based on the
                automobile’s vehicle identification number (VIN).
              </div>
              <div className="text-md mb-6">
                AutomobileVO is a crucial entity required for the creation of a
                service appointment. It retrieves data from the automobile model
                within the Inventory API through the use of a poller. The poller
                is responsible for creating or updating instances of
                AutomobileVO with the corresponding VIN. This information is
                then used to determine if the customer scheduling an appointment
                is a VIP with the dealership.
              </div>
              <div className="text-md font-semibold mb-2">
                Sales Microservice
              </div>
              <div className="flex flex-col items-center text-md mb-2">
                Our Sales API is designed to handle automobile sales based on
                the automobiles registered with the Inventory API database. It
                offers a set of RESTful endpoints designed for the following
                entities:
                <div className="flex w-11/12 justify-content mt-2">
                  <ul className="list-disc">
                    <li className="mb-2">
                      <span className="font-semibold">Salesperson</span>:
                      Employees responsible for automobile sales
                    </li>
                    <li className="mb-2">
                      <span className="font-semibold">Customer</span>: Past and
                      potential customers for the dealership
                    </li>
                    <li className="mb-2">
                      <span className="font-semibold">Sale</span>: Contains all
                      the relevant information regarding each sale including the
                      sold automobile, salesperson, customer, and price
                    </li>
                    <li className="">
                      <span className="font-semibold">AutomobileVO</span>:
                      Models derived from the Inventory API’s Automobile
                      entities
                    </li>
                  </ul>
                </div>
              </div>
              <div className="text-md mb-2">
                For salesperson entities, users can view a list of salespeople
                associated with the dealership as well as create new instances
                of salespersons. Salesperson entities are referenced through the
                use of a foreign key when creating a record of a car sale.
              </div>
              <div className="text-md mb-2">
                For customer entities, users can view a list of all past and
                potential customers at the dealership as well as create new
                instances of customers. Customer entities are referenced through
                the use of a foreign key when creating a record of a car sale.
              </div>
              <div className="text-md mb-2">
                Regarding sale entities, users can create a sales instance, view
                a list of sales instances, and sort sales instances by the
                salesperson's full name. The sales entity requires data from all
                other entities within the sales microservice: the salesperson’s
                full name, the customer’s full name, and the automobile’s VIN.
              </div>
              <div className="text-md mb-6">
                Similar to the Service Microservice, the AutomobileVO contains
                data derived from our Inventory API that is obtained through the
                use of a poller. The poller here is also responsible for
                creating or updating instances of AutomobileVO with the
                corresponding VIN.
              </div>
              <img
                alt="..."
                src="http://athlr.github.io/portfolio/static/img/manucar-form.jpg"
                className="rounded-lg mb-2"
              />
              <div className="text-md italic mb-6 text-center">
                Common design for all forms utilized through Manucar
              </div>
              <img
                alt="..."
                src="http://athlr.github.io/portfolio/static/img/manucar-table.jpg"
                className="rounded-lg mb-2"
              />
              <div className="text-md italic mb-6 text-center">
                Common design for all viewable tables
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
