import Link from 'next/link';

 const Header = () => {
  return (
    <header className="mx-auto px-4 bg-purpz-100 text-purpz-900 flex flex-col justify-center items-center h-[8vh]">
        <Link href="/"><h1 className="text-2xl font-bold">Prompt Engineering Examples</h1></Link>
        <h2>by Dalena Tran</h2>
    </header>
  )
}

export default Header;
