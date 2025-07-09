const SubscriptionPage = () => (
  <div className="p-8">
    <h1 className="text-3xl font-medium text-gray-800 mb-18">Subscription</h1>

    <div className="w-full mt-12 sm:flex justify-self-end sm:w-auto">
      <input
        type="text"
        className="border border-gray-300 rounded-lg py-2 px-4 bg-stone-700 text-gray-200 outline-none focus:outline-blue-600 outline w-full sm:w-auto"
        placeholder="Search name..."
      />
    </div>

    <div className="mt-6 overflow-x-auto">
      <table className="w-full divide-y divide-gray-200">
        <thead className="bg-gray-200">
          <tr>
            <th className="px-5 py-3 w-1/4 text-left text-sm font-bold text-gray-600 uppercase tracking-wider">
              Name
            </th>
            <th className="px-5 py-3 text-left text-sm font-bold text-gray-600 uppercase tracking-wider w-1/20">
              Amount
            </th>
            <th className="px-5 py-3 text-left text-sm font-bold text-gray-600 uppercase tracking-wider w-1/20">
              Plan
            </th>
            <th className="px-5 py-3 text-left text-sm font-bold text-gray-600 uppercase tracking-wider w-1/20">
              Country
            </th>
            <th className="px-5 py-3 text-left text-sm font-bold text-gray-600 uppercase tracking-wider w-1/20">
              Subscription Date
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {/* Add rows here */}
          {[
            {
              name: "The Grace place,CGMi",
              email: "aigbogunchris@gmail.com",
              phone: "+2348064371526",
              plan: "Basic plan",
              country: "Nigeria",
              subscriptionDate: "08/07/2025",
            },
            {
              name: "Zone 3",
              email: "zone_3_3@paguganda.org",
              phone: "",
              plan: "Starter plan",
              country: "Uganda",
              subscriptionDate: "08/07/2025",
            },
            {
              name: "RCCG The Faith City",
              email: "rccgthefaithcity@gmail.com",
              phone: "+234 803 200 0998",
              plan: "Starter plan",
              country: "Nigeria",
              subscriptionDate: "07/07/2025",
            },
            {
              name: "Anglican Church of the Nativity",
              email: "churchofdnativity@gmail.com",
              phone: "+2348120492095",
              plan: "Growth plan",
              country: "Nigeria",
              subscriptionDate: "07/07/2025",
            },
            {
              name: "EVANGELICAL ANGLICAN CHURCH OF THE TRINITY ELEBU",
              email: "evacotmediaelebu@gmail.com",
              phone: "+2348064814342",
              plan: "Starter plan",
              country: "Nigeria",
              subscriptionDate: "06/07/2025",
            },
          ].map((subscription, index) => (
            <tr key={index}>
              <td className="px-5 py-4  text-sm text-gray-700">
                <div className="text-sm font-medium text-gray-900">
                  {subscription.name}
                </div>
                <div className="text-sm text-gray-500">
                  {subscription.email}
                </div>
              </td>
              <td className="px-5 py-4 w-30px text-sm text-gray-700">
                {subscription.phone}
              </td>
              <td className="px-5 py-4 w-30px text-sm text-gray-700 uppercase">
                {subscription.plan}
              </td>
              <td className="px-5 py-4 w-30px text-sm text-gray-700">
                {subscription.country}
              </td>
              <td className="px-5 py-4 w-30px text-sm text-gray-700">
                {subscription.subscriptionDate}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    {/* <div>
      <table className="w-full divide-y divide-gray-200">
        <thead className="bg-gray-200">
          <tr>
            <th className="px-5 py-3 w-1/4 text-left text-sm font-bold text-gray-600 uppercase tracking-wider">
              Name
            </th>
            <th className="px-5 py-3 text-left text-sm font-bold text-gray-600 uppercase tracking-wider w-1/10">
              Amount
            </th>
            <th className="px-5 py-3 text-left text-sm font-bold text-gray-600 uppercase tracking-wider w-1/20">
              Plan
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          <tr>
            <td className="px-5 py-4  text-sm text-gray-700">
              <div className="text-sm font-medium text-gray-900">
                Harvesters Church, Abuja
              </div>
            </td>
            <td className="text-sm px-5 py-4 text-gray-500">Basic</td>
            <td className="px-5 py-4  text-sm text-gray-700">Active</td>
          </tr>
          <tr>
            <td className="px-5 py-4  text-sm text-gray-700">
              <div className="text-sm font-medium text-gray-900">
                Harvesters Church, Abuja
              </div>
            </td>
            <td className="text-sm px-5 py-4 text-gray-500">Basic</td>
            <td className="px-5 py-4 w-30px text-sm text-gray-700">Active</td>
          </tr>
          <tr>
            <td className="px-5 py-4  text-sm text-gray-700">
              <div className="text-sm font-medium text-gray-900">
                Harvesters Church, Abuja
              </div>
            </td>
            <td className="text-sm px-5 py-4 text-gray-500">Basic</td>
            <td className="px-5 py-4 w-30px text-sm text-gray-700">Active</td>
          </tr>
          <tr>
            <td className="px-5 py-4  text-sm text-gray-700">
              <div className="text-sm font-medium text-gray-900">
                Harvesters Church, Abuja
              </div>
            </td>
            <td className="text-sm px-5 py-4 text-gray-500">Basic</td>
            <td className="px-5 py-4 w-30px text-sm text-gray-700">Active</td>
          </tr>
          <tr>
            <td className="px-5 py-4  text-sm text-gray-700">
              <div className="text-sm font-medium text-gray-900">
                Harvesters Church, Abuja
              </div>
            </td>
            <td className="text-sm px-5 py-4 text-gray-500">Basic</td>
            <td className="px-5 py-4 w-30px text-sm text-gray-700">Active</td>
          </tr>
          <tr>
            <td className="px-5 py-4  text-sm text-gray-700">
              <div className="text-sm font-medium text-gray-900">
                Harvesters Church, Abuja
              </div>
            </td>
            <td className="text-sm px-5 py-4 text-gray-500">Basic</td>
            <td className="px-5 py-4 w-30px text-sm text-gray-700">Active</td>
          </tr>
        </tbody>
      </table>
    </div> */}
  </div>
);

export default SubscriptionPage;
