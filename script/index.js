const updateTimeAndDay = () => {
  let currentTime = new Date().toUTCString().substring(17, 25);
  const currentDay = new Date().toLocaleDateString("en-US", {
    weekday: "long",
  });

  let currentDayElement = document.querySelector("#currentDay");
  let currentTimeElement = document.querySelector("#currentTime");
  currentTimeElement.textContent = currentTime;
  currentDayElement.textContent = currentDay;
  let cardContainer = document.querySelector("#cardContainer");
};
setInterval(() => updateTimeAndDay(), 1000);
updateTimeAndDay();

let goal = [
  {
    title: "Open source contribution ",
    content: "i plan on contributing to more Open Source Projects",
  },
  {
    title: "Developer role ",
    content:
      "i plan to transition to mobile app development and achieve a senior developer role",
  },
  {
    title: "Enhance my skills ",
    content: "I plan on improving my skills in both mobile, frontend and backend environment",
  },
  {
    title: "Networking ",
    content: "Contribute to Open Source Projects",
  },
  {
    title: " AI technology ",
    content: "Explore advancements in AI technology",
  },

  {
    title: "Expansion of knowledge ",
    content: "i wish to expand my knowledge in web development and stay updated with the latest trends",
  },
];
