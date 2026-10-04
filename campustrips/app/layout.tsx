import './globals.css';
import type { Metadata } from 'next';
export const metadata: Metadata={title:'CampusTrips — Student travel, planned together',description:'AI-powered travel planning and group trips for 18+ college students.'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
