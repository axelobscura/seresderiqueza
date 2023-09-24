import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className='text-xl'>SERES DE RIQUEZA</h1>
      <h2>FINANZAS PERSONALES</h2>
      <hr className='mt-3 mb-3'/>
      <input type="text" className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full mt-3"></input>
    </main>
  )
}
