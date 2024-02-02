"use client";
import Nav from './Nav';
import Section from './Section';

interface MainProps {
    children: React.ReactNode;
}

const Main: React.FC<MainProps> = ({ children }) => {
    // const { techniques, activeTab } = useNavigation();
    // const ActiveComponent = techniques.find(tech => tech.id === activeTab)?.component || (() => <div>Select a technique</div>);

    return (
        <main className="bg-purpz-100 w-full flex justify-center items-center min-h-[84vh]">
            <div className="promptCont w-full flex justify-center items-center ">
                <div className="max-w-[1300px] max-h-[84vh] rounded-lg border-[1px] border-purpz flex flex-row w-3/4 bg-white  shadow-2xl">
                    <Nav />
                    <Section>
                        {children}
                    </Section>
                </div>
            </div>
        </main>
    );
};

export default Main;