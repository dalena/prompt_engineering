"use client";
import Link from 'next/link';
import { useState } from 'react';
import SyllabusCreation from '@/app/pages/syllabus-creation';
import CreativeReference from '@/app/pages/creative-reference';
import MultiAgentPanel from '@/app/pages/multi-agent-panel';
import anotherWindow from '@/app/pages/another-window-ss';

const techniques = [
    {
        id: 0,
        name: 'Syllabus Creation',
        href: '/syllabus-creation',
        component: SyllabusCreation,
    },
    {
        id: 1,
        name: 'Visualization for Creative Reference',
        href: '/iterative-refinement',
        component: CreativeReference
    },
    {
        id: 2,
        name: 'Multi-Agent Dinner Party Discussion',
        href: '/multi-agent-panel',
        component: MultiAgentPanel,
    },
    {
        id: 3,
        name: 'Short Story: Another Window',
        href: '/another-window-ss',
        component: anotherWindow,
    },
];

const Nav = () => {
    const [activeTab, setActiveTab] = useState(0);
    const DefaultComponent = () => <div>Select a technique</div>;
    const ActiveComponent = techniques.find(tech => tech.id === activeTab)?.component || DefaultComponent;

    return (
        <div className="md:flex w-50 container max-h-[80vh]">
            <ul className="flex-column rounded-l-lg border-l-8 w-[40%] space-y-4 text-sm font-medium text-purpz-800 bg-purpz-50 dark:text-gray-400  mb-4 md:mb-0">
                {techniques.map((technique) => (
                    <li key={technique.id}>
                        <Link href="" className={`font-sans inline-flex items-center px-8 py-3 active w-full ${activeTab === technique.id ? 'bg-purpz-300 text-purpz-0 font-bold' : 'text-purpz-400 dark:bg-blue-600'}`}
                            onClick={(e) => {
                                e.preventDefault();
                                setActiveTab(technique.id);
                            }}>
                            {technique.name}
                        </Link>
                    </li>
                ))}
            </ul>
            <div className="scrolly max-h-[100%] overflow-y-scroll border-l-[1px] p-6 bg-gray-50 text-medium text-purpz-800  dark:text-gray-400 dark:bg-gray-800 w-full">
                <ActiveComponent />
            </div>
        </div>
    );
};

export default Nav;