import React from 'react'
import Link from 'next/link';
import { useRouter } from 'next/router';

const SettingSidebar = () => {
    const router = useRouter();
    return (
        <ul className="settingSidebar">
            <li><Link href="/profile" className={router.pathname === '/profile' ? 'active' : ''}>Profile</Link></li>
            <li><Link href="/support" className={router.pathname === '/support' ? 'active' : '' || router.pathname === '/viewSupport' ? 'active' : ''}>Support</Link></li>
            <li><Link href="/history" className={router.pathname === '/history' ? 'active' : ''}>History</Link></li>
            <li><Link href="/securityPrivacy" className={router.pathname === '/securityPrivacy' ? 'active' : ''}>Security & Privacy</Link></li>
            <li><Link href="/termCondition" className={router.pathname === '/termCondition' ? 'active' : ''}>Term & Condition</Link></li>
        </ul>
    )
}

export default SettingSidebar