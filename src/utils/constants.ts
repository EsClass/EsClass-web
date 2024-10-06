export const phoneRegex = /^(7\d{9}|8\d{9}|9\d{9})$/;
export const variables = {
  address: "Manchester, UK",
  phone: "+234 808 904 350",
  email: "odunilade@gmail.com",
};

export const roles = [
  {
    title: "Student",
    icon: require("../../public/images/student.png"),
    route: "/student/signup",
    list: [
      "Explore Tutor created courses",
      "Take computer based tests with instant feedback",
      "Access questions with solutions",
    ],
  },
  {
    title: "Tutor",
    icon: require("../../public/images/tutor.png"),
    route: "/tutor/signup",
    list: [
      "Create and manage courses seamlessly.",
      "Monetize your content",
      "Instant Result For CBT Test",
    ],
  },
];
