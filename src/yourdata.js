export default {
  //(Please Do Not Remove The comma(,) after every variable)
  //Change The Website Template
  name: "Prakhar Mittal",
  headerTagline: [
    //Line 1 For Header
    "Hi 👋 You found me! I am Prakhar Mittal.",
    //Line 2 For Header
    "Web developer/designer",
    //Line 3 For Header
    "from India",
  ],
  //Contact Email
  contactEmail: "prak.mtl@outlook.com",
  // Add Your About Text Here
  abouttext:
    "Experienced and enthusiastic software developer seeking out for a challenging job in UI development. " +
    "I am a passionate computer programmer and an enthusiastic software developer." +
    "I have experience in designing, developing and deploying user-friendly and engaging applications.  ",
  aboutImage: require("./images/profile.png"),
  //Change This To Hide The Image of About Section (True Or False)
  ShowAboutImage: true, //true or false (Change Here)
  // Change Projects Here
  projects: [
    {
      id: 1, //DO NOT CHANGE THIS (Please)😅
      title: "Project One", //Project Title - Add Your Project Title Here
      service: "Design and development", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc: require("./images/weather.png"),
      //Project URL - Add Your Project Url Here
      url: "https://prak-mtl.github.io/Weather",
    },
    {
      id: 2, //DO NOT CHANGE THIS (Please)😅
      title: "Project Two",
      service: "Website Development",
      imageSrc: require("./images/address-book.png"),
      url: "https://prak-mtl.github.io/Address-Book/",
    },
    {
      id: 3, //DO NOT CHANGE THIS (Please)😅
      title: "Project Three",
      service: "Web App",
      imageSrc: require("./images/currency.png"),
      url: "https://prak-mtl.github.io/Currency-converter/",
    },
    {
      id: 4, //DO NOT CHANGE THIS (Please)😅
      title: "Project Four",
      service: "IOT",
      imageSrc: require("./images/magic-mirror.jpg"),
      url:
        "https://github.com/prak-mtl/Raspberry-Pi-Smart-Mirror-with-facial-recognition",
    },
  ],
  social: [
    // Add Or Remove The Link Accordingly
    { name: "Github", url: "https://github.com/prak-mtl" },
    {
      name: "Linkedin",
      url: "https://www.linkedin.com/in/prakmtl",
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
      name: "Instagram",
      url: "https://www.instagram.com/agnostic_mtl/",
    },
    {
      name: "Twitter",
      url: "https://twitter.com/MtlPrak",
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/prakhar.mittal.75",
    },
  ],
};
