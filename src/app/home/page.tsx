import { FirstSection } from './FirstSection';
import { SecondSection } from './SecondSection';
import ThirdSection from './ThirdSection';
import FourthSection from './FourthSection';
import { SixthSection } from './SixthSection';
import { SeventhSection } from './SeventhSection';

export default function Home() {
  return (
    <>
      <div className='h-[72px]'></div>
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <SixthSection />
      <SeventhSection />
    </>
  )
}
