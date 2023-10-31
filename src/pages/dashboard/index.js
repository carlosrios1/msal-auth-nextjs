import React from 'react'
import Header from '../../components/header'
import Sidebar from '../../components/Sidebar'
import Image from "next/image";
import TopCards from '../../components/TopCards';
import BarChart from '../../components/BarChart';
import RecentOrders from '../../components/RecentOrders';

function Dashboard() {
  return (
    <Sidebar>
      <div>
        <Header />
        <TopCards />
        <div className='p-4 grid md:grid-cols-3 grid-cols-1 gap-4'>
          <BarChart />
          <RecentOrders />
        </div>
      </div>
    </Sidebar>
  )
}

export default Dashboard