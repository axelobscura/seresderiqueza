import Link from "next/link"
import Image from "next/image"
import Accordion from "./components/Accordion"
import { RocketLaunchIcon, MegaphoneIcon, PlusIcon } from '@heroicons/react/24/solid'


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <Image
        src='/logo.webp'
        width='250'
        height='250'
        alt="una comunidad de inversionistas y educadores"
      />
      <p className="font-play text-white text-center">Somos una comunidad de inversionistas y educadores,<br/>nuestra misión es transformar vidas<br/>a través de la educación financiera y ayudar a las personas a alcanzar su plenitud financiera.</p>
      <h1 className="font-play text-white text-center mt-5 text-bold">CALCULADORA FINANCIERA PERSONAL</h1>
      <div className="grid grid-cols-2 gap-4 mt-10">
        <Link href='/finanzas' className="p-5 bg-oro text-azul hover:bg-gray-900 hover:text-white">
          <p className="text-center">FINANZAS PERSONALES</p>
        </Link>
        <Link href='/' className="p-5 bg-azuldos text-white hover:bg-gray-900">
          <p className="text-center">GASTOS PERSONALES</p>
        </Link>
      </div>
    </main>
  )
}
