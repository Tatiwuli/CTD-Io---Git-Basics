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

const messageForm = document.forms["leave_message"]

messageForm.addEventListener("submit", function (event) {
  event.preventDefault()

  const userName = event.target.usersName.value
  const userEmail = event.target.usersEmail.value
  const userMessage = event.target.usersMessage.value

  console.log("Name:", userName)
  console.log("Email:", userEmail)
  console.log("Message:", userMessage)

  const messageSection = document.getElementById("messages")
  const messageList = messageSection.querySelector("ul")

  const newMessage = document.createElement("li")
  newMessage.innerHTML = `
    <a href="mailto:${userEmail}">${userName}</a>
    <span> said: ${userMessage}</span>
  `

  const removeButton = document.createElement("button")
  removeButton.innerText = "remove"
  removeButton.type = "button"

  removeButton.addEventListener("click", function () {
    const entry = removeButton.parentNode
    entry.remove()
  })

  newMessage.appendChild(removeButton)
  messageList.appendChild(newMessage)

  event.target.reset()
})
