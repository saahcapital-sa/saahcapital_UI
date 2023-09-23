import Link from 'next/link'
import React from 'react'
import { Button, Image, Dropdown } from 'react-bootstrap'
import { BiGridAlt } from 'react-icons/bi';
import { MdOutlineAdminPanelSettings, MdOutlineAccountBalanceWallet, MdLogout, MdUnfoldLess } from 'react-icons/md';
import { IoSettingsOutline } from 'react-icons/io5';
import { TbCoins } from 'react-icons/tb';
import { useRouter } from 'next/router';
import { LiaNewspaper } from 'react-icons/lia';

const Sidebar = ({foldSidebar, setFoldSidebar}) => {
    const router = useRouter();
    
    return (
        <div className='sidebar'>
            <div className='sidebarInner'>
                <Link href="/" className='sidebarLogo'>
                    {foldSidebar ?  <Image src="images/saah-financial-logo-small.svg" className='miniLogo' /> : <Image src="images/saah-financial-logo-white.svg" className='logo' />}
                </Link>
                <Button className='foldSidebar' onClick={() => {setFoldSidebar(!foldSidebar)}}><MdUnfoldLess /></Button>
                <h6>Menu</h6>
                <div className='dashboardLink'>
                    <Link href="/" className={router.pathname === '/' ? 'active' : ''}>
                        <BiGridAlt /> Dashboard
                    </Link>
                    <Link href="/addFund" className={router.pathname === '/addFund' || router.pathname === '/manageFund' || router.pathname === '/fundDetails' || router.pathname === '/editFund' ? 'active' : ''}>
                        <MdOutlineAdminPanelSettings />Funds Administrative
                    </Link>
                    <Link href="/fundRequests" className={router.pathname === '/fundRequests' || router.pathname === '/viewFundRequests' ? 'active' : ''}>
                        <LiaNewspaper /> Fund Request
                    </Link>
                    <Link href="/clients" className={router.pathname === '/clients' || router.pathname === '/clientsDetails' || router.pathname === '/transactionHistory' ? 'active' : '' }>
                        <TbCoins /> Client Database
                    </Link>
                    <Link href="/wallet" className={router.pathname === '/wallet'  || router.pathname === '/transactionDetails' ? 'active' : ''}>
                        <MdOutlineAccountBalanceWallet />Wallet
                    </Link>
                    <Link href="/profile" className={router.pathname === '/profile' || router.pathname === '/support' || router.pathname === '/viewSupport' || router.pathname === '/history' || router.pathname === '/securityPrivacy' || router.pathname === '/termCondition' ? 'active' : ''}>
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