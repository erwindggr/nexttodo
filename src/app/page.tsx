import Link from 'next/link';

export default function Home() {
  return (
    <div className='w-full h-full m-auto flex'>
      <div className='m-auto flex flex-col p-10'>

        <h1
          className='mx-auto mb-10 text-4xl font-bold'
        >
          Welcome
        </h1>

        <Link
          href='/todo'
          className='mx-auto text-blue-500 hover:text-blue-900 text-2xl'
        >
          Todo-list
        </Link>

      </div>
    </div>
  );
}
