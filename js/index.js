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

// Ensure DOM is fully loaded before running this code
document.addEventListener("DOMContentLoaded", function () {
  fetch("https://api.github.com/users/Tatiwuli/repos")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok")
      }
      return response.json()
    })
    .then((repositories) => {
      const projectSection = document.getElementById("projects")
      const projectList = projectSection.querySelector("ul")

      if (repositories.length === 0) {
        const emptyMessage = document.createElement("p")
        emptyMessage.innerText = "No repositories found."
        projectSection.appendChild(emptyMessage)
        return
      }

      for (let i = 0; i < repositories.length; i++) {
        const repo = repositories[i]
        const project = document.createElement("li")
        project.innerText = repo.name
        projectList.appendChild(project)
      }
    })
    .catch((error) => {
      const projectSection = document.getElementById("projects")
      const errorMessage = document.createElement("p")
      errorMessage.innerText =
        "Error fetching repositories. Please try again later."
      projectSection.appendChild(errorMessage)
    })
})
