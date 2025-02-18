import { ArrowRight, Copy } from 'lucide-react'

import Button from "@/components/button";
import IconButton from '@/components/icon-button';

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
    </main>
  );
}
