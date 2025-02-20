import cooper from '@/assets/medal-cooper.svg'
import gold from '@/assets/medal-gold.svg'
import silver from '@/assets/medal-silver.svg'
import Image from 'next/image'

interface PodiumProps {
  position: 1 | 2 | 3
  name: string
  indications: number
  itsMe?: boolean
}

const medals = {
  1: gold,
  2: silver,
  3: cooper,
}

export function Podium({
  indications,
  name,
  position,
  itsMe = false,
}: PodiumProps) {
  return (
    <div className="relative space-y-2 bg-gray-700 border border-gray-600 py-6 pl-7 pr-[7.5rem] rounded-xl">
      <p className="text-gray-300">
        <span className="font-semibold">{position}º</span> | {name}
      </p>
      <div className="flex items-center gap-3">
        <strong className="block text-gray-200 text-2xl font-heading font-semibold">
          {indications}
        </strong>
        {itsMe && (
          <span className="bg-gray-500 text-gray-300 px-3 py-1 text-sm rounded-md">
            Você
          </span>
        )}
      </div>
      <Image
        className="absolute top-0 right-8"
        src={medals[position]}
        alt=""
        width={56}
        height={85.23}
      />
    </div>
  )
}
