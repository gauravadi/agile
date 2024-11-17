
import proPic from '../assets/profile.jpg'
import { Sidebar } from "flowbite-react";
import { BiBuoy } from "react-icons/bi";
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards } from "react-icons/hi";
import { FaCloudUploadAlt } from "react-icons/fa";
import { useContext } from 'react';
import { AuthContext } from '../contects/AuthProvider';
const SideBar = () => {
  const {user}= useContext(AuthContext)
  return (
    <Sidebar aria-label="Sidebar with content separator example">
         <Sidebar.Logo href="#" img={proPic} imgAlt="Flowbite logo">
        Flowbite
      </Sidebar.Logo>
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="/admin/dashboard" icon={HiChartPie}>
            Dashboard
          </Sidebar.Item>
          <Sidebar.Item href="/admin/dashboard/upload" icon={FaCloudUploadAlt}>
            Upload Book
          </Sidebar.Item>
          <Sidebar.Item href="/admin/dashboard/manage" icon={HiInbox}>
            Manage Books
          </Sidebar.Item>
        
          <Sidebar.Item href="/shop" icon={HiShoppingBag}>
            Products
          </Sidebar.Item>
          <Sidebar.Item href="/login" icon={HiArrowSmRight}>
            Sign In
          </Sidebar.Item>
          <Sidebar.Item href="/logout" icon={HiTable}>
            Log Out
          </Sidebar.Item>
        </Sidebar.ItemGroup>
        
      </Sidebar.Items>
    </Sidebar>
  )
}

export default SideBar