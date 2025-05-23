import React, { FC } from 'react'
import { clientColorIconComponents } from '@/helpers/constants'
import Typography from '@/components/Typography'
import {} from '@/helpers/enums'

interface EsteemedClientsProps {}

const EsteemedClients: FC<EsteemedClientsProps> = () => {
  return (
    <section className={'gap-8xl flex justify-center items-center flex-col w-full'}>
      <div
        className={
          'flex flex-row gap-xl justify-between h-14 xs:h-16 sm:h-18 md:h-20 lg:h-22 xl:h-24 2xl:h-26 px-4xl -mx-20 w-[100vw] max-w-8xl mx-auto'
        }
      >
        {clientColorIconComponents.slice(0, 7).map(({ Icon, props }, index) => (
          <div key={index}>
            <Icon
              {...props}
              className={
                'w-full h-full opacity-70 hover:opacity-100 hover:scale-102 hover:-translate-y-2 transition-all duration-300'
              }
            />
          </div>
        ))}
      </div>
      <div className='flex flex-col justify-center items-center w-full gap-4'>
        <Typography tag='h2' type='6xl' weight='extra-bold' className='text-center'>
          Esteemed Clients
        </Typography>
        <Typography type='2xl' weight='light' className='text-center max-w-[40rem] opacity-75'>
          Organizations and professionals who have entrusted me with their projects, resulting in
          exceptional outcomes.
        </Typography>
      </div>
      <div
        className={
          'flex flex-row gap-xl justify-between h-14 xs:h-15 sm:h-16 md:h-17 lg:h-18 xl:h-19 2xl:h-20 px-4xl -mx-20 w-[100vw]  max-w-8xl mx-auto'
        }
      >
        {clientColorIconComponents.slice(7).map(({ Icon, props }, index) => (
          <div key={index}>
            <Icon
              {...props}
              className={
                'w-full h-full opacity-75 hover:opacity-100 hover:scale-102 hover:translate-y-2 transition-all duration-300'
              }
            />
          </div>
        ))}
      </div>
    </section>
  )
}

export default EsteemedClients
