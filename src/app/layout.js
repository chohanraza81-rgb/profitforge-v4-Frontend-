import '../styles/globals.css';
import { Toaster } from 'react-hot-toast';
import LiveStatusBar from './components/ui/LiveStatusBar';
import ParticleBackground from './components/ui/ParticleBackground';

export const metadata = {
  title: 'PROFITFORGE v4.0 Enterprise',
  description: 'Ultimate Data Intelligence for Dropshippers & SMMA',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ParticleBackground />
        <main className="min-h-screen flex flex-col relative z-10">
          {children}
          <LiveStatusBar />
          <Toaster position="bottom-right" toastOptions={{ style: { background: '#0D0D1A', color: '#fff' } }} />
        </main>
      </body>
    </html>
  );
    }
