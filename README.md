# Election Process Education | Your Vote, Your Power

A premium, interactive web application designed to educate citizens, especially first-time voters, about the Indian Election Process. Built as a high-impact, professional-grade dashboard for the **Promptwar Competition**, this project combines gamified learning, realistic simulations, and a stunning "cyber-democracy" aesthetic to make civic education engaging and accessible.

## 🌟 Key Features

* **Command Center (Overview):** A sleek dashboard providing real-time simulated statistics on the Indian democratic process (Total Voters, Polling Booths, EVM Machines) and a high-level "Democracy Matrix."
* **Learning Protocol:** Interactive timelines and cards detailing the Election Commission of India (ECI) guidelines, election phases (from registration to results), and structural branches of the government (Lok Sabha, Rajya Sabha, State Assembly).
* **Simulation Zone:**
  * **Hardware Demo (EVM + VVPAT):** A functional, visual simulation of an Electronic Voting Machine and Voter Verifiable Paper Audit Trail. Users can cast a simulated vote and watch the VVPAT slip generate and disappear after 7 seconds.
  * **Voter Simulator:** A scenario-based game testing user responsibility and awareness during the election process.
  * **Fact Checker (Fake News):** An interactive module to train users in identifying election-related misinformation and fake news, providing instant feedback and explanations.
* **Certification Protocol:** A comprehensive 50-question master assessment covering the intricacies of the Indian electoral system. Scoring 75% or higher unlocks a personalized, printable "Certificate of Democratic Excellence."
* **Immersive UI/UX:**
  * **Glassmorphism & Neon Design:** Built with cutting-edge CSS techniques featuring frosted glass panels, vibrant neon borders (Saffron, White, Green), and dynamic glowing orbs.
  * **Gamification:** Features a "Readiness Score" meter that fills up as the user interacts with different parts of the dashboard.
  * **Audio Cues:** Interactive sound effects for clicks, successes, and errors to enhance user engagement.

## 🛠️ Technology Stack

This project is built using vanilla web technologies, requiring no build steps or package managers to run:

* **HTML5:** Semantic structure and layout.
* **CSS3:** Custom styling utilizing CSS variables, flexbox, CSS Grid, animations (keyframes), and responsive media queries.
* **JavaScript (Vanilla JS):** Core logic for DOM manipulation, state management (quiz, simulations, readiness score), tab navigation, and audio handling.
* **External Assets:**
  * [FontAwesome (v6.4.0)](https://fontawesome.com/) for iconography.
  * [Google Fonts (Outfit)](https://fonts.google.com/specimen/Outfit) for modern typography.
  * [Mixkit](https://mixkit.co/) for audio sound effects.

## 🚀 Getting Started

To run this project locally, simply follow these steps:

1. **Clone or Download** the repository to your local machine.
2. Navigate to the project folder (`election-process-education`).
3. Open the `index.html` file in any modern web browser (Chrome, Firefox, Edge, Safari).
   * *Optional but recommended:* Use a local development server like VS Code's "Live Server" extension for the best experience.

## 📁 Project Structure

```text
election-process-education/
├── index.html       # The main application structure and UI elements
├── style.css        # Contains all styling, variables, animations, and responsive design
├── main.js          # Application logic, data arrays (quiz, timeline, scenarios), and interactivity
└── README.md        # Project documentation
```

## 🎮 How to Use

1. **Initialize Dashboard:** Upon opening the app, enter your name in the Voter Portal overlay to initialize your session and generate your personalized certificate later.
2. **Explore Tabs:** Use the sidebar navigation to switch between the Overview, Learn Protocol, Simulation Zone, and Certification sections.
3. **Interact:** Click on EVM buttons, answer simulation questions, and play the Fact Checker game to increase your Readiness Score.
4. **Get Certified:** Take the 50-question quiz in the Certification tab. Pass with a 75% or higher to view and print your custom certificate.

---
*Built for Promptwar v1.0 • 2026*
