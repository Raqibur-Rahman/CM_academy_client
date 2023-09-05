import React, { useState } from 'react';
import { CiViewList } from 'react-icons/ci';

const WithdrawRequest = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <h1 className="text-2xl">Withdraw request by instructors to admin</h1>
      <table className="table-auto w-full">
      <thead>
            <tr className="bg-gray-100 text-[#1bbf72ee] font-bold text-lg divide-x-2">
              <th className="px-4 py-2">Sl</th>
              <th className="px-4 py-2">Instructor name</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Contact</th>
              <th className="px-4 py-2">Bank details</th>
              <th className="px-4 py-2">Withdraw amount</th>
              <th className="px-4 py-2">Status</th>
            </tr>
          </thead>
        <tbody>
          <tr className="text-center font-semibold text-sm font-Lexend">
            <td className="border px-4 py-2">1</td>
            <td className="border px-4 py-2">Md. Tareq Ibna Rahman</td>
            <td className="border px-4 py-2">tirahman105@gmail.com</td>
            <td className="border px-4 py-2">01614048774</td>
            <td className="border px-4 py-2 ">
              <button onClick={handleOpenModal}>
                <CiViewList className="text-5xl" />
              </button>
             
            </td>
            <td className="border px-6 py-2">6000 tk</td>
            <td className="border px-6 py-2">
  <select className="block w-full px-4 py-2 border rounded-md shadow-sm focus:ring focus:ring-opacity-50">
    <option className="p-2" value="pending">Pending</option>
    <option value="complete">Complete</option>
  </select>
</td>

          </tr>
        </tbody>
      </table>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="modal modal-bottom sm:modal-middle" open>
            <div method="dialog" className="modal-box bg-slate-200">
            <div className='flex gap-3 items-center mx-auto mb-2'>
                <h1 className='w-1/2'>Account holder Name</h1>
                <input type="text" placeholder="" defaultValue="Md. Tareq Ibna Rahman" className="w-1/2 input input-bordered h-8" />
            </div>
            <div className='flex gap-3 items-center mx-auto mb-2'>
                <h1 className='w-1/2'>Account No.</h1>
                <input type="text" placeholder="" defaultValue="02678358929001" className="w-1/2 input input-bordered h-8" />
            </div>
            <div className='flex gap-3 items-center mx-auto mb-2'>
                <h1 className='w-1/2'>Routing Number</h1>
                <input type="text" placeholder="" defaultValue="6394790" className="w-1/2 input input-bordered h-8" />
            </div>
            <div className='flex gap-3 items-center mx-auto mb-2'>
                <h1 className='w-1/2'>Bank Name</h1>
                <input type="text" placeholder="" defaultValue="Exim Bank" className="w-1/2 input input-bordered h-8" />
            </div>
            <div className='flex gap-3 items-center mx-auto mb-2'>
                <h1 className='w-1/2'>Bank Branch Name</h1>
                <input type="text" placeholder="" defaultValue="Bashundhara Branch" className="w-1/2 input input-bordered h-8" />
            </div>
            <div className='flex gap-3 items-center mx-auto mb-2'>
                <h1 className='w-1/2'>Phone Number</h1>
                <input type="text" placeholder="" defaultValue="01614048774" className="w-1/2 input input-bordered h-8" />
            </div>
              <div className="modal-action">
                <button type="button" className="btn btn-error" onClick={handleCloseModal}>
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WithdrawRequest;
