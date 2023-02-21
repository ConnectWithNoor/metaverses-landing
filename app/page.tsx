import { Navbar, Footer } from './{components}';
import {
  Hero,
  About,
  Explore,
  GetStarted,
  WhatsNew,
  World,
  Insights,
  Feedback,
} from './{sections}';

export default function Home() {
  return (
    <main className='bg-primary-black overflow-hidden'>
      <Navbar />
      <Hero />
      <About />
      <Explore />
      <GetStarted />
      <WhatsNew />
      <World />
      <Insights />
      <Feedback />
      <Footer />
    </main>
  );
}
