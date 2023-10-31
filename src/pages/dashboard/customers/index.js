import Sidebar from "../../../components/Sidebar";
import Banner from "./components/Banner";
// import General from "./components/General";
// import Notification from "./components/Notification";
// import Project from "./components/Project";
// import Storage from "./components/Storage";
import Upload from "./components/Upload";
import React from 'react'
// import Navbar from "../../../components/navbar";


function customers() {
  return (
    <Sidebar>
      <div className="flex w-full flex-col gap-5">
        <h1>Profile</h1>
      <div className="w-ful mt-3 flex h-fit flex-col gap-5 lg:grid lg:grid-cols-12">
        <div className="col-span-4 lg:!mb-0">
          <Banner />
        </div>

        {/* <div className="col-span-3 lg:!mb-0">
          <Storage />
        </div> */}

        <div className="z-0 col-span-5 lg:!mb-0">
          <Upload />
        </div>
      </div>
        {/* all project & ... */}

        <div className="grid h-full grid-cols-1 gap-5 lg:!grid-cols-12">
          {/* <div className="col-span-5 lg:col-span-6 lg:mb-0 3xl:col-span-4">
            <Project />
          </div>
          <div className="col-span-5 lg:col-span-6 lg:mb-0 3xl:col-span-5">
            <General />
          </div>

          <div className="col-span-5 lg:col-span-12 lg:mb-0 3xl:!col-span-3">
            <Notification />
          </div> */}
        </div>
      </div>
    </Sidebar>
  )
}

export default customers
// import React from 'react'
// import { BsPersonFill, BsThreeDotsVertical } from 'react-icons/bs'
// import { data } from '../../../data/data.js';
// import Sidebar from '../../../components/Sidebar'
// function customers() {
//   return (
//     <Sidebar>
//       <div className='bg-gray-100 min-h-screen'>

//         <div className='flex justify-between p-4'>
//           <h2>Customers</h2>
//           <h2>Welcome Back</h2>
//         </div>
//         <div className='p-4'>
//           <div className='w-full m-auto p-4 border rounded-lg bg-white overflow-y-auto'>
//             <div className='my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer'>
//               <span>Name</span>
//               <span className='sm:text-left text-right'>Email</span>
//               <span className='hidden md:grid'>Last Order</span>
//               <span className='hidden sm:grid'>Method</span>
//             </div>
//             <ul>
//               {data.map((order, id) => (
//                 <li key={id} className='bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer'>
//                   <div className='flex items-center'>
//                     <div className='bg-blue-100 p-3 rounded-lg'>
//                       <BsPersonFill className='text-custom-blue' />
//                     </div>
//                     <p className='pl-4'>{order.name.first + ' ' + order.name.last}</p>
//                   </div>
//                   <p className='text-gray-600 sm:text-left text-right'>{order.name.first}@gmail.com</p>
//                   <p className='hidden md:flex'>{order.date}</p>
//                   <div className='sm:flex hidden justify-between items-center'>
//                     <p>{order.method}</p>
//                     <BsThreeDotsVertical />
//                   </div>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </div>
//     </Sidebar>
//   )
// }

// export default customers