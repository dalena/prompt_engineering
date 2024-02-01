"use client";
import React, { createContext, useContext, useState, ReactNode } from 'react';
import SyllabusCreation from '@/app/pages/syllabus-creation';
import CreativeReference from '@/app/pages/creative-reference';
import MultiAgentPanel from '@/app/pages/multi-agent-panel';
import AnotherWindow from '@/app/pages/another-window-ss';

interface Technique {
    id: number;
    name: string;
    href: string;
    component: React.ComponentType<any>;
}

interface NavigationContextType {
    techniques: Technique[];
    activeTab: number;
    setActiveTab: (id: number) => void;
    isMenuOpen: boolean;
    setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export const useNavigation = () => {
    const context = useContext(NavigationContext);
    if (!context) {
        throw new Error('useNavigation must be used within a NavigationProvider');
    }
    return context;
};

export const NavigationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [activeTab, setActiveTab] = useState(0);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const techniques: Technique[] = [
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
            component: CreativeReference,
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
            component: AnotherWindow,
        },
    ];

    return (
        <NavigationContext.Provider value={{ techniques, activeTab, setActiveTab, isMenuOpen, setIsMenuOpen }}>
            {children}
        </NavigationContext.Provider>
    );
};