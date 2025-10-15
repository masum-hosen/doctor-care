const services = [
  {
    id: 1,
    title: "Problemas digestivos",
    desc: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit offici                 a consequat duis enim.",
  },
  {
    id: 2,
    title: "Saúde Hormonal",
    desc: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim.",
  },
  {
    id: 3,
    title: "Bem-estar mental",
    desc: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim.",
  },
  {
    id: 4,
    title: "Cuidados Pediátricos",
    desc: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim.",
  },
  {
    id: 5,
    title: "Autoimune e Inflamação",
    desc: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim.",
  },
  {
    id: 6,
    title: "Saúde do Coração",
    desc: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim.",
  },
];

const card = services
  .map(service => {
    return `
    <div class="bg-white shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer rounded-lg overflow-hidden">
    <div class="p-6 text-left">
    <img src="/images/service-icon.png" alt="service icon" />
    <h2 class="text-2xl font-semibold my-4">${service.title}</h2>
    <p class="text-gray-700 mb-4">${service.desc}</p>
    </div>
    </div>
    `;
  })
  .join("");
const serviceContainer = document.getElementById("service-container");
serviceContainer.innerHTML = card;
