import { ArrowRight, Copy, User } from 'lucide-react'

import { Button } from "@/components/button";
import { IconButton } from '@/components/icon-button';
import { InputField, InputIcon, InputRoot } from '@/components/input';

export default function Home() {
  return (
    <main>
      <Button>
        Label
        <ArrowRight size={24} />
      </Button>
      <IconButton>
        <Copy size={20} />
      </IconButton>
      <InputRoot>
        <InputIcon>
          <User />
        </InputIcon>
        <InputField placeholder='User' />
      </InputRoot>
    </main>
  );
}
