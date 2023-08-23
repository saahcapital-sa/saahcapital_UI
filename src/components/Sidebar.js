import Link from 'next/link'
import React from 'react'
import { Button, Image, Dropdown } from 'react-bootstrap'
import { BiGridAlt } from 'react-icons/bi';
import { MdOutlineAdminPanelSettings, MdOutlineAccountBalanceWallet, MdLogout, MdUnfoldLess } from 'react-icons/md';
import {FiChevronDown} from 'react-icons/fi';
import {IoSettingsOutline} from 'react-icons/io5';
import {FaRegUser} from 'react-icons/fa';
import { useRouter } from 'next/router';

const Sidebar = ({foldSidebar, setFoldSidebar}) => {
    const router = useRouter();
    
    return (
        <div className='sidebar'>
            <div className='sidebarInner'>
                <Link href="/" className='sidebarLogo'>
                    {foldSidebar ?  <Image src="images/sbd-mini-logo.svg" className='miniLogo' /> : <Image src="images/sbd-logo.png" className='logo' />}
                </Link>
                <Button className='foldSidebar' onClick={() => {setFoldSidebar(!foldSidebar)}}><MdUnfoldLess /></Button>
                <h6>Menu</h6>
                <div className='dashboardLink'>
                    <Link href="/" className={router.pathname === '/' ? 'active' : ''}>
                        <BiGridAlt /> Dashboard
                    </Link>
                    <Link href="/addFund" className={router.pathname === '/addFund' ? 'active' : ''}>
                        <MdOutlineAdminPanelSettings />Funds Administrative
                    </Link>
                    <Link href="/fundRequest" className={router.pathname === '/fundRequest' ? 'active' : ''}>
                        <FaRegUser /> Fund Request
                    </Link>
                    <Link href="/client" className={router.pathname === '/client' ? 'active' : ''}>
                        <FaRegUser /> Client Database
                    </Link>
                    {/* <Dropdown className={router.pathname === '/fundWallet' ? 'active' : '' || router.pathname === '/overview' ? 'active' : ''}>
                        <Dropdown.Toggle>
                            <MdOutlineAccountBalanceWallet />Wallet <FiChevronDown/>
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item href="/fundWallet" className={router.pathname === '/fundWallet' ? 'active' : ''}>Fund Wallet</Dropdown.Item>
                            <Dropdown.Item href="/overview" className={router.pathname === '/overview' ? 'active' : ''}>Overview</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown> */}
                    <Link href="/wallet" className={router.pathname === '/wallet' ? 'active' : ''}>
                        <MdOutlineAccountBalanceWallet />Wallet
                    </Link>
                    <Link href="/profile" className={router.pathname === '/profile' ? 'active' : ''}>
                        <IoSettingsOutline/> Settings
                    </Link>
                </div>
            </div>
            <Button type='button' className='logoutBtn'>
                <MdLogout /> Logout
            </Button>
        </div>
    )
}

export default Sidebar