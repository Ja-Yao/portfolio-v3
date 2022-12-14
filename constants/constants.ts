import { customAlphabet } from 'nanoid'

import bcLogo from '../public/black_cape-logo.png';

export const testimonials = [
  // {
  //   author: "Rob Jarvis",
  //   position: "Senior Software Engineer",
  //   company: "Black Cape",
  //   impactful: "Jacob was consistently motivated to learn and contribute to the team's effort.",
  //   major: "He was quick to find out new technologies and frameworks to learn and worked at them until he had a solid understanding. By the end of his time here he was contributing code that was able to be deployed to production."
  // },
  {
    author: "Scott Barnes",
    position: "Senior Solutions Architect",
    company: "Black Cape",
    image: bcLogo,
    impactful: "Jacob has a knack for UI/UX design.",
    major: "He was put on the frontend team for Black Cape's Space-Time Intelligence & Reasoning Engine (STIRE), and ended up leading the effort to take the UI from a demo to a production-ready system."
  }
];

export const nanoid = customAlphabet('1234567890abcdef', 10);