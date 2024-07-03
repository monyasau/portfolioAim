let goalsContainer = document.querySelector("#goalsContainer");
const updateTimeAndDay = () => {
  let currentTime = new Date().toUTCString().substring(17, 25);
  const currentDay = new Date().toLocaleDateString("en-US", {
    weekday: "long",
  });

  let currentDayElement = document.querySelector("#currentDay");
  let currentTimeElement = document.querySelector("#currentTime");
  currentTimeElement.textContent = currentTime;
  currentDayElement.textContent = currentDay;
};
setInterval(() => updateTimeAndDay(), 1000);
updateTimeAndDay();

let goals = [
  {
    title: "Open source contribution ",
    content:
      "i plan on contributing to more Open Source Projects to grow my skills",
  },
  {
    title: "Developer role ",
    content:
      "i plan to transition to mobile app development and achieve a senior developer role",
  },
  {
    title: "Enhance my skills ",
    content:
      "I plan on improving my skills in both mobile, frontend and backend environment",
  },
  {
    title: "Network with other people",
    content: "Build connections with peers to learn and grow together",
  },
  {
    title: "Enhance problem-solving skills with algorithms and data structures",
    content:
      "I would have significantly Improved my ability to solve complex problems efficiently.",
  },
  {
    title: " AI technology ",
    content: "Explore advancements in AI technology",
  },
  {
    title: " Start a tech blog to share knowledge and experiences",
    content:
      "I want to Write articles to document my journey and help others learn.",
  },
  {
    title: " Participate in hackathons and coding competitions ",
    content:
      "I plan to Engage in competitive coding to sharpen problem-solving skills.",
  },

  {
    title: "Expansion of knowledge ",
    content:
      "i wish to expand my knowledge in web development and stay updated with the latest trends",
  },
  {
    title: "Build and contribute to personal and community-driven project",
    content:
      "i will Collaborate on projects that make a positive impact on the developer community and the world at large",
  },
];
// goals.map((goal)=>)

goalsContainer.innerHTML = "";
goals.map((goal) => {
  let card = document.createElement("div");
  card.className = "card";
  let title = document.createElement("h2");
  title.textContent = goal.title;
  card.appendChild(title);
  let content = document.createElement("span");
  content.textContent = goal.content;
  card.appendChild(content);
  goalsContainer.appendChild(card);
});
