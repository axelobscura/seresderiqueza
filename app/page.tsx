import Link from "next/link"
import Accordion from "./components/Accordion"
import { BeakerIcon, RocketLaunchIcon, MegaphoneIcon } from '@heroicons/react/24/solid'


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className='text-xl'>SERES DE RIQUEZA</h1>
      <h2><Link href='/' className='text-gray-500 hover:text-gray-700'>FINANZAS PERSONALES</Link> | <Link href='/gastos' className='text-gray-500 hover:text-gray-700'>GASTOS PERSONALES</Link></h2>
      <hr className='mt-3 mb-3' />

      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4">
          <div className='justify-left w-full'>
            <h3 className='flex flex-row items-center text-xl mb-5 border-b border-gray-300'><RocketLaunchIcon className="h-10 w-10 text-blue-500 mr-2 bg-gray-900 p-2" /> FINANZAS PERSONALES</h3>
          </div>
          <div className='flex flex-row justify-between w-full'>
            <div className='w-full px-3'>
              <h3 className='text-base bg-gray-900 p-3 mb-3'>REAL MES</h3>
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
              <h3 className='text-base bg-gray-900 p-3 mb-3'>PRESUPUESTO MES</h3>
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
              <h3 className='text-base bg-gray-900 p-3 mb-3'>OBJECTIVO %</h3>
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
          <button className="bg-purple-900 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mt-5 text-xl mx-3">
            CALCULAR
          </button>
        </div>
        <div className="p-4">
          <div className='justify-left w-full'>
            <h3 className='flex flex-row items-center text-xl mb-5 border-b border-gray-300'><MegaphoneIcon className="h-10 w-10 text-blue-500 mr-2 bg-gray-900 p-2" /> GASTOS PERSONALES</h3>
          </div>
          <div>
            <Accordion
              title="GASTOS FIJOS"
              content="Content for Item 1"
            />
            <Accordion
              title="DEUDAS"
              content="Content for Item 2"
            />
            <Accordion
              title="GASTOS AJUSTABLES"
              content="Content for Item 3"
            />
          </div>
        </div>
      </div>













      <hr className='mt-3 mb-3' />

    </main>
  )
}
