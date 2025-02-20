'use client'

import { Button } from '@/components/button'
import { InputField, InputIcon, InputRoot } from '@/components/input'
import { zodResolver } from '@hookform/resolvers/zod'
import { ArrowRight, Mail, User } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const subscriptionSchema = z.object({
  fullname: z.string().min(3, 'Digite seu nome completo'),
  email: z.string().email('Digite um email válido'),
})

type SubscriptionFormData = z.infer<typeof subscriptionSchema>

export function SubscriptionForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SubscriptionFormData>({
    resolver: zodResolver(subscriptionSchema),
  })

  function onSubscription(data: SubscriptionFormData) {
    console.log(data)
  }

  return (
    <form
      onSubmit={handleSubmit(onSubscription)}
      className="w-full lg:max-w-[27.5625rem] space-y-6 bg-gray-700 text-gray-300 border border-gray-600 p-8 rounded-[15px]"
    >
      <h2 className="text-gray-200 font-heading text-xl font-semibold">
        Inscição
      </h2>
      <div className="space-y-3">
        <div className="space-y-2">
          <InputRoot error={!!errors.fullname}>
            <InputIcon>
              <User size={20} />
            </InputIcon>
            <InputField
              type="text"
              placeholder="Nome completo"
              {...register('fullname')}
            />
          </InputRoot>
          {errors.fullname && (
            <p className="text-danger text-xs font-semibold">
              {errors.fullname.message}
            </p>
          )}
        </div>
        <div className="space-y-2">
          <InputRoot error={!!errors.email}>
            <InputIcon>
              <Mail size={20} />
            </InputIcon>
            <InputField
              type="email"
              placeholder="E-mail"
              {...register('email')}
            />
          </InputRoot>
          {errors.email && (
            <p className="text-danger text-xs font-semibold">
              {errors.email.message}
            </p>
          )}
        </div>
      </div>
      <Button>
        Confirmar
        <ArrowRight size={24} />
      </Button>
    </form>
  )
}
