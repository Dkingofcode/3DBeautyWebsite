import {
    blackImg,
    blueImg,
    highlightFirstVideo,
    highlightFourthVideo,
    highlightSecondVideo,
    highlightThirdVideo,
    whiteImg,
    yellowImg,
  } from "../utils";
  
  export const navLists = ["Shop", "Makeup", "Skincare", "Support"];

  export const hightlightsSlides = [
    {
      id: 1,
      textLists: [
        "Flawless Finish Foundation.",
        "Blendable. Buildable.",
        "Your skin, perfected.",
      ],
      video: highlightFirstVideo,
      videoDuration: 5,
    },
    {
      id: 2,
      textLists: [
        "The Glow Up.",
        "Lightweight highlighters for",
        "that dewy, radiant look.",
      ],
      video: highlightSecondVideo,
      videoDuration: 5,
    },
    {
      id: 3,
      textLists: [
        "Long-lasting Lip Colors.",
        "Bold pigments. Hydrating finish.",
        "Unstoppable confidence.",
      ],
      video: highlightThirdVideo,
      videoDuration: 5,
    },
    {
      id: 4,
      textLists: [
        "The Ultimate Brush Set.",
        "Precision tools for every look.",
        "Create like a pro.",
      ],
      video: highlightFourthVideo,
      videoDuration: 5.55,
    },
  ];
  
  export const models = [
    {
      id: 1,
      title: "Hydrating Foundation in Warm Beige",
      color: ["#F5CBA7", "#F4E3D7", "#D7B396"],
      img: whiteImg,
    },
    {
      id: 2,
      title: "Matte Lipstick in Scarlet Red",
      color: ["#D72638", "#F04E45", "#912024"],
      img: yellowImg,
    },
    {
      id: 3,
      title: "Eyeshadow Palette in Earth Tones",
      color: ["#8B5E3C", "#D2B48C", "#5A3921"],
      img: blackImg,
    },
    {
      id: 4,
      title: "Blush in Rosy Glow",
      color: ["#F28E9C", "#FFC1CC", "#E8738A"],
      img: yellowImg,
    },
  ];
  
  export const sizes = [
    { label: "Travel Size", value: "small" },
    { label: "Full Size", value: "large" },
  ];
  
  export const footerLinks = [
    "Privacy Policy",
    "Shipping & Returns",
    "Contact Us",
    "Legal",
    "Site Map",
  ];
  