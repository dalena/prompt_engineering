"use client";
import { useNavigation } from '../context/NavigationContext';
import Link from 'next/link';
interface Technique {
    id: number;
    name: string;
    href: string;
    component: React.ComponentType<any>;
}
interface NavProps {
    isMenuOpen: boolean;
    techniques: Technique[];
    activeTab: number;
    setActiveTab: (id: number) => void;
}

const Nav = () => {
    const { techniques, activeTab, setActiveTab, isMenuOpen } = useNavigation();
    return (
        <div className={isMenuOpen ? "nav-container nav-visible" : "nav-container"}>
            <ul className="promptMenu h-[100%] flex flex-col rounded-lg border-l-8 space-y-4 text-sm font-medium text-purpz-800 bg-purpz-50 dark:text-gray-400 mb-4 md:mb-0">
                {techniques.map((technique) => (
                    <li key={technique.id}>
                        <Link href={technique.href} className={`font-sans inline-flex items-center px-8 py-3 w-full ${activeTab === technique.id ? 'bg-purpz-300 text-purpz-800 font-bold' : 'text-purpz-400 dark:bg-blue-600'}`}
                            onClick={(e) => {
                                e.preventDefault();
                                setActiveTab(technique.id);
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