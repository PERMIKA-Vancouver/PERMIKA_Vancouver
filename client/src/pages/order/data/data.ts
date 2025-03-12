const LOCATIONS = [
  {
    value: "1",
    label: "Lougheed",
  },
  {
    value: "2",
    label: "UBC",
  },
  {
    value: "3",
    label: "SFU",
  },
  {
    value: "4",
    label: "Marine Drive",
  },
  {
    value: "5",
    label: "Metrotown",
  },
];

const SIZES = [
  {
    value: "1",
    label: "S",
  },
  {
    value: "2",
    label: "M",
  },
  {
    value: "3",
    label: "L",
  },
  {
    value: "4",
    label: "XL",
  },
  {
    value: "5",
    label: "XXL",
  },
];

const MODELS = [
  {
    value: "1",
    label: "KELANA - Waroeng Cak Timmies Hoodie",
    price: 25,
    image:
      "https://permikawebsite.s3.us-west-2.amazonaws.com/assets/merchandise/hoodieBlackFront.webp",
    isBundle: false,
  },
  {
    value: "2",
    label: "KELANA - Anak Rantau Hoodie",
    price: 25,
    image:
      "https://permikawebsite.s3.us-west-2.amazonaws.com/assets/merchandise/hoodieWhiteFront.webp",
    isBundle: false,
  },
  {
    value: "3",
    label: "KELANA - Anak Rantau T-Shirt",
    price: 15,
    image:
      "https://permikawebsite.s3.us-west-2.amazonaws.com/assets/merchandise/shirtFront.webp",
    isBundle: false,
  },
  {
    value: "4",
    label: "Jauh di Mata Tote Bag",
    price: 7.5,
    image:
      "https://permikawebsite.s3.us-west-2.amazonaws.com/assets/merchandise/jauh+di+mata+tote.webp",
    isBundle: false,
  },
  {
    value: "5",
    label: "Life in Van City Tote Bag",
    price: 7.5,
    image:
      "https://permikawebsite.s3.us-west-2.amazonaws.com/assets/merchandise/life+in+van+city+tote.webp",
    isBundle: false,
  },
  {
    value: "6",
    label: "Bundle Tote + Kaos",
    price: 17.5,
    image:
      "https://permikawebsite.s3.us-west-2.amazonaws.com/assets/merchandise/tote+kaos.webp",
    isBundle: true,
  },
  {
    value: "7",
    label: "Bundle Tote + Hoodie",
    price: 27.5,
    image:
      "https://permikawebsite.s3.us-west-2.amazonaws.com/assets/merchandise/tote+hoodie+1.webp",
    isBundle: true,
  },
  {
    value: "8",
    label: "Bundle Tote + Kaos + Hoodie",
    price: 40,
    image:
      "https://permikawebsite.s3.us-west-2.amazonaws.com/assets/merchandise/tote+kaos+hoodie+1.webp",
    isBundle: true,
  },
  {
    value: "9",
    label: "Bundle 2 Tote Bags",
    price: 12,
    image: "",
    isBundle: true,
  },
];

const DEFAULT_SHOPPING_BAG = {
  quantity: 1,
  size: "",
  model: "",
  price: 0,
  image: "",
  isBundle: false,
  bundleIdx: "0",
  bundle: [],
};

const DEFAULT_SELECTED_ITEM = {
  value: "",
  label: "",
  price: 0,
  image: "",
};

const DEFAULT_BUNDLE_BAG = {
  model: "",
  size: "",
};

const BUNDLE_OPTIONS = [
  {
    bundle: "6",
    options: [
      { label: "kaos", options: ["3"] },
      { label: "tote", options: ["4", "5"] },
    ],
  },
  {
    bundle: "7",
    options: [
      { label: "hoodie", options: ["1", "2"] },
      { label: "tote", options: ["4", "5"] },
    ],
  },
  {
    bundle: "8",
    options: [
      { label: "hoodie", options: ["1", "2"] },
      { label: "kaos", options: ["3"] },
      { label: "tote", options: ["4", "5"] },
    ],
  },
  {
    bundle: "9",
    options: [
      { label: "tote", options: ["4"] },
      { label: "tote", options: ["5"] },
    ],
  },
];

const NO_NEED_SIZE = ["4", "5", "6", "7", "8", "9"];

export {
  LOCATIONS,
  SIZES,
  MODELS,
  DEFAULT_SHOPPING_BAG,
  DEFAULT_SELECTED_ITEM,
  DEFAULT_BUNDLE_BAG,
  BUNDLE_OPTIONS,
  NO_NEED_SIZE,
};

export type SHOPPING_BAG_TYPE = {
  quantity: number;
  size: string;
  model: string;
  price: number;
  image: string;
  isBundle: boolean;
  bundleIdx: string;
  bundle: {
    model: string;
    size: string;
  }[];
};

export type MODEL_SIZE = {
  model: string;
  size: string;
};
