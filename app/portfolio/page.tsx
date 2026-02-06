import { WorkCategories } from '@/helpers/enums'
import { redirect } from 'next/navigation'

// ISR: Revalidate every 1 week - redirect to default portfolio category
export const revalidate = 604800

export default function PortfolioPage() {
  redirect(`/portfolio/${WorkCategories.productDesign}`)
}
