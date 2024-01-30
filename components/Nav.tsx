"use client";
import Link from 'next/link';
import { useState } from 'react';
import SyllabusCreation from '@/app/syllabus-creation/page';
import ZeroShot from '@/app/prompt-a/page';
import ChainThought from '@/app/chain-of-thought/page';
import SelfConsistency from '@/app/self-consistency/page';
import GenKnowledge from '@/app/generate-knowledge/page';
import PromptChain from '@/app/prompt-chaining/page';
import TreeofThoughts from '@/app/tree-of-thoughts/page';
import RetrievalAug from '@/app/retrieval-augmented-generation/page';
import AutoReason from '@/app/automatic-reasoning-and-tool-use/page';
import AutomaticPromptEngineer from '@/app/automatic-prompt-engineer/page';

const techniques = [
    {
        id: 0,
        name: 'Syllabus Creation',
        href: '/prompt-b',
        component: SyllabusCreation
    },
    {
        id: 1,
        name: 'Iterative Refinement',
        href: '/prompt-a',
        component: ZeroShot
    }
    // {
    //     id: 2,
    //     name: 'Chain-of-Thought',
    //     href: '/chain-of-thought',
    //     component: ChainThought
    // },
    // {
    //     id: 3,
    //     name: 'Self-Consistency',
    //     href: '/self-consistency',
    //     component: SelfConsistency
    // },
    // {
    //     id: 4,
    //     name: 'Generate Knowledge',
    //     href: '/generate-knowledge',
    //     component: GenKnowledge
    // },
    // {
    //     id: 5,
    //     name: 'Prompt Chaining',
    //     href: '/prompt-chaining',
    //     component: PromptChain
    // },
    // {
    //     id: 6,
    //     name: 'Tree of Thoughts',
    //     href: '/tree-of-thoughts',
    //     component: TreeofThoughts
    // },
    // {
    //     id: 7,
    //     name: 'Retrieval Augmented Generation',
    //     href: '/retrieval-augmented-generation',
    //     component: RetrievalAug
    // },
    // {
    //     id: 8,
    //     name: 'Automatic Reasoning and Tool-use',
    //     href: '/automatic-reasoning-and-tool-use',
    //     component: AutoReason
    // },
    // {
    //     id: 9,
    //     name: 'Automatic Prompt Engineer',
    //     href: '/automatic-prompt-engineer',
    //     component: AutomaticPromptEngineer
    // }
];

const Nav = () => {
    const [activeTab, setActiveTab] = useState(0);
    const DefaultComponent = () => <div>Select a technique</div>;
    const ActiveComponent = techniques.find(tech => tech.id === activeTab)?.component || DefaultComponent;

    return (
        <div className="md:flex w-50 container max-h-[80vh]">
            <ul className=" flex-column rounded-l-lg border-l-8 w-[40%] space-y-4 text-sm font-medium text-purpz-800 bg-purpz-50 dark:text-gray-400  mb-4 md:mb-0">
                {techniques.map((technique) => (
                    <li key={technique.id}>
                        <Link href={technique.href} className={`font-sans inline-flex items-center px-8 py-3 active w-full ${activeTab === technique.id ? 'bg-purpz-300 text-purpz-0 font-bold' : 'text-purpz-400 dark:bg-blue-600'}`}
                            onClick={(e) => {
                                e.preventDefault();
                                setActiveTab(technique.id);
                            }}>
                            {technique.name}
                        </Link>
                    </li>
                ))}
            </ul>
            <div className="max-h-[100%] overflow-y-scroll border-l-[1px] p-6 bg-gray-50 text-medium text-purpz-800  dark:text-gray-400 dark:bg-gray-800 w-full">
                <ActiveComponent />
            </div>
        </div>
    );
};

export default Nav;