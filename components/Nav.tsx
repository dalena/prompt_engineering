"use client";
import { usePathname } from 'next/navigation'

import Link from 'next/link';


const techniques = [
    {
        id: 0,
        name: 'Syllabus Creation',
        href: '/syllabus-creation',
    },
    {
        id: 1,
        name: 'Visualization for Creative Reference',
        href: '/iterative-refinement',
    },
    {
        id: 2,
        name: 'Multi-Agent Dinner Party Discussion',
        href: '/multi-agent-panel',
    },
    {
        id: 3,
        name: 'Short Story: Another Window',
        href: '/another-window-ss',
    },
];

interface NavProps {
    callback?: () => void
    isMenuOpen?: boolean
}

const Nav: React.FC<NavProps> = ({ callback, isMenuOpen }) => {
    const pathname = usePathname()

    return (
        <div className={isMenuOpen ? "nav-container nav-visible" : "nav-container"}>
            <ul className="promptMenu min-w-[250px] min-h-[100%] flex flex-col rounded-lg border-l-8 space-y-4 text-sm font-medium text-purpz-800 bg-purpz-50 dark:text-gray-400 mb-4 md:mb-0">
                {techniques.map((technique) => (
                    <li key={technique.id}>
                        <Link href={technique.href} className={`font-sans transition-colors ease-in-out delay-50 duration-300 inline-flex items-center px-8 py-3 w-full hover:bg-purpz-300 hover:text-purpz-800 ${pathname === technique.href || (pathname === '/' && technique.id === 0) ? 'bg-purpz-300 text-purpz-800 font-bold' : 'text-purpz-400 dark:bg-blue-600'}`}
                            onClick={(e) => {
                                callback && callback();
                            }}>
                            {technique.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Nav;