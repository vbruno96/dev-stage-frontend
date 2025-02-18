import { ArrowRight, Mail, Radio, User } from 'lucide-react'

import logo from '@/assets/logo.svg'
import { Button } from '@/components/button'
import { InputField, InputIcon, InputRoot } from '@/components/input'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-dvh py-8 lg:pt-[5.5rem] px-4">
      <section className="max-w-[70.375rem] mx-auto space-y-16">
        <div className="space-y-8 text-center lg:text-left">
          <Image src={logo} alt="devStage" width={109} height={30} />
          <h1 className="flex flex-col text-gray-100 font-heading leading-none text-3xl lg:text-5xl font-medium">
            <span className="text-blue">CodeCraft</span>
            Summit 2025
          </h1>
        </div>
        <div className="flex flex-col justify-start lg:flex-row gap-5">
          <div className="space-y-8 bg-gray-700 text-gray-300 border border-gray-600 p-8 rounded-[15px]">
            <header className="flex items-center justify-between">
              <h2 className="text-gray-200 font-heading text-xl font-semibold">
                Sobre o evento
              </h2>
              <span className="flex items-center gap-2 text-purple text-xs uppercase">
                <Radio size={20} />
                Ao Vivo
              </span>
            </header>
            <div className="space-y-4">
              <p>
                Um evento feito por e para pessoas desenvolvedoras apaixonadas
                por criar soluções inovadoras e compartilhar conhecimento. Vamos
                mergulhar nas tendências mais recentes em desenvolvimento de
                software, arquitetura de sistemas e tecnologias emergentes, com
                palestras, workshops e hackathons.
              </p>
              <p>Dias 15 a 17 de março | Das 18h às 21h | Online & Gratuito</p>
            </div>
          </div>
          <form className="w-full max-w-[27.5625rem] space-y-6 bg-gray-700 text-gray-300 border border-gray-600 p-8 rounded-[15px]">
            <h2 className="text-gray-200 font-heading text-xl font-semibold">
              Inscição
            </h2>
            <div className="space-y-3">
              <InputRoot>
                <InputIcon>
                  <User size={20} />
                </InputIcon>
                <InputField
                  name="fullname"
                  type="text"
                  placeholder="Nome completo"
                />
              </InputRoot>
              <InputRoot>
                <InputIcon>
                  <Mail size={20} />
                </InputIcon>
                <InputField name="email" type="email" placeholder="E-mail" />
              </InputRoot>
            </div>
            <Button>
              Confirmar
              <ArrowRight size={24} />
            </Button>
          </form>
        </div>
      </section>
    </main>
  )
}
