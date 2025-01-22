export interface Product {
  id: string
  imageUrl: string
  name: string
  description: string
  image: string
  tag?: 'new' | 'sale'
  salePercentage?: number
  discount?: number
  isNew?: boolean
}

export const products: Product[] = [
  {
    id: '1',
    name: "Syltherine",
    imageUrl: "/Syltherine.png",
    description: 'Stylish cafe chair',
    image: '/Syltheriner.png',
    tag: 'sale',
    salePercentage: 30,
  },
  {
    id: '2',
    name: 'Leviosa',
    imageUrl: '/Leviosa.png', 
    description: 'Stylish table chair',
    image: '/Leviosa.png',
  },
  {
    id: '3',
    name: 'Lolito',
    imageUrl: '/Lolito.png',
    description: 'Luxury big sofa',
    image: '/Lolito.png',
    tag: 'sale',
    salePercentage: 50,
  },
  {
    id: '4',
    name: 'Respira',
    imageUrl: '/Respira.png',
    description: 'Outdoor bar table and stool',
    image: '/Respira.png',
    tag: 'new',
  },
  {
    id: '5',
    name: 'Grifo',
    imageUrl: '/1.png',
    description: 'Night lamp',
    image: '/1.png',
  },
  {
    id: '6',
    name: 'Muggo',
    imageUrl: '/2.png',
    description: 'Small mug',
    image: '/2.png',
    tag: 'new',
  },
  {
    id: '7',
    name: 'Pingky',
    imageUrl: '/3.png',
    description: 'Cute bed set',
    image: '/3.png',
    tag: 'sale',
    salePercentage: 50,
  },
  {
    id: '8',
    name: 'Setty',
    imageUrl: '/4.png',
    description: 'Minimalist flower pot',
    image: '/4.png',
    tag: 'new',
  },
  {
    id: '9',
    name: 'Syltherine',
    imageUrl: "/Syltherine.png",
    description: 'Stylish cafe chair',
    image: '/Syltheriner.png',
    tag: 'sale',
    salePercentage: 30,
  },
  {
    id: '10',
    name: 'Leviosa',
    imageUrl: '/Leviosa.png', 
    description: 'Stylish table chair',
    image: '/Leviosa.png',
  },
  {
    id: '11',
    name: 'Lolito',
    imageUrl: '/Lolito.png',
    description: 'Luxury big sofa',
    image: '/Lolito.png',
    tag: 'sale',
    salePercentage: 50,
  },
  {
    id: '12',
    name: 'Respira',
    imageUrl: '/Respira.png',
    description: 'Outdoor bar table and stool',
    image: '/Respira.png',
    tag: 'new',
  },
  {
    id: '13',
    name: 'Grifo',
    imageUrl: '/1.png',
    description: 'Night lamp',
    image: '/1.png',
  },
  {
    id: '14',
    name: 'Muggo',
    imageUrl: '/2.png',
    description: 'Small mug',
    image: '/2.png',
    tag: 'new',
  },
  {
    id: '15',
    name: 'Pingky',
    imageUrl: '/3.png',
    description: 'Cute bed set',
    image: '/3.png',
    tag: 'sale',
    salePercentage: 50,
  },
  {
    id: '16',
    name: 'Setty',
    imageUrl: '/4.png',
    description: 'Minimalist flower pot',
    image: '/4.png',
    tag: 'new',
  },
]