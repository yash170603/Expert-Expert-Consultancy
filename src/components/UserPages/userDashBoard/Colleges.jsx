import React, { useState } from 'react';

const Colleges = () => {
  const collegeData = [
    { no: 1, name: 'AIIMS Delhi', state: 'Delhi', established: 1956, intake: 125, status: 'Approved', fee: 5856 },
    { no: 2, name: 'CMC Vellore', state: 'Tamil Nadu', established: 1918, intake: 100, status: 'Approved', fee: 50000 },
    { no: 3, name: 'Kasturba Medical College', state: 'Karnataka', established: 1953, intake: 250, status: 'Approved', fee: 1440000 },
    { no: 4, name: 'JIPMER', state: 'Puducherry', established: 1956, intake: 200, status: 'Approved', fee: 16200 },
    { no: 5, name: 'Grant Medical College', state: 'Maharashtra', established: 1845, intake: 200, status: 'Approved', fee: 50000 },
    { no: 6, name: 'BJ Medical College', state: 'Gujarat', established: 1946, intake: 250, status: 'Approved', fee: 30000 },
    { no: 7, name: 'King George Medical University', state: 'Uttar Pradesh', established: 1905, intake: 250, status: 'Approved', fee: 54000 },
    { no: 8, name: 'Madras Medical College', state: 'Tamil Nadu', established: 1835, intake: 250, status: 'Approved', fee: 13610 },
    { no: 9, name: 'Osmania Medical College', state: 'Telangana', established: 1846, intake: 200, status: 'Approved', fee: 30000 },
    { no: 10, name: 'GMC Chandigarh', state: 'Chandigarh', established: 1991, intake: 150, status: 'Approved', fee: 25000 },
    { no: 11, name: 'Maulana Azad Medical College', state: 'Delhi', established: 1959, intake: 250, status: 'Approved', fee: 15000 },
    { no: 12, name: 'Seth GS Medical College', state: 'Maharashtra', established: 1926, intake: 200, status: 'Approved', fee: 60000 },
    { no: 13, name: 'Lokmanya Tilak Municipal Medical College', state: 'Maharashtra', established: 1964, intake: 200, status: 'Approved', fee: 50000 },
    { no: 14, name: 'Stanley Medical College', state: 'Tamil Nadu', established: 1938, intake: 250, status: 'Approved', fee: 13610 },
    { no: 15, name: 'Topiwala National Medical College', state: 'Maharashtra', established: 1921, intake: 150, status: 'Approved', fee: 52000 },
    { no: 16, name: 'AIIMS Bhopal', state: 'Madhya Pradesh', established: 2012, intake: 100, status: 'Approved', fee: 5856 },
    { no: 17, name: 'AIIMS Jodhpur', state: 'Rajasthan', established: 2012, intake: 100, status: 'Approved', fee: 5856 },
    { no: 18, name: 'AIIMS Bhubaneswar', state: 'Odisha', established: 2012, intake: 100, status: 'Approved', fee: 5856 },
    { no: 19, name: 'AIIMS Rishikesh', state: 'Uttarakhand', established: 2012, intake: 100, status: 'Approved', fee: 5856 },
    { no: 20, name: 'AIIMS Raipur', state: 'Chhattisgarh', established: 2012, intake: 100, status: 'Approved', fee: 5856 },
    { no: 21, name: 'AIIMS Patna', state: 'Bihar', established: 2012, intake: 100, status: 'Approved', fee: 5856 },
    { no: 22, name: 'Bangalore Medical College', state: 'Karnataka', established: 1955, intake: 250, status: 'Approved', fee: 60000 },
    { no: 23, name: 'Calcutta National Medical College', state: 'West Bengal', established: 1948, intake: 200, status: 'Approved', fee: 30000 },
    { no: 24, name: 'Medical College Kolkata', state: 'West Bengal', established: 1835, intake: 250, status: 'Approved', fee: 20000 },
    { no: 25, name: 'Gandhi Medical College', state: 'Telangana', established: 1954, intake: 250, status: 'Approved', fee: 40000 },
    { no: 26, name: 'Indira Gandhi Medical College', state: 'Himachal Pradesh', established: 1966, intake: 100, status: 'Approved', fee: 50000 },
    { no: 27, name: 'Dr. DY Patil Medical College', state: 'Maharashtra', established: 1996, intake: 200, status: 'Approved', fee: 1800000 },
    { no: 28, name: 'Kalinga Institute of Medical Sciences', state: 'Odisha', established: 2007, intake: 150, status: 'Approved', fee: 1500000 },
    { no: 29, name: 'SRM Medical College', state: 'Tamil Nadu', established: 2005, intake: 250, status: 'Approved', fee: 2100000 },
    { no: 30, name: 'KJ Somaiya Medical College', state: 'Maharashtra', established: 1991, intake: 150, status: 'Approved', fee: 1200000 },
    { no: 31, name: 'MGM Medical College', state: 'Maharashtra', established: 1989, intake: 250, status: 'Approved', fee: 1600000 },
    { no: 32, name: 'Sri Ramachandra Medical College', state: 'Tamil Nadu', established: 1985, intake: 250, status: 'Approved', fee: 2200000 },
    { no: 33, name: 'Hamdard Institute of Medical Sciences', state: 'Delhi', established: 2012, intake: 150, status: 'Approved', fee: 1200000 },
    { no: 34, name: 'Manipal College of Medical Sciences', state: 'Karnataka', established: 1953, intake: 250, status: 'Approved', fee: 1440000 },
    { no: 35, name: 'Meenakshi Medical College', state: 'Tamil Nadu', established: 2003, intake: 150, status: 'Approved', fee: 1100000 }
    ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const [maxFee, setMaxFee] = useState(1500000);
  const [selectedState, setSelectedState] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredColleges = collegeData.filter(college => 
    college.fee <= maxFee &&
    (selectedState === '' || college.state === selectedState) &&
    college.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredColleges.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentColleges = filteredColleges.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold text-center mb-6">College List</h1>
      <div className="mb-4 p-4 bg-white shadow-md rounded-lg">
        <label className="block mb-2">Max Fee: ₹{maxFee.toLocaleString()}</label>
        <input 
          type="range" 
          min="5000" 
          max="1500000" 
          value={maxFee} 
          onChange={(e) => setMaxFee(Number(e.target.value))} 
          className="w-full"
        />

        <label className="block mt-4 mb-2">State:</label>
        <select 
          className="w-full p-2 border rounded" 
          value={selectedState} 
          onChange={(e) => setSelectedState(e.target.value)}
        >
          <option value="">All States</option>
          {[...new Set(collegeData.map(college => college.state))].map(state => (
            <option key={state} value={state}>{state}</option>
          ))}
        </select>

        <label className="block mt-4 mb-2">Search College:</label>
        <input 
          type="text" 
          className="w-full p-2 border rounded" 
          placeholder="Enter college name..." 
          value={searchTerm} 
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full border-collapse shadow-lg rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-blue-600 text-white">
              <th className="py-3 px-4">No.</th>
              <th className="py-3 px-4">College Name</th>
              <th className="py-3 px-4">State</th>
              <th className="py-3 px-4">Established</th>
              <th className="py-3 px-4">Annual Seat Intake</th>
              <th className="py-3 px-4">Status of NMC/MCI</th>
              <th className="py-3 px-4">Tuition Fee (₹/annum)</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {currentColleges.map((college, index) => (
              <tr key={index} className="border-b hover:bg-gray-200">
                <td className="py-3 px-4 text-center">{college.no}</td>
                <td className="py-3 px-4">{college.name}</td>
                <td className="py-3 px-4">{college.state}</td>
                <td className="py-3 px-4 text-center">{college.established}</td>
                <td className="py-3 px-4 text-center">{college.intake}</td>
                <td className="py-3 px-4 text-center">{college.status}</td>
                <td className="py-3 px-4 text-center">₹{college.fee.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="flex justify-center mt-4">
        <button 
          onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))} 
          className="mx-2 px-4 py-2 bg-blue-500 text-white rounded-lg disabled:opacity-50"
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span className="px-4 py-2">Page {currentPage} of {totalPages}</span>
        <button 
          onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))} 
          className="mx-2 px-4 py-2 bg-blue-500 text-white rounded-lg disabled:opacity-50"
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Colleges;