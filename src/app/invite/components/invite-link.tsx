'use client'

import { IconButton } from '@/components/icon-button'
import {
  InputReadonlyField,
  InputReadonlyIcon,
  InputReadonlyRoot,
} from '@/components/input-readonly'
import { Copy, Link } from 'lucide-react'

interface InviteLinkProps {
  link: string
}

export function InviteLink({ link }: InviteLinkProps) {
  function handleCopyLink() {
    navigator.clipboard.writeText(link)
  }

  return (
    <InputReadonlyRoot>
      <InputReadonlyIcon>
        <Link />
      </InputReadonlyIcon>
      <InputReadonlyField name="link-event" value={link} />
      <IconButton onClick={handleCopyLink}>
        <Copy />
      </IconButton>
    </InputReadonlyRoot>
  )
}
