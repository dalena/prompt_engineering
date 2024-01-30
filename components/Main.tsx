import Nav from './Nav';
import Section from './Section';
const Main = () => {
    return (
        <main className="bg-purpz-100 flex justify-center items-center w-full min-h-[84vh]">
            <div className="w-full flex flex-row justify-center items-center">
                <div className="max-w-[1600px] w-3/4 bg-white rounded-lg border-[1px] border-purpz-600 shadow-2xl">
                    <Nav />
                </div>
            </div>
        </main>
    )
}

export default Main