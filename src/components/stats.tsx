import type { ComponentProps } from 'react'

interface StatsRootProps extends ComponentProps<'div'> {}

export function StatsRoot(props: StatsRootProps) {
  return (
    <div
      className="flex-1 relative space-y-1 bg-gray-700 border border-gray-600 px-5 pt-7 pb-5 text-center rounded-xl"
      {...props}
    />
  )
}

interface StatsIconProps extends ComponentProps<'span'> {}

export function StatsIcon(props: StatsIconProps) {
  return <span className="absolute top-3 left-3 text-purple" {...props} />
}

interface StatsNumberProps extends ComponentProps<'strong'> {}

export function StatsNumber(props: StatsNumberProps) {
  return (
    <strong
      className="text-gray-200 text-2xl font-heading font-semibold"
      {...props}
    />
  )
}

interface StatsLabelProps extends ComponentProps<'p'> {}

export function StatsLabel(props: StatsLabelProps) {
  return <p className="text-gray-300 text-sm" {...props} />
}
