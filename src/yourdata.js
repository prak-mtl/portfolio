export default {
  //(Please Do Not Remove The comma(,) after every variable)
  //Change The Website Template
  name: "Prakhar Mittal",
  // headerTagline: [
  //   //Line 1 For Header
  //   "Hi 👋 You found me! I am Prakhar Mittal.",
  //   //Line 2 For Header
  //   "Web developer/designer",
  //   //Line 3 For Header
  //   "from India",
  // ],

  headerTagline: [
    "Hey, I'm a software developer.",
    "I can solve ",
    "all, some, one of",
    " your problems, ok?",
    "I design, build & sometimes rescue applications.",
    "Have a project, idea or problem you'd like to discuss?",
  ],
  //Contact Email
  contactEmail: "prak.mtl@outlook.com",
  // Add Your About Text Here
  abouttext:
    "Professionally connected with the web development industry and information technology for many years. Well-organised person, problem solver, independent employee with high attention to detail. Fan of football, outdoor activities, TV series, cooking, travelling, photography and, recently, fitness." +
    " Interested in the entire frontend spectrum and have experience in designing, developing and deploying user-friendly and engaging applications.",
  aboutImage: require("./images/profile.png"),
  //Change This To Hide The Image of About Section (True Or False)
  ShowAboutImage: true, //true or false (Change Here)
  // Change Projects Here
  projects: [
    {
      id: 1, //DO NOT CHANGE THIS (Please)😅
      title: "Weather app", //Project Title - Add Your Project Title Here
      service: "Design and development", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc: require("./images/mac/weather.png"),
      // imageSrc: require("./images/weather.png"),
      //Project URL - Add Your Project Url Here
      url: "https://prak-mtl.github.io/Weather",
    },
    {
      id: 2, //DO NOT CHANGE THIS (Please)😅
      title: "Currency converter",
      service: "Web App",
      imageSrc: require("./images/mac/currency.png"),
      // imageSrc: require("./images/currency.png"),
      url: "https://prak-mtl.github.io/Currency-converter/",
    },
    {
      id: 3, //DO NOT CHANGE THIS (Please)😅
      title: "Magic Mirror",
      service: "IOT",
      imageSrc: require("./images/mac/magic-mirror.png"),
      // imageSrc: require("./images/magic-mirror.jpg"),
      url:
        "https://github.com/prak-mtl/Raspberry-Pi-Smart-Mirror-with-facial-recognition",
    },
    {
      id: 4, //DO NOT CHANGE THIS (Please)😅
      title: "Address book",
      service: "Website Development",
      imageSrc: require("./images/mac/address.png"),
      // imageSrc: require("./images/address-book.png"),
      url: "https://prak-mtl.github.io/Address-Book/",
    },
  ],
  social: [
    // Add Or Remove The Link Accordingly
    {
      name: "Linkedin",
      url: "https://www.linkedin.com/in/prakmtl",
    },
    { name: "Github", url: "https://github.com/prak-mtl" },
    {
      name: "Stack overflow",
      url: "https://stackoverflow.com/users/9478145/prakhar-mittal",
    },
    {
      name: "Behance",
      url: "https://www.behance.net/prakmtlf2b0",
    },
    {
      name: "Dribbble",
      url: "https://dribbble.com/prak_mtl",
    },
    {
      name: "Twitter",
      url: "https://twitter.com/MtlPrak",
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/prakhar.mittal.75",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/agnostic_mtl/",
    },
  ],
};
