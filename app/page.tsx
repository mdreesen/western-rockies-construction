import HeroLanding from '@/ui/hero/HeroLanding';
import Feature from '@/ui/Feature';
import Testimonial from '@/ui/Testimonials';
import FAQ from '@/ui/FAQ';
import Contact from '@/ui/Contact';

export default function Page() {

  return (
    <div className="bg-white">

      <main className="isolate">
        {/* Hero section */}
        <HeroLanding />

        {/* Feature section */}
        <Feature />

        {/* Testimonial section */}
        <Testimonial />

        {/* FAQs */}
        <FAQ />

        {/* Contact */}
        <Contact />
      </main>
    </div>
  )
}
