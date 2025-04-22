import SocialLink from './social-link';
import Linkedin from '@/components/icons/linkedin';
import Behance from '@/components/icons/behance';
import Github from '@/components/icons/github';
import Dribbble from '@/components/icons/dribbble';

// Memoized social links component
export default function SocialLinks({ isEndOfPage }: { isEndOfPage: boolean }) {
  return (
    <div
      className={`${isEndOfPage ? 'w-full sm:w-fit' : 'w-0'} overflow-hidden duration-1000 flex flex-row flex-wrap justify-between sm:grid-cols-2 sm:grid gap-3`}
    >
      {[
        { icon: <Linkedin />, text: 'Linkedin', href: 'https://www.linkedin.com/in/mmaazrana/' },
        { icon: <Behance />, text: 'Behance', href: 'https://www.behance.net/maazrana3' },
        { icon: <Github />, text: 'Github', href: 'https://github.com/mmaazrana' },
        { icon: <Dribbble />, text: 'Dribbble', href: 'https://dribbble.com/mmaazrana' },
      ].map((link, index) => (
        <SocialLink key={index} icon={link.icon} text={link.text} href={link.href} index={index} />
      ))}
    </div>
  );
}
