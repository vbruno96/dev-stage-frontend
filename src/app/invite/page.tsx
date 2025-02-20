import Image from 'next/image'

import logo from '@/assets/logo.svg'
import { Podium } from '@/components/podium'
import {
  StatsIcon,
  StatsLabel,
  StatsNumber,
  StatsRoot,
} from '@/components/stats'
import { BadgeCheck, Medal, MousePointerClick } from 'lucide-react'
import { InviteLink } from './components/invite-link'

export default function invite() {
  const inviteLink = 'devstage.com/codecraft-summit-2025/1289'

  return (
    <section className="max-w-[70.375rem] mx-auto px-4 lg:px-0 space-y-10 lg:space-y-16">
      <div className="flex items-center lg:items-start gap-8 flex-col">
        <Image src={logo} alt="devStage" width={109} height={30} />
      </div>
      <div className="flex justify-between items-start gap-16 flex-wrap">
        <div className="w-full lg:max-w-[34.9375rem] lg:flex-1 space-y-10">
          <header className="space-y-2">
            <h1 className="text-gray-100 text-4xl font-heading font-semibold">
              Inscrição confirmada!
            </h1>
            <p className="text-gray-300">
              Para entrar no evento, acesse o link enviado para seu e-mail.
            </p>
          </header>
          <div className="space-y-6">
            <div className="space-y-3">
              <h2 className="text-gray-200 font-heading text-xl font-semibold">
                Indique e Ganhe
              </h2>
              <p className="text-gray-300">
                Convide mais pessoas para o evento e concorra a prêmios
                exclusivos! É só compartilhar o link abaixo e acompanhar as
                inscrições:
              </p>
            </div>
            <InviteLink link={inviteLink} />
            <div className="grid grid-rows-3 lg:grid-cols-3 lg:grid-rows-1 gap-3">
              <StatsRoot>
                <StatsIcon>
                  <MousePointerClick size={20} />
                </StatsIcon>
                <StatsNumber>942</StatsNumber>
                <StatsLabel>Acessos ao link</StatsLabel>
              </StatsRoot>
              <StatsRoot>
                <StatsIcon>
                  <BadgeCheck size={20} />
                </StatsIcon>
                <StatsNumber>875</StatsNumber>
                <StatsLabel>Inscrições feitas</StatsLabel>
              </StatsRoot>
              <StatsRoot>
                <StatsIcon>
                  <Medal size={20} />
                </StatsIcon>
                <StatsNumber>3</StatsNumber>
                <StatsLabel>Posição no ranking</StatsLabel>
              </StatsRoot>
            </div>
          </div>
        </div>
        <div className="grow lg:flex-1 space-y-5">
          <h2 className="text-gray-200 text-xl font-heading font-semibold">
            Ranking de indicações
          </h2>
          <div className="space-y-4">
            <Podium name="André Souza" indications={1.128} position={1} />
            <Podium name="Melissa Loures" indications={928} position={2} />
            <Podium name="Rodrigo Gonçalves" indications={875} position={3} />
          </div>
        </div>
      </div>
    </section>
  )
}
