import Typography from '@/components/Typography'
import Link from 'next/link'
import Button from '@/components/button'
import { FC } from 'react'
import { ChevronRight } from 'lucide-react'

/**
 * Props for the SectionTitle component
 */
interface MainSectionTitleProps {
  title: string
  buttonText?: string
  href?: string
}

const SectionTitle: FC<MainSectionTitleProps> = ({ title, buttonText, href }) => {
  return (
    <div
      className={`flex items-center w-full ${buttonText && href ? 'justify-between ' : 'justify-start'}`}
    >
      <Typography tag='h2' type='5xl' weight='extra-bold'>
        {title}
      </Typography>
      {buttonText && href && (
        <Link href={href} aria-label={`Explore ${title}`} className='-mr-s sm:mr-0'>
          <Button
            type='secondary'
            text={buttonText}
            className='gap-3xs whitespace-nowrap'
            rightIcon={<ChevronRight className='h-m w-m' />}
          />
        </Link>
      )}
    </div>
  )
}

export default SectionTitle
