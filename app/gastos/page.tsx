"use client"
import Link from "next/link"

export default function Gastos() {
    const toggleTab = (tabNum: any) => {
        const tabContent = document.querySelector(`.tab-content:nth-child(${tabNum})`);
        tabContent?.classList.toggle('hidden');
        console.log(tabNum);
    }
    return (
      <main className="flex min-h-screen flex-col items-center justify-center p-24">
        <h1 className='text-xl'>SERES DE RIQUEZA</h1>
        <h2><Link href='/' className='text-gray-500 hover:text-gray-700'>FINANZAS PERSONALES</Link> | <Link href='/gastos' className='text-gray-500 hover:text-gray-700'>GASTOS PERSONALES</Link></h2>
        <hr className='mt-3 mb-3'/>
        <div className='justify-left w-full'>
            <h3 className='text-xl mb-5 border-b border-gray-300'>GASTOS</h3>
        </div>
        <div className="tabs">
            <button className="tab-header" onClick={() => toggleTab(1)}>Tab 1</button>
            <div className="tab-content hidden">
                Content of Tab 1
            </div>
            <button className="tab-header" onClick={() => toggleTab(2)}>Tab 2</button>
            <div className="tab-content hidden">
                Content of Tab 2
            </div>
            <button className="tab-header" onClick={() => toggleTab(3)}>Tab 3</button>
            <div className="tab-content hidden">
                Content of Tab 3
            </div>
</div>
      </main>
    )
}