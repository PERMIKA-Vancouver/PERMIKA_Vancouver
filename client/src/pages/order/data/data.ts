const LOCATIONS = [
  {
    value: '1',
    label: 'Lougheed',
  },
  {
    value: '2',
    label: 'UBC',
  },
  {
    value: '3',
    label: 'SFU',
  },
  {
    value: '4',
    label: 'Marine Drive',
  },
  {
    value: '5',
    label: 'Joyce Collingwood',
  },
];

const SIZES = [
  {
    value: '1',
    label: 'S',
  },
  {
    value: '2',
    label: 'M',
  },
  {
    value: '3',
    label: 'L',
  },
  {
    value: '4',
    label: 'XL',
  },
  {
    value: '5',
    label: 'XXL',
  },
];

const MODELS = [
  {
    value: '1',
    label: 'KELANA - Waroeng Cak Timmies Hoodie',
    price: 25,
    image:
      'https://permikawebsite.s3.us-west-2.amazonaws.com/assets/merchandise/hoodieBlackFront.webp',
  },
  {
    value: '2',
    label: 'KELANA - Anak Rantau Hoodie',
    price: 25,
    image:
      'https://permikawebsite.s3.us-west-2.amazonaws.com/assets/merchandise/hoodieWhiteFront.webp',
  },
  {
    value: '3',
    label: 'KELANA - Anak Rantau T-Shirt',
    price: 15,
    image:
      'https://permikawebsite.s3.us-west-2.amazonaws.com/assets/merchandise/shirtFront.webp',
  },
  {
    value: '4',
    label: 'Jauh di Mata Tote Bag',
    price: 7.5,
    image:
      'https://permikawebsite.s3.us-west-2.amazonaws.com/assets/merchandise/jauh+di+mata+tote.webp',
  },
  {
    value: '5',
    label: 'Life in Van City Tote Bag',
    price: 7.5,
    image:
      'https://permikawebsite.s3.us-west-2.amazonaws.com/assets/merchandise/life+in+van+city+tote.webp',
  },
  {
    value: '6',
    label: 'Bundle Tote + Kaos',
    price: 17.5,
    image:
      'https://permikawebsite.s3.us-west-2.amazonaws.com/assets/merchandise/tote+kaos.webp',
  },
  {
    value: '7',
    label: 'Bundle Tote + Hoodie',
    price: 27.5,
    image:
      'https://permikawebsite.s3.us-west-2.amazonaws.com/assets/merchandise/tote+hoodie+1.webp',
  },
  {
    value: '8',
    label: 'Bundle Tote + Kaos + Hoodie',
    price: 40,
    image:
      'https://permikawebsite.s3.us-west-2.amazonaws.com/assets/merchandise/tote+kaos+hoodie+1.webp',
  },
];

const DEFAULT_SHOPPING_BAG = {
  quantity: 0,
  size: '',
  model: '',
  price: 0,
  image: '',
};

const DEFAULT_SELECTED_ITEM = {
  value: '',
  label: '',
  price: 0,
  image: '',
};

export {
  LOCATIONS,
  SIZES,
  MODELS,
  DEFAULT_SHOPPING_BAG,
  DEFAULT_SELECTED_ITEM,
};
