import { Inter } from 'next/font/google';
export const inter = Inter({ subsets: ['latin'] });

import { Lusitana } from 'next/font/google';

const lusitana = Lusitana({
  subsets: ['latin'], // Optionally, include specific subsets
  weight: ['400', '700'], // Specify font weights
  display: 'swap', // Optional, controls font swapping behavior
});
export default lusitana