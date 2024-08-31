const today = new Date()
const thisYear = today.getFullYear()

const footer = document.createElement("footer")
document.body.appendChild(footer)

const copyright = document.createElement("p")
copyright.innerHTML = `&copy; Tatiane Wu Li ${thisYear}`
footer.appendChild(copyright)

const skills = [
  "Java (WPILIB)",
  "Python",
  "SQL",
  "PowerBI",
  "Tableau",
  "GitHub",
  "Figma",
]

const skillsSection = document.getElementById("Skills")
const skillsList = skillsSection.querySelector("ul")

for (let i = 0; i < skills.length; i++) {
  const skill = document.createElement("li")
  skill.innerText = skills[i]
  skillsList.appendChild(skill)
}
