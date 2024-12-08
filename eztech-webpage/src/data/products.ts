import { Product } from '../types/products';

export const products: Product[] = [
  {
    title: 'EZ Chat',
    description: 'AI Assistant chatbot that revolutionizes customer support and internal communications with advanced natural language processing.',
    icon: 'Bot', // Updated to Bot icon
    features: ['24/7 Customer Support', 'Multi-language Support', 'Custom Training'],
    name:"EZChat"
  },
  {
    title: 'EZ Dash',
    description: 'Advanced dashboarding and analytics platform that transforms your data into actionable insights with real-time visualization.',
    icon: 'LayoutGrid', // Updated to LayoutGrid icon
    features: ['Real-time Analytics', 'Custom Reports', 'Data Integration'],
    name:"EZDash"
  },
  {
    title: 'EZ Note',
    description: 'Streamline collaboration with our intuitive note-taking and sharing platform for internal and external teams.',
    icon: 'ClipboardEdit',
    features: ['Real-time Collaboration', 'Version Control', 'Smart Organization'],
    name:"EZNote"
  }
];
