import { FaBolt, FaMobileAlt, FaPalette } from "react-icons/fa";

export const featureData = [
  {
    id: 1,
    title: "Blazing Fast Performance",
    description:
      "Enjoy lightning-fast load times and buttery-smooth animations that keep users engaged and coming back for more.",
    icon: FaBolt,
    iconClass:
      "text-white p-6 text-7xl rounded-full bg-gradient-to-br from-yellow-300 via-amber-400 to-orange-500 hover:from-yellow-200 hover:via-yellow-400 hover:to-orange-400 transition duration-500 cursor-pointer ease-in-out",
      lineClass:'w-[30%] my-6 h-1 bg-gradient-to-br from-yellow-300 via-amber-400 to-orange-500',
  },
  {
    id: 2,
    title: "Fully Responsive",
    description:
      "From big desktop screens to tiny mobile devices, your UI will always look pixel-perfect and adapt flawlessly.",
    icon: FaMobileAlt,
    iconClass:
      "text-white p-6 text-7xl rounded-full bg-gradient-to-br from-sky-400 via-cyan-400 to-teal-500 hover:from-blue-400 hover:via-sky-500 hover:to-cyan-400 transition duration-500 cursor-pointer ease-in-out",
      lineClass:'w-[30%] my-6 h-1 bg-gradient-to-br from-sky-400 via-cyan-400 to-teal-500',
  },
  {
    id: 3,
    title: "Stunning Modern Design",
    description:
      "Crafted with a sleek aesthetic, premium typography, and vibrant gradients to make your brand unforgettable.",
    icon: FaPalette,
    iconClass:
      "text-white p-6 text-7xl rounded-full bg-gradient-to-br from-pink-400 via-fuchsia-500 to-purple-500 hover:from-rose-400 hover:via-pink-500 hover:to-fuchsia-500 transition duration-500 cursor-pointer ease-in-out",
      lineClass:'w-[30%] my-6 h-1 bg-gradient-to-br from-pink-400 via-fuchsia-500 to-purple-500',
  },
];
