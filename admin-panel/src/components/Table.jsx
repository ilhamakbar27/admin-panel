const data = [
  {
    id: 1,
    image:
      "https://robohash.org/laborumexplicabosoluta.png?size=50x50&set=set1",
    status: "Male",
    department: "Research and Development",
    activity: "11:01 PM",
    name: "Laird Pirri",
  },
  {
    id: 2,
    image: "https://robohash.org/voluptatumminussaepe.png?size=50x50&set=set1",
    status: "Female",
    department: "Training",
    activity: "2:36 AM",
    name: "Jannelle Fresson",
  },
  {
    id: 3,
    image: "https://robohash.org/inutquia.png?size=50x50&set=set1",
    status: "Male",
    department: "Research and Development",
    activity: "1:08 AM",
    name: "Alessandro Thorneloe",
  },
  {
    id: 4,
    image: "https://robohash.org/remconsequaturdolores.png?size=50x50&set=set1",
    status: "Male",
    department: "Services",
    activity: "1:00 PM",
    name: "Clint Chmiel",
  },
  {
    id: 5,
    image:
      "https://robohash.org/consequaturvoluptatemreprehenderit.png?size=50x50&set=set1",
    status: "Female",
    department: "Marketing",
    activity: "4:17 AM",
    name: "Jsandye Kempe",
  },
  {
    id: 6,
    image: "https://robohash.org/quisestnostrum.png?size=50x50&set=set1",
    status: "Male",
    department: "Marketing",
    activity: "3:07 AM",
    name: "Antone Grundle",
  },
  {
    id: 7,
    image: "https://robohash.org/undeeaquequam.png?size=50x50&set=set1",
    status: "Female",
    department: "Legal",
    activity: "9:23 PM",
    name: "Marnie Oppery",
  },
  {
    id: 8,
    image:
      "https://robohash.org/repellenduseavoluptatem.png?size=50x50&set=set1",
    status: "Male",
    department: "Sales",
    activity: "7:31 PM",
    name: "Cort Alliott",
  },
];
// import React from 'react';

const CustomersTable = () => {
  



  return (
    <section className=" text-gray-600  mb-10 ">
      <div className="flex flex-col  ">
        {/* Table */}
        <div className="w-full max-w-5xl  mx-10  bg-white shadow-lg rounded-sm border border-gray-200">
          <header className="px-5 py-4 border-b border-gray-100">
            <h2 className="font-semibold text-2xl text-gray-800">Customers</h2>
          </header>
          <div className="p-3">
            <div className="overflow-x-auto">
              <table className="table-auto w-full">
                <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                  <tr>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-left">Name</div>
                    </th>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-left">Email</div>
                    </th>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-left">Status</div>
                    </th>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-left">Department</div>
                    </th>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-left">Activity</div>
                    </th>
                    {/* <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-center">Country</div>
                      </th> */}
                  </tr>
                </thead>
                <tbody className="text-sm divide-y divide-gray-100">
                  {data?.map((el) => (
                    <tr key={el.id}>
                      <td  className="p-2 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                            <img
                              className="rounded-full"
                              src={el.image}
                              width="40"
                              height="40"
                            />
                          </div>
                          <div className="font-medium text-gray-800">
                            {el.name}
                          </div>
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left">{el.email}</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left font-medium text-green-500">
                          {el.status}
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-md text-left">{el.department}</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-md text-left">{el.activity}</div>
                      </td>
                    </tr>
                  ))}
                  {/* Add more rows here */}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomersTable;
