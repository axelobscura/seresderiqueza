import Link from "next/link"

export default function Gastos() {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center p-24">
        <h1 className='text-xl'>SERES DE RIQUEZA</h1>
        <h2><Link href='/' className='text-gray-500 hover:text-gray-700'>FINANZAS PERSONALES</Link> | <Link href='/gastos' className='text-gray-500 hover:text-gray-700'>GASTOS PERSONALES</Link></h2>
        <hr className='mt-3 mb-3'/>
        <div className='justify-left w-full'>
            <h3 className='text-xl mb-5 border-b border-gray-300'>GASTOS</h3>
        </div>
      </main>
    )
}