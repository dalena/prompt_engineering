"use client";
interface SectionProps {
    children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ children }) => {
    return (
        <div className="scrolly max-h-[100%] overflow-y-scroll lg:border-l-[1px] p-6 bg-gray-50 text-medium text-purpz-800 dark:text-gray-400 dark:bg-gray-800 w-full md:border-l-[0px]">
            {children}
        </div>
    );
};

export default Section;