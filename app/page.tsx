import Link from "next/link"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className='text-xl'>SERES DE RIQUEZA</h1>
      <h2><Link href='/'>FINANZAS PERSONALES</Link> | <Link href='/gastos'>GASTOS PERSONALES</Link></h2>
      <hr className='mt-3 mb-3'/>
      <div className='justify-left w-full'>
        <h3 className='text-xl mb-5 border-b border-gray-300'>INGRESOS</h3>
      </div>
      <div className='flex flex-row justify-between w-full'>
        <div className='w-full px-3'>
          <h3 className='text-lg'>REAL MES</h3>
          <h2>EMPLEO</h2>
          <input type="number" className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-gray-500 w-full mt-3 text-gray-900"></input>
          <h2 className='mt-3'>ADICIONALES</h2>
          <input type="number" className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-gray-500 w-full mt-3 text-gray-900"></input>
          <h2 className='mt-3'>COMISIONES</h2>
          <input type="number" className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-gray-500 w-full mt-3 text-gray-900"></input>
          <h2 className='mt-3'>VENTA DE ACTIVOS</h2>
          <input type="number" className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-gray-500 w-full mt-3 text-gray-900"></input>
          <h2 className='mt-3'>INGRESOS POR INVERSIONES</h2>
          <input type="number" className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-gray-500 w-full mt-3 text-gray-900"></input>
        </div>
        <div className='w-full px-3'>
          <h3 className='text-lg'>PRESUPUESTO MES</h3>
          <h2>EMPLEO</h2>
          <input type="number" className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-gray-500 w-full mt-3 text-gray-900"></input>
          <h2 className='mt-3'>ADICIONALES</h2>
          <input type="number" className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-gray-500 w-full mt-3 text-gray-900"></input>
          <h2 className='mt-3'>COMISIONES</h2>
          <input type="number" className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-gray-500 w-full mt-3 text-gray-900"></input>
          <h2 className='mt-3'>VENTA DE ACTIVOS</h2>
          <input type="number" className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-gray-500 w-full mt-3 text-gray-900"></input>
          <h2 className='mt-3'>INGRESOS POR INVERSIONES</h2>
          <input type="number" className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-gray-500 w-full mt-3 text-gray-900"></input>
        </div>
        <div className='w-full px-3'>
          <h3 className='text-lg'>OBJECTIVO %</h3>
          <h2>EMPLEO</h2>
          <input type="number" className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-gray-500 w-full mt-3 text-gray-900"></input>
          <h2 className='mt-3'>ADICIONALES</h2>
          <input type="number" className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-gray-500 w-full mt-3 text-gray-900"></input>
          <h2 className='mt-3'>COMISIONES</h2>
          <input type="number" className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-gray-500 w-full mt-3 text-gray-900"></input>
          <h2 className='mt-3'>VENTA DE ACTIVOS</h2>
          <input type="number" className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-gray-500 w-full mt-3 text-gray-900"></input>
          <h2 className='mt-3'>INGRESOS POR INVERSIONES</h2>
          <input type="number" className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-gray-500 w-full mt-3 text-gray-900"></input>
        </div>
      </div>
      <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mt-5 text-xl">
        CALCULAR
      </button>
        
      
      
      <hr className='mt-3 mb-3'/>
      
    </main>
  )
}
