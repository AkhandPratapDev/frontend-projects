import shirt from "./shirt.jpg";
import tshirt from "./tshirt.png";
import pant from "./pant.png";
import hoddie from "./hoddie.png";
import jacket from "./jacket.png";
import logo from "./logo.png";
import side_nav_logo from "./side_nav_logo.webp";
import search_icon from "./search_icon.svg";
import bag_icon from "./bag_icon.svg";
import user_icon from "./user_icon.svg";
import home_icon from "./home_icon.svg";
import bar_icon from "./bar_icon.svg";
import cross_icon from "./cross_icon.svg";
import arrow_icon from "./arrow_icon.svg";
import x_icon from "./x_icon.svg";
import youtube_icon from "./youtube_icon.svg";
import instagram_icon from "./instagram_icon.svg";
import cod_icon from "./cod_icon.svg";
import easy_return_icon from "./easy_return_icon.svg";
import quality_assurence_icon from "./quality_assurence_icon.svg";
import delete_icon from "./delete_icon.svg";
import shop_icon from "./shop_icon.png";
import offer_icon from "./offer_icon.png";
import contact_icon from "./contact_icon.png";
import header_img_one from "./header_img_1.png";
import header_img_two from "./header_img_2.png";
import header_img_three from "./header_img_3.png";
import category_1 from "./category_1.png";
import category_2 from "./category_2.png";
import category_3 from "./category_3.png";
import category_4 from "./category_4.png";
import category_5 from "./category_5.png";
import category_6 from "./category_6.png";
import category_7 from "./category_7.png";
import category_8 from "./category_8.png";
import category_9 from "./category_9.png";
import poster from "./home_poster.png";
import last_product_poster from "./last_product_poster.png";
import offer_poster from "./offer_poster.png";
import login_poster from "./login_poster.png";
import product_image_1 from "./product_image_1.png";
import product_image_2 from "./product_image_2.png";
import product_image_3 from "./product_image_3.png";
import product_image_4 from "./product_image_4.png";

export const assets = {
  logo,
  side_nav_logo,
  shirt,
  tshirt,
  pant,
  hoddie,
  jacket,
  search_icon,
  bag_icon,
  user_icon,
  home_icon,
  bar_icon,
  cross_icon,
  arrow_icon,
  x_icon,
  youtube_icon,
  instagram_icon,
  cod_icon,
  easy_return_icon,
  quality_assurence_icon,
  delete_icon,
  shop_icon,
  offer_icon,
  contact_icon,
  header_img_one,
  header_img_two,
  header_img_three,
  poster,
  last_product_poster,
  offer_poster,
  login_poster,
  product_image_1,
  product_image_2,
  product_image_3,
};

export const category_list = [
  {
    category_image: category_1,
    category_name: "Hoddie",
  },
  {
    category_image: category_2,
    category_name: "Jakect",
  },
  {
    category_image: category_3,
    category_name: "Cargoes",
  },
  {
    category_image: category_4,
    category_name: "Pant",
  },
  {
    category_image: category_5,
    category_name: "Shirt",
  },
  {
    category_image: category_6,
    category_name: "T-Shirt",
  },
  {
    category_image: category_7,
    category_name: "Jeans",
  },
  {
    category_image: category_8,
    category_name: "Caps",
  },
  {
    category_image: category_9,
    category_name: "Caot",
  },
];

export const product_list = [
  {
    _id: "1",
    name: "Shirt",
    image: shirt,
    price: 25,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A blanditiis dolore in ",
    category: "Shirt",
    discount: "30%",
    regular_price: "999",
    product_detail: "The Product You are Finding.",
    product_image_1: product_image_1,
    product_image_2: product_image_2,
    product_image_3: product_image_3,
    product_image_4: product_image_4,
    sizes: ["S", "M", "L", "XL"], // <- add sizes array
    color: "Red",
    delivery: [5, 7],

    search_keyword: ["Shirt", "Pant", "Kurta"],
  },

  {
    _id: "2",
    name: "T-Shirt",
    image: tshirt,
    price: 25,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A blanditiis dolore in ",
    category: "T-Shirt",
    discount: "30%",
    regular_price: "999",
    product_detail: "The Product You are Finding.",
    product_image_1: product_image_1,
    product_image_2: product_image_2,
    product_image_3: product_image_3,
    product_image_4: product_image_4,
    sizes: ["S", "M", "L", "XL"], // <- add sizes array
    color: "Red",
    delivery: [5, 7],
    search_keyword: ["tShirt", "t-shirt", "polo", "Kurta"],
  },

  {
    _id: "3",
    name: "Pant",
    image: pant,
    price: 25,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A blanditiis dolore in ",
    category: "Pant",
    discount: "30%",
    regular_price: "999",
    product_detail: "The Product You are Finding.",
    product_image_1: product_image_1,
    product_image_2: product_image_2,
    product_image_3: product_image_3,
    product_image_4: product_image_4,
    sizes: ["S", "M", "L", "XL"], // <- add sizes array
    color: "Red",
    delivery: [5, 7],
  },

  {
    _id: "4",
    name: "Hoddie",
    image: hoddie,
    price: 25,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A blanditiis dolore in ",
    category: "Hoddie",
    discount: "30%",
    regular_price: "999",
    product_detail: "The Product You are Finding.",
    product_image_1: product_image_1,
    product_image_2: product_image_2,
    product_image_3: product_image_3,
    product_image_4: product_image_4,
    sizes: ["S", "M", "L", "XL"], // <- add sizes array
    color: "Red",
    delivery: [5, 7],
  },

  {
    _id: "5",
    name: "Jacket",
    image: jacket,
    price: 25,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A blanditiis dolore in ",
    category: "Jacket",
    discount: "30%",
    regular_price: "999",
    product_detail: "The Product You are Finding.",
    product_image_1: product_image_1,
    product_image_2: product_image_2,
    product_image_3: product_image_3,
    product_image_4: product_image_4,
    sizes: ["S", "M", "L", "XL"], // <- add sizes array
    color: "Red",
    delivery: [5, 7],
  },

  {
    _id: "6",
    name: "Shirt",
    image: shirt,
    price: 25,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A blanditiis dolore in ",
    category: "Shirt",
    discount: "30%",
    regular_price: "999",
    product_detail: "The Product You are Finding.",
    product_image_1: product_image_1,
    product_image_2: product_image_2,
    product_image_3: product_image_3,
    product_image_4: product_image_4,
    sizes: ["S", "M", "L", "XL"], // <- add sizes array
    color: "Red",
    delivery: [5, 7],
  },

  {
    _id: "7",
    name: "T-Shirt",
    image: tshirt,
    price: 25,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A blanditiis dolore in ",
    category: "T-Shirt",
    discount: "30%",
    regular_price: "999",
    product_detail: "The Product You are Finding.",
    product_image_1: product_image_1,
    product_image_2: product_image_2,
    product_image_3: product_image_3,
    product_image_4: product_image_4,
    sizes: ["S", "M", "L", "XL"], // <- add sizes array
    color: "Red",
    delivery: [5, 7],
  },

  {
    _id: "8",
    name: "Pant",
    image: pant,
    price: 25,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A blanditiis dolore in ",
    category: "Pant",
    discount: "30%",
    regular_price: "999",
    product_detail: "The Product You are Finding.",
    product_image_1: product_image_1,
    product_image_2: product_image_2,
    product_image_3: product_image_3,
    product_image_4: product_image_4,
    sizes: ["S", "M", "L", "XL"], // <- add sizes array
    color: "Red",
    delivery: [5, 7],
  },

  {
    _id: "9",
    name: "Hoddie",
    image: hoddie,
    price: 25,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A blanditiis dolore in ",
    category: "Hoddie",
    discount: "30%",
    regular_price: "999",
    product_detail: "The Product You are Finding.",
    product_image_1: product_image_1,
    product_image_2: product_image_2,
    product_image_3: product_image_3,
    product_image_4: product_image_4,
    sizes: ["S", "M", "L", "XL"], // <- add sizes array
    color: "Red",
    delivery: [5, 7],
  },

  {
    _id: "10",
    name: "Jacket",
    image: jacket,
    price: 25,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A blanditiis dolore in ",
    category: "Jacket",
    discount: "30%",
    regular_price: "999",
    product_detail: "The Product You are Finding.",
    product_image_1: product_image_1,
    product_image_2: product_image_2,
    product_image_3: product_image_3,
    product_image_4: product_image_4,
    sizes: ["S", "M", "L", "XL"], // <- add sizes array
    color: "Red",
    delivery: [5, 7],
  },
  {
    _id: "11",
    name: "Shirt",
    image: shirt,
    price: 25,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A blanditiis dolore in ",
    category: "Shirt",
    discount: "30%",
    regular_price: "999",
    product_detail: "The Product You are Finding.",
    product_image_1: product_image_1,
    product_image_2: product_image_2,
    product_image_3: product_image_3,
    product_image_4: product_image_4,
    sizes: ["S", "M", "L", "XL"], // <- add sizes array
    color: "Red",
    delivery: [5, 7],
  },

  {
    _id: "12",
    name: "T-Shirt",
    image: tshirt,
    price: 25,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A blanditiis dolore in ",
    category: "T-Shirt",
    discount: "30%",
    regular_price: "999",
    product_detail: "The Product You are Finding.",
    product_image_1: product_image_1,
    product_image_2: product_image_2,
    product_image_3: product_image_3,
    product_image_4: product_image_4,
    sizes: ["S", "M", "L", "XL"], // <- add sizes array
    color: "Red",
    delivery: [5, 7],
  },

  {
    _id: "13",
    name: "Pant",
    image: pant,
    price: 25,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A blanditiis dolore in ",
    category: "Pant",
    discount: "30%",
    regular_price: "999",
    product_detail: "The Product You are Finding.",
    product_image_1: product_image_1,
    product_image_2: product_image_2,
    product_image_3: product_image_3,
    product_image_4: product_image_4,
    sizes: ["S", "M", "L", "XL"], // <- add sizes array
    color: "Red",
    delivery: [5, 7],
  },

  {
    _id: "14",
    name: "Hoddie",
    image: hoddie,
    price: 25,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A blanditiis dolore in ",
    category: "Hoddie",
    discount: "30%",
    regular_price: "999",
    product_detail: "The Product You are Finding.",
    product_image_1: product_image_1,
    product_image_2: product_image_2,
    product_image_3: product_image_3,
    product_image_4: product_image_4,
    sizes: ["S", "M", "L", "XL"], // <- add sizes array
    color: "Red",
    delivery: [5, 7],
  },

  {
    _id: "15",
    name: "Jacket",
    image: jacket,
    price: 25,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A blanditiis dolore in ",
    category: "Jacket",
    discount: "30%",
    regular_price: "999",
    product_detail: "The Product You are Finding.",
    product_image_1: product_image_1,
    product_image_2: product_image_2,
    product_image_3: product_image_3,
    product_image_4: product_image_4,
    sizes: ["S", "M", "L", "XL"], // <- add sizes array
    color: "Red",
    delivery: [5, 7],
  },

  {
    _id: "16",
    name: "Shirt",
    image: shirt,
    price: 25,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A blanditiis dolore in ",
    category: "Shirt",
    discount: "30%",
    regular_price: "999",
    product_detail: "The Product You are Finding.",
    product_image_1: product_image_1,
    product_image_2: product_image_2,
    product_image_3: product_image_3,
    product_image_4: product_image_4,
    sizes: ["S", "M", "L", "XL"], // <- add sizes array
    color: "Red",
    delivery: [5, 7],
  },

  {
    _id: "17",
    name: "T-Shirt",
    image: tshirt,
    price: 25,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A blanditiis dolore in ",
    category: "T-Shirt",
    discount: "30%",
    regular_price: "999",
    product_detail: "The Product You are Finding.",
    product_image_1: product_image_1,
    product_image_2: product_image_2,
    product_image_3: product_image_3,
    product_image_4: product_image_4,
    sizes: ["S", "M", "L", "XL"], // <- add sizes array
    color: "Red",
    delivery: [5, 7],
  },

  {
    _id: "18",
    name: "Pant",
    image: pant,
    price: 25,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A blanditiis dolore in ",
    category: "Pant",
    discount: "30%",
    regular_price: "999",
    product_detail: "The Product You are Finding.",
    product_image_1: product_image_1,
    product_image_2: product_image_2,
    product_image_3: product_image_3,
    product_image_4: product_image_4,
    sizes: ["S", "M", "L", "XL"], // <- add sizes array
    color: "Red",
    delivery: [5, 7],
  },

  {
    _id: "19",
    name: "Hoddie",
    image: hoddie,
    price: 25,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A blanditiis dolore in ",
    category: "Hoddie",
    discount: "30%",
    regular_price: "999",
    product_detail: "The Product You are Finding.",
    product_image_1: product_image_1,
    product_image_2: product_image_2,
    product_image_3: product_image_3,
    product_image_4: product_image_4,
    sizes: ["S", "M", "L", "XL"], // <- add sizes array
    color: "Red",
    delivery: [5, 7],
  },

  {
    _id: "20",
    name: "Jacket",
    image: jacket,
    price: 25,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A blanditiis dolore in ",
    category: "Jacket",
    discount: "30%",
    regular_price: "999",
    product_detail: "The Product You are Finding.",
    product_image_1: product_image_1,
    product_image_2: product_image_2,
    product_image_3: product_image_3,
    product_image_4: product_image_4,
    sizes: ["S", "M", "L", "XL"], // <- add sizes array
    color: "Red",
    delivery: [5, 7],
  },
  {
    _id: "21",
    name: "Shirt",
    image: shirt,
    price: 25,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A blanditiis dolore in ",
    category: "Shirt",
    discount: "30%",
    regular_price: "999",
    product_detail: "The Product You are Finding.",
    product_image_1: product_image_1,
    product_image_2: product_image_2,
    product_image_3: product_image_3,
    product_image_4: product_image_4,
    sizes: ["S", "M", "L", "XL"], // <- add sizes array
    color: "Red",
    delivery: [5, 7],
  },

  {
    _id: "22",
    name: "T-Shirt",
    image: tshirt,
    price: 25,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A blanditiis dolore in ",
    category: "T-Shirt",
    discount: "30%",
    regular_price: "999",
    product_detail: "The Product You are Finding.",
    product_image_1: product_image_1,
    product_image_2: product_image_2,
    product_image_3: product_image_3,
    product_image_4: product_image_4,
    sizes: ["S", "M", "L", "XL"], // <- add sizes array
    color: "Red",
    delivery: [5, 7],
  },

  {
    _id: "23",
    name: "Pant",
    image: pant,
    price: 25,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A blanditiis dolore in ",
    category: "Pant",
    discount: "30%",
    regular_price: "999",
    product_detail: "The Product You are Finding.",
    product_image_1: product_image_1,
    product_image_2: product_image_2,
    product_image_3: product_image_3,
    product_image_4: product_image_4,
    sizes: ["S", "M", "L", "XL"], // <- add sizes array
    color: "Red",
    delivery: [5, 7],
  },

  {
    _id: "24",
    name: "Hoddie",
    image: hoddie,
    price: 25,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A blanditiis dolore in ",
    category: "Hoddie",
    discount: "30%",
    regular_price: "999",
    product_detail: "The Product You are Finding.",
    product_image_1: product_image_1,
    product_image_2: product_image_2,
    product_image_3: product_image_3,
    product_image_4: product_image_4,
    sizes: ["S", "M", "L", "XL"], // <- add sizes array
    color: "Red",
    delivery: [5, 7],
  },

  {
    _id: "25",
    name: "Jacket",
    image: jacket,
    price: 25,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A blanditiis dolore in ",
    category: "Jacket",
    discount: "30%",
    regular_price: "999",
    product_detail: "The Product You are Finding.",
    product_image_1: product_image_1,
    product_image_2: product_image_2,
    product_image_3: product_image_3,
    product_image_4: product_image_4,
    sizes: ["S", "M", "L", "XL"], // <- add sizes array
    color: "Red",
    delivery: [5, 7],
  },

  {
    _id: "26",
    name: "Shirt",
    image: shirt,
    price: 25,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A blanditiis dolore in ",
    category: "Shirt",
    discount: "30%",
    regular_price: "999",
    product_detail: "The Product You are Finding.",
    product_image_1: product_image_1,
    product_image_2: product_image_2,
    product_image_3: product_image_3,
    product_image_4: product_image_4,
    sizes: ["S", "M", "L", "XL"], // <- add sizes array
    color: "Red",
    delivery: [5, 7],
  },

  {
    _id: "27",
    name: "T-Shirt",
    image: tshirt,
    price: 25,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A blanditiis dolore in ",
    category: "T-Shirt",
    discount: "30%",
    regular_price: "999",
    product_detail: "The Product You are Finding.",
    product_image_1: product_image_1,
    product_image_2: product_image_2,
    product_image_3: product_image_3,
    product_image_4: product_image_4,
    sizes: ["S", "M", "L", "XL"], // <- add sizes array
    color: "Red",
    delivery: [5, 7],
  },

  {
    _id: "28",
    name: "Pant",
    image: pant,
    price: 25,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A blanditiis dolore in ",
    category: "Pant",
    discount: "30%",
    regular_price: "999",
    product_detail: "The Product You are Finding.",
    product_image_1: product_image_1,
    product_image_2: product_image_2,
    product_image_3: product_image_3,
    product_image_4: product_image_4,
    sizes: ["S", "M", "L", "XL"], // <- add sizes array
    color: "Red",
    delivery: [5, 7],
  },

  {
    _id: "29",
    name: "Hoddie",
    image: hoddie,
    price: 25,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A blanditiis dolore in ",
    category: "Hoddie",
    discount: "30%",
    regular_price: "999",
    product_detail: "The Product You are Finding.",
    product_image_1: product_image_1,
    product_image_2: product_image_2,
    product_image_3: product_image_3,
    product_image_4: product_image_4,
    sizes: ["S", "M", "L", "XL"], // <- add sizes array
    color: "Red",
    delivery: [5, 7],
  },

  {
    _id: "30",
    name: "Jacket",
    image: jacket,
    price: 25,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A blanditiis dolore in ",
    category: "Jacket",
    discount: "30%",
    regular_price: "999",
    product_detail: "The Product You are Finding.",
    product_image_1: product_image_1,
    product_image_2: product_image_2,
    product_image_3: product_image_3,
    product_image_4: product_image_4,
    sizes: ["S", "M", "L", "XL"], // <- add sizes array
    color: "Red",
    delivery: [5, 7],
  },
  {
    _id: "31",
    name: "Shirt",
    image: shirt,
    price: 25,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A blanditiis dolore in ",
    category: "Shirt",
    discount: "30%",
    regular_price: "999",
    product_detail: "The Product You are Finding.",
    product_image_1: product_image_1,
    product_image_2: product_image_2,
    product_image_3: product_image_3,
    product_image_4: product_image_4,
    sizes: ["S", "M", "L", "XL"], // <- add sizes array
    color: "Red",
    delivery: [5, 7],
  },

  {
    _id: "32",
    name: "T-Shirt",
    image: tshirt,
    price: 25,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A blanditiis dolore in ",
    category: "T-Shirt",
    discount: "30%",
    regular_price: "999",
    product_detail: "The Product You are Finding.",
    product_image_1: product_image_1,
    product_image_2: product_image_2,
    product_image_3: product_image_3,
    product_image_4: product_image_4,
    sizes: ["S", "M", "L", "XL"], // <- add sizes array
    color: "Red",
    delivery: [5, 7],
  },

  {
    _id: "33",
    name: "Pant",
    image: pant,
    price: 25,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A blanditiis dolore in ",
    category: "Pant",
    discount: "30%",
    regular_price: "999",
    product_detail: "The Product You are Finding.",
    product_image_1: product_image_1,
    product_image_2: product_image_2,
    product_image_3: product_image_3,
    product_image_4: product_image_4,
    sizes: ["S", "M", "L", "XL"], // <- add sizes array
    color: "Red",
    delivery: [5, 7],
  },

  {
    _id: "34",
    name: "Hoddie",
    image: hoddie,
    price: 25,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A blanditiis dolore in ",
    category: "Hoddie",
    discount: "30%",
    regular_price: "999",
    product_detail: "The Product You are Finding.",
    product_image_1: product_image_1,
    product_image_2: product_image_2,
    product_image_3: product_image_3,
    product_image_4: product_image_4,
    sizes: ["S", "M", "L", "XL"], // <- add sizes array
    color: "Red",
    delivery: [5, 7],
  },

  {
    _id: "35",
    name: "Jacket",
    image: jacket,
    price: 25,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A blanditiis dolore in ",
    category: "Jacket",
    discount: "30%",
    regular_price: "999",
    product_detail: "The Product You are Finding.",
    product_image_1: product_image_1,
    product_image_2: product_image_2,
    product_image_3: product_image_3,
    product_image_4: product_image_4,
    sizes: ["S", "M", "L", "XL"], // <- add sizes array
    color: "Red",
    delivery: [5, 7],
  },

  {
    _id: "36",
    name: "Shirt",
    image: shirt,
    price: 25,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A blanditiis dolore in ",
    category: "Shirt",
    discount: "30%",
    regular_price: "999",
    product_detail: "The Product You are Finding.",
    product_image_1: product_image_1,
    product_image_2: product_image_2,
    product_image_3: product_image_3,
    product_image_4: product_image_4,
    sizes: ["S", "M", "L", "XL"], // <- add sizes array
    color: "Red",
    delivery: [5, 7],
  },

  {
    _id: "37",
    name: "T-Shirt",
    image: tshirt,
    price: 25,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A blanditiis dolore in ",
    category: "T-Shirt",
    discount: "30%",
    regular_price: "999",
    product_detail: "The Product You are Finding.",
    product_image_1: product_image_1,
    product_image_2: product_image_2,
    product_image_3: product_image_3,
    product_image_4: product_image_4,
    sizes: ["S", "M", "L", "XL"], // <- add sizes array
    color: "Red",
    delivery: [5, 7],
  },

  {
    _id: "38",
    name: "Pant",
    image: pant,
    price: 25,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A blanditiis dolore in ",
    category: "Pant",
    discount: "30%",
    regular_price: "999",
    product_detail: "The Product You are Finding.",
    product_image_1: product_image_1,
    product_image_2: product_image_2,
    product_image_3: product_image_3,
    product_image_4: product_image_4,
    sizes: ["S", "M", "L", "XL"], // <- add sizes array
    color: "Red",
    delivery: [5, 7],
  },

  {
    _id: "39",
    name: "Hoddie",
    image: hoddie,
    price: 25,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A blanditiis dolore in ",
    category: "Hoddie",
    discount: "30%",
    regular_price: "999",
    product_detail: "The Product You are Finding.",
    product_image_1: product_image_1,
    product_image_2: product_image_2,
    product_image_3: product_image_3,
    product_image_4: product_image_4,
    sizes: ["S", "M", "L", "XL"], // <- add sizes array
    color: "Red",
    delivery: [5, 7],
  },

  {
    _id: "40",
    name: "Jacket",
    image: jacket,
    price: 25,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A blanditiis dolore in ",
    category: "Jacket",
    discount: "30%",
    regular_price: "999",
    product_detail: "The Product You are Finding.",
    product_image_1: product_image_1,
    product_image_2: product_image_2,
    product_image_3: product_image_3,
    product_image_4: product_image_4,
    sizes: ["S", "M", "L", "XL"], // <- add sizes array
    color: "Red",
    delivery: [5, 7],
  },

  {
    _id: "41",
    name: "Shirt",
    image: shirt,
    price: 25,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A blanditiis dolore in ",
    category: "Shirt",
    discount: "30%",
    regular_price: "999",
    product_detail: "The Product You are Finding.",
    product_image_1: product_image_1,
    product_image_2: product_image_2,
    product_image_3: product_image_3,
    product_image_4: product_image_4,
    sizes: ["S", "M", "L", "XL"], // <- add sizes array
    color: "Red",
    delivery: [5, 7],
  },

  {
    _id: "42",
    name: "T-Shirt",
    image: tshirt,
    price: 25,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A blanditiis dolore in ",
    category: "T-Shirt",
    discount: "30%",
    regular_price: "999",
    product_detail: "The Product You are Finding.",
    product_image_1: product_image_1,
    product_image_2: product_image_2,
    product_image_3: product_image_3,
    product_image_4: product_image_4,
    sizes: ["S", "M", "L", "XL"], // <- add sizes array
    color: "Red",
    delivery: [5, 7],
  },

  {
    _id: "43",
    name: "Pant",
    image: pant,
    price: 25,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A blanditiis dolore in ",
    category: "Pant",
    discount: "30%",
    regular_price: "999",
    product_detail: "The Product You are Finding.",
    product_image_1: product_image_1,
    product_image_2: product_image_2,
    product_image_3: product_image_3,
    product_image_4: product_image_4,
    sizes: ["S", "M", "L", "XL"], // <- add sizes array
    color: "Red",
    delivery: [5, 7],
  },

  {
    _id: "44",
    name: "Hoddie",
    image: hoddie,
    price: 25,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A blanditiis dolore in ",
    category: "Hoddie",
    discount: "30%",
    regular_price: "999",
    product_detail: "The Product You are Finding.",
    product_image_1: product_image_1,
    product_image_2: product_image_2,
    product_image_3: product_image_3,
    product_image_4: product_image_4,
    sizes: ["S", "M", "L", "XL"], // <- add sizes array
    color: "Red",
    delivery: [5, 7],
  },

  {
    _id: "45",
    name: "Jacket",
    image: jacket,
    price: 25,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A blanditiis dolore in ",
    category: "Jacket",
    discount: "30%",
    regular_price: "999",
    product_detail: "The Product You are Finding.",
    product_image_1: product_image_1,
    product_image_2: product_image_2,
    product_image_3: product_image_3,
    product_image_4: product_image_4,
    sizes: ["S", "M", "L", "XL"], // <- add sizes array
    color: "Red",
    delivery: [5, 7],
  },

  {
    _id: "46",
    name: "Shirt",
    image: shirt,
    price: 25,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A blanditiis dolore in ",
    category: "Shirt",
    discount: "30%",
    regular_price: "999",
    product_detail: "The Product You are Finding.",
    product_image_1: product_image_1,
    product_image_2: product_image_2,
    product_image_3: product_image_3,
    product_image_4: product_image_4,
    sizes: ["S", "M", "L", "XL"], // <- add sizes array
    color: "Red",
    delivery: [5, 7],
  },

  {
    _id: "47",
    name: "T-Shirt",
    image: tshirt,
    price: 25,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A blanditiis dolore in ",
    category: "T-Shirt",
    discount: "30%",
    regular_price: "999",
    product_detail: "The Product You are Finding.",
    product_image_1: product_image_1,
    product_image_2: product_image_2,
    product_image_3: product_image_3,
    product_image_4: product_image_4,
    sizes: ["S", "M", "L", "XL"], // <- add sizes array
    color: "Red",
    delivery: [5, 7],
  },

  {
    _id: "48",
    name: "Pant",
    image: pant,
    price: 25,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A blanditiis dolore in ",
    category: "Pant",
    discount: "30%",
    regular_price: "999",
    product_detail: "The Product You are Finding.",
    product_image_1: product_image_1,
    product_image_2: product_image_2,
    product_image_3: product_image_3,
    product_image_4: product_image_4,
    sizes: ["S", "M", "L", "XL"], // <- add sizes array
    color: "Red",
    delivery: [5, 7],
  },

  {
    _id: "49",
    name: "Hoddie",
    image: hoddie,
    price: 25,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A blanditiis dolore in ",
    category: "Hoddie",
    discount: "30%",
    regular_price: "999",
    product_detail: "The Product You are Finding.",
    product_image_1: product_image_1,
    product_image_2: product_image_2,
    product_image_3: product_image_3,
    product_image_4: product_image_4,
    sizes: ["S", "M", "L", "XL"], // <- add sizes array
    color: "Red",
    delivery: [5, 7],
  },

  {
    _id: "50",
    name: "Jacket",
    image: jacket,
    price: 25,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A blanditiis dolore in ",
    category: "Jacket",
    discount: "30%",
    regular_price: "999",
    product_detail: "The Product You are Finding.",
    product_image_1: product_image_1,
    product_image_2: product_image_2,
    product_image_3: product_image_3,
    product_image_4: product_image_4,
    sizes: ["S", "M", "L", "XL"], // <- add sizes array
    color: "Red",
    delivery: [5, 7],
  },
  {
    _id: "51",
    name: "Shirt",
    image: shirt,
    price: 25,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A blanditiis dolore in ",
    category: "Shirt",
    discount: "30%",
    regular_price: "999",
    product_detail: "The Product You are Finding.",
    product_image_1: product_image_1,
    product_image_2: product_image_2,
    product_image_3: product_image_3,
    product_image_4: product_image_4,
    sizes: ["S", "M", "L", "XL"], // <- add sizes array
    color: "Red",
    delivery: [5, 7],
  },

  {
    _id: "52",
    name: "T-Shirt",
    image: tshirt,
    price: 25,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A blanditiis dolore in ",
    category: "T-Shirt",
    discount: "30%",
    regular_price: "999",
    product_detail: "The Product You are Finding.",
    product_image_1: product_image_1,
    product_image_2: product_image_2,
    product_image_3: product_image_3,
    product_image_4: product_image_4,
    sizes: ["S", "M", "L", "XL"], // <- add sizes array
    colors: ["Red", "Blue", "Black"], // <- add colors array
    delivery: [5, 7],
  },

  {
    _id: "53",
    name: "Pant",
    image: pant,
    price: 25,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A blanditiis dolore in ",
    category: "Pant",
    discount: "30%",
    regular_price: "999",
    product_detail: "The Product You are Finding.",
    product_image_1: product_image_1,
    product_image_2: product_image_2,
    product_image_3: product_image_3,
    product_image_4: product_image_4,
    sizes: ["S", "M", "L", "XL"], // <- add sizes array
    colors: ["Red", "Blue", "Black"], // <- add colors array
    delivery: [5, 7],
  },

  {
    _id: "54",
    name: "Hoddie",
    image: hoddie,
    price: 25,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A blanditiis dolore in ",
    category: "Hoddie",
    discount: "30%",
    regular_price: "999",
    product_detail: "The Product You are Finding.",
    product_image_1: product_image_1,
    product_image_2: product_image_2,
    product_image_3: product_image_3,
    product_image_4: product_image_4,
    sizes: ["S", "M", "L", "XL"], // <- add sizes array
    colors: ["Red", "Blue", "Black"], // <- add colors array
    delivery: [5, 7],
  },

  {
    _id: "55",
    name: "Jacket",
    image: jacket,
    price: 25,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A blanditiis dolore in ",
    category: "Jacket",
    discount: "30%",
    regular_price: "999",
    product_detail: "The Product You are Finding.",
    product_image_1: product_image_1,
    product_image_2: product_image_2,
    product_image_3: product_image_3,
    product_image_4: product_image_4,
    sizes: ["S", "M", "L", "XL"], // <- add sizes array
    colors: ["Red", "Blue", "Black"], // <- add colors array
    delivery: [5, 7],
  },

  {
    _id: "56",
    name: "Shirt",
    image: shirt,
    price: 25,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A blanditiis dolore in ",
    category: "Shirt",
    discount: "30%",
    regular_price: "999",
    product_detail: "The Product You are Finding.",
    product_image_1: product_image_1,
    product_image_2: product_image_2,
    product_image_3: product_image_3,
    product_image_4: product_image_4,
    sizes: ["S", "M", "L", "XL"], // <- add sizes array
    colors: ["Red", "Blue", "Black"], // <- add colors array
    delivery: [5, 7],
  },

  {
    _id: "57",
    name: "T-Shirt",
    image: tshirt,
    price: 25,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A blanditiis dolore in ",
    category: "T-Shirt",
    discount: "30%",
    regular_price: "999",
    product_detail: "The Product You are Finding.",
    product_image_1: product_image_1,
    product_image_2: product_image_2,
    product_image_3: product_image_3,
    product_image_4: product_image_4,
    sizes: ["S", "M", "L", "XL"], // <- add sizes array
    colors: ["Red", "Blue", "Black"], // <- add colors array
    delivery: [5, 7],
  },

  {
    _id: "58",
    name: "Pant",
    image: pant,
    price: 25,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A blanditiis dolore in ",
    category: "Pant",
    discount: "30%",
    regular_price: "999",
    product_detail: "The Product You are Finding.",
    product_image_1: product_image_1,
    product_image_2: product_image_2,
    product_image_3: product_image_3,
    product_image_4: product_image_4,
    sizes: ["S", "M", "L", "XL"], // <- add sizes array
    colors: ["Red", "Blue", "Black"], // <- add colors array
    delivery: [5, 7],
  },

  {
    _id: "59",
    name: "Hoddie",
    image: hoddie,
    price: 25,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A blanditiis dolore in ",
    category: "Hoddie",
    discount: "30%",
    regular_price: "999",
    product_detail: "The Product You are Finding.",
    product_image_1: product_image_1,
    product_image_2: product_image_2,
    product_image_3: product_image_3,
    product_image_4: product_image_4,
    sizes: ["S", "M", "L", "XL"], // <- add sizes array
    colors: ["Red", "Blue", "Black"], // <- add colors array
    delivery: [5, 7],
  },

  {
    _id: "60",
    name: "Jacket",
    image: jacket,
    price: 25,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A blanditiis dolore in ",
    category: "Jacket",
    discount: "30%",
    regular_price: "999",
    product_detail: "The Product You are Finding.",
    product_image_1: product_image_1,
    product_image_2: product_image_2,
    product_image_3: product_image_3,
    product_image_4: product_image_4,
    sizes: ["S", "M", "L", "XL"], // <- add sizes array
    colors: ["Red", "Blue", "Black"], // <- add colors array
    delivery: [5, 7],
  },
];

export const last_product_list = [
  {
    _id: "1",
    name: "Shirt",
    image: shirt,
    price: 25,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A blanditiis dolore in ",
    category: "Shirt",
    discount: "30%",
    regular_price: "999",
  },

  {
    _id: "2",
    name: "T-Shirt",
    image: tshirt,
    price: 25,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A blanditiis dolore in ",
    category: "T-Shirt",
    discount: "30%",
    regular_price: "999",
  },

  {
    _id: "3",
    name: "Pant",
    image: pant,
    price: 25,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A blanditiis dolore in ",
    category: "Pant",
    discount: "30%",
    regular_price: "999",
  },
];

export const offer_product_list = [


  {
    _id: "1",
    name: "Shirt",
    image: shirt,
    price: 25,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A blanditiis dolore in ",
    category: "Shirt",
    discount: "30%",
    regular_price: "999",
    product_detail: "The Product You are Finding.",
    product_image_1: product_image_1,
    product_image_2: product_image_2,
    product_image_3: product_image_3,
    product_image_4: product_image_4,
    sizes: ["S", "M", "L", "XL"], // <- add sizes array
    colors: ["Red", "Blue", "Black"], // <- add colors array
    delivery: [5, 7],
  },

  {
    _id: "2",
    name: "T-Shirt",
    image: tshirt,
    price: 25,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A blanditiis dolore in ",
    category: "T-Shirt",
    discount: "30%",
    regular_price: "999",
    product_detail: "The Product You are Finding.",
    product_image_1: product_image_1,
    product_image_2: product_image_2,
    product_image_3: product_image_3,
    product_image_4: product_image_4,
    sizes: ["S", "M", "L", "XL"], // <- add sizes array
    colors: ["Red", "Blue", "Black"], // <- add colors array
    delivery: [5, 7],
  },

  {
    _id: "3",
    name: "Pant",
    image: pant,
    price: 25,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A blanditiis dolore in ",
    category: "Pant",
    discount: "30%",
    regular_price: "999",
    product_detail: "The Product You are Finding.",
    product_image_1: product_image_1,
    product_image_2: product_image_2,
    product_image_3: product_image_3,
    product_image_4: product_image_4,
    sizes: ["S", "M", "L", "XL"], // <- add sizes array
    colors: ["Red", "Blue", "Black"], // <- add colors array
    delivery: [5, 7],
  },

  {
    _id: "4",
    name: "Hoddie",
    image: hoddie,
    price: 25,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A blanditiis dolore in ",
    category: "Hoddie",
    discount: "30%",
    regular_price: "999",
    product_detail: "The Product You are Finding.",
    product_image_1: product_image_1,
    product_image_2: product_image_2,
    product_image_3: product_image_3,
    product_image_4: product_image_4,
    sizes: ["S", "M", "L", "XL"], // <- add sizes array
    colors: ["Red", "Blue", "Black"], // <- add colors array
    delivery: [5, 7],
  },

  {
    _id: "5",
    name: "Jacket",
    image: jacket,
    price: 25,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A blanditiis dolore in ",
    category: "Jacket",
    discount: "30%",
    regular_price: "999",
    product_detail: "The Product You are Finding.",
    product_image_1: product_image_1,
    product_image_2: product_image_2,
    product_image_3: product_image_3,
    product_image_4: product_image_4,
    sizes: ["S", "M", "L", "XL"], // <- add sizes array
    colors: ["Red", "Blue", "Black"], // <- add colors array
    delivery: [5, 7],
  },

  {
    _id: "6",
    name: "Shirt",
    image: shirt,
    price: 25,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A blanditiis dolore in ",
    category: "Shirt",
    discount: "30%",
    regular_price: "999",
    product_detail: "The Product You are Finding.",
    product_image_1: product_image_1,
    product_image_2: product_image_2,
    product_image_3: product_image_3,
    product_image_4: product_image_4,
    sizes: ["S", "M", "L", "XL"], // <- add sizes array
    colors: ["Red", "Blue", "Black"], // <- add colors array
    delivery: [5, 7],
  },

  {
    _id: "7",
    name: "T-Shirt",
    image: tshirt,
    price: 25,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A blanditiis dolore in ",
    category: "T-Shirt",
    discount: "30%",
    regular_price: "999",
    product_detail: "The Product You are Finding.",
    product_image_1: product_image_1,
    product_image_2: product_image_2,
    product_image_3: product_image_3,
    product_image_4: product_image_4,
    sizes: ["S", "M", "L", "XL"], // <- add sizes array
    colors: ["Red", "Blue", "Black"], // <- add colors array
    delivery: [5, 7],
  },

  {
    _id: "8",
    name: "Pant",
    image: pant,
    price: 25,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A blanditiis dolore in ",
    category: "Pant",
    discount: "30%",
    regular_price: "999",
    product_detail: "The Product You are Finding.",
    product_image_1: product_image_1,
    product_image_2: product_image_2,
    product_image_3: product_image_3,
    product_image_4: product_image_4,
    sizes: ["S", "M", "L", "XL"], // <- add sizes array
    colors: ["Red", "Blue", "Black"], // <- add colors array
    delivery: [5, 7],
  },

  {
    _id: "9",
    name: "Hoddie",
    image: hoddie,
    price: 25,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A blanditiis dolore in ",
    category: "Hoddie",
    discount: "30%",
    regular_price: "999",
    product_detail: "The Product You are Finding.",
    product_image_1: product_image_1,
    product_image_2: product_image_2,
    product_image_3: product_image_3,
    product_image_4: product_image_4,
    sizes: ["S", "M", "L", "XL"], // <- add sizes array
    colors: ["Red", "Blue", "Black"], // <- add colors array
    delivery: [5, 7],
  },

  {
    _id: "10",
    name: "Jacket",
    image: jacket,
    price: 25,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A blanditiis dolore in ",
    category: "Jacket",
    discount: "30%",
    regular_price: "999",
    product_detail: "The Product You are Finding.",
    product_image_1: product_image_1,
    product_image_2: product_image_2,
    product_image_3: product_image_3,
    product_image_4: product_image_4,
    sizes: ["S", "M", "L", "XL"], // <- add sizes array
    colors: ["Red", "Blue", "Black"], // <- add colors array
    delivery: [5, 7],
  },
  {
    _id: "11",
    name: "Shirt",
    image: shirt,
    price: 25,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A blanditiis dolore in ",
    category: "Shirt",
    discount: "30%",
    regular_price: "999",
    product_detail: "The Product You are Finding.",
    product_image_1: product_image_1,
    product_image_2: product_image_2,
    product_image_3: product_image_3,
    product_image_4: product_image_4,
    sizes: ["S", "M", "L", "XL"], // <- add sizes array
    colors: ["Red", "Blue", "Black"], // <- add colors array
    delivery: [5, 7],
  },

  {
    _id: "12",
    name: "T-Shirt",
    image: tshirt,
    price: 25,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A blanditiis dolore in ",
    category: "T-Shirt",
    discount: "30%",
    regular_price: "999",
    product_detail: "The Product You are Finding.",
    product_image_1: product_image_1,
    product_image_2: product_image_2,
    product_image_3: product_image_3,
    product_image_4: product_image_4,
    sizes: ["S", "M", "L", "XL"], // <- add sizes array
    colors: ["Red", "Blue", "Black"], // <- add colors array
    delivery: [5, 7],
  },

  {
    _id: "13",
    name: "Pant",
    image: pant,
    price: 25,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A blanditiis dolore in ",
    category: "Pant",
    discount: "30%",
    regular_price: "999",
    product_detail: "The Product You are Finding.",
    product_image_1: product_image_1,
    product_image_2: product_image_2,
    product_image_3: product_image_3,
    product_image_4: product_image_4,
    sizes: ["S", "M", "L", "XL"], // <- add sizes array
    colors: ["Red", "Blue", "Black"], // <- add colors array
    delivery: [5, 7],
  },

  {
    _id: "14",
    name: "Hoddie",
    image: hoddie,
    price: 25,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A blanditiis dolore in ",
    category: "Hoddie",
    discount: "30%",
    regular_price: "999",
    product_detail: "The Product You are Finding.",
    product_image_1: product_image_1,
    product_image_2: product_image_2,
    product_image_3: product_image_3,
    product_image_4: product_image_4,
    sizes: ["S", "M", "L", "XL"], // <- add sizes array
    colors: ["Red", "Blue", "Black"], // <- add colors array
    delivery: [5, 7],
  },

  {
    _id: "15",
    name: "Jacket",
    image: jacket,
    price: 25,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A blanditiis dolore in ",
    category: "Jacket",
    discount: "30%",
    regular_price: "999",
    product_detail: "The Product You are Finding.",
    product_image_1: product_image_1,
    product_image_2: product_image_2,
    product_image_3: product_image_3,
    product_image_4: product_image_4,
    sizes: ["S", "M", "L", "XL"], // <- add sizes array
    colors: ["Red", "Blue", "Black"], // <- add colors array
    delivery: [5, 7],
  },

  {
    _id: "16",
    name: "Shirt",
    image: shirt,
    price: 25,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A blanditiis dolore in ",
    category: "Shirt",
    discount: "30%",
    regular_price: "999",
    product_detail: "The Product You are Finding.",
    product_image_1: product_image_1,
    product_image_2: product_image_2,
    product_image_3: product_image_3,
    product_image_4: product_image_4,
    sizes: ["S", "M", "L", "XL"], // <- add sizes array
    colors: ["Red", "Blue", "Black"], // <- add colors array
    delivery: [5, 7],
  },

  {
    _id: "17",
    name: "T-Shirt",
    image: tshirt,
    price: 25,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A blanditiis dolore in ",
    category: "T-Shirt",
    discount: "30%",
    regular_price: "999",
    product_detail: "The Product You are Finding.",
    product_image_1: product_image_1,
    product_image_2: product_image_2,
    product_image_3: product_image_3,
    product_image_4: product_image_4,
    sizes: ["S", "M", "L", "XL"], // <- add sizes array
    colors: ["Red", "Blue", "Black"], // <- add colors array
    delivery: [5, 7],
  },

  {
    _id: "18",
    name: "Pant",
    image: pant,
    price: 25,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A blanditiis dolore in ",
    category: "Pant",
    discount: "30%",
    regular_price: "999",
    product_detail: "The Product You are Finding.",
    product_image_1: product_image_1,
    product_image_2: product_image_2,
    product_image_3: product_image_3,
    product_image_4: product_image_4,
    sizes: ["S", "M", "L", "XL"], // <- add sizes array
    colors: ["Red", "Blue", "Black"], // <- add colors array
    delivery: [5, 7],
  },

  {
    _id: "19",
    name: "Hoddie",
    image: hoddie,
    price: 25,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A blanditiis dolore in ",
    category: "Hoddie",
    discount: "30%",
    regular_price: "999",
    product_detail: "The Product You are Finding.",
    product_image_1: product_image_1,
    product_image_2: product_image_2,
    product_image_3: product_image_3,
    product_image_4: product_image_4,
    sizes: ["S", "M", "L", "XL"], // <- add sizes array
    colors: ["Red", "Blue", "Black"], // <- add colors array
    delivery: [5, 7],
  },

  {
    _id: "20",
    name: "Jacket",
    image: jacket,
    price: 25,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A blanditiis dolore in ",
    category: "Jacket",
    discount: "30%",
    regular_price: "999",
    product_detail: "The Product You are Finding.",
    product_image_1: product_image_1,
    product_image_2: product_image_2,
    product_image_3: product_image_3,
    product_image_4: product_image_4,
    sizes: ["S", "M", "L", "XL"], // <- add sizes array
    colors: ["Red", "Blue", "Black"], // <- add colors array
    delivery: [5, 7],
  },
];


// Instead of array
export const homepage_assets = {
  header_img_1: header_img_one,
  header_img_2: header_img_two,
  header_img_3: header_img_three,
  homepage_poster: poster,
  last_product_display_poster: last_product_poster,
  offers_poster:offer_poster,
};
