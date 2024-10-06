export const phoneRegex = /^(7\d{9}|8\d{9}|9\d{9})$/;
export const variables = {
  address: "Manchester, UK",
  phone: "+44.3929.7339",
  email: "support@guardiangems.co.uk",
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

export const categories = [
  "Artificial Intelligence",
  "Biomedical Engineering",
  "Business Administration",
  "Chemical Engineering",
  "Civil Engineering",
  "Computer Science",
  "Computer Engineering",
  "Cybersecurity",
  "Data Science",
  "Economics",
  "Education",
  "Electrical Engineering",
  "Environmental Engineering",
  "Finance",
  "Human Resources",
  "International Relations",
  "Law",
  "Machine Learning",
  "Marketing",
  "Mathematics",
  "Mechanical Engineering",
  "Mobile App Development",
  "Operations Management",
  "Pharmacology",
  "Political Science",
  "Psychology",
  "Public Health",
  "Software Engineering",
  "Sociology",
  "Statistics",
  "Web Development",
];
