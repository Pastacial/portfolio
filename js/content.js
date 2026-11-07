/* ===== EDIT YOUR CONTENT HERE =====
   - Any text starting with "[" is a placeholder: it shows highlighted on the site so you can find it.
   - **double asterisks** make bold text.
   - Images are picked up by filename; drop the file in and it appears (see README.md).
*/
const SITE = {
  name: "Wissem Nouir",
  initials: "WN",
  //role: "Computer engineer",
  photo: "assets/profile_picture.png",
  cv: "assets/CV(en).pdf",
  email: "wissemnouir1@gmail.com",
  linkedin: "https://www.linkedin.com/in/wissem-nouir",
  github: "https://github.com/Pastacial", // paste GitHub URL to show the icon
  intro: "Computer engineer who thrives on putting together solutions and seeing them through to deliver results. I have delivered projects in IoT networking, machine learning, software testing & development and security engineering over three year,learning each new stack by building with it. I’d love to contribute to a team that benefits from what I bring. If that’s yours, let’s talk..",
  experience: [
    { title: "Cybersecurity Intern", org: "NTNU, Gjøvik, Norway", dates: "03/2026 – 06/2026",
      points: ["**Assessed** the PHIS/OpenSILEX REST API following the OWASP Web Security Testing Guide.",
               "**Built** a React dashboard for real-time vulnerability tracking and status management.",
               "[Add: what you learned, who you worked with, outcome]"],
      more: ["projects.html", "Read the project story"] },
    { title: "Technical Manager", org: "SecurinetsEPS Cybersecurity Club", dates: "12/2024 – 05/2025",
      points: ["**Designed** diverse CTF challenges.", "**Organized** workshops and managed event logistics so competitions ran smoothly.",
               "[Add: number of participants, event names]"],
      more: ["activities.html", "See the activities"] },
    { title: "AI & Machine Learning Intern", org: "NTNU, Gjøvik, Norway", dates: "07/2024 – 09/2024",
      points: ["**Built** a movement detection pipeline on real barn surveillance footage using EfficientDet-D0.",
               "**Benchmarked** Barlow Twins self-supervised pre-training against the baseline detector with COCO metrics."],
      more: ["projects.html", "Read the project story"] },
    { title: "IoT Engineering Intern", org: "NTNU, Gjøvik, Norway", dates: "05/2023 – 09/2023",
      points: ["**Designed and tested** a multi-sensor prototype benchmarking Wi-Fi, NB-IoT and LoRaWAN.",
               "**Evaluated** throughput and reliability to find the most viable protocol for large sensor networks.",
               "Final-year Bachelor’s internship, graduated with exceptional honors."],
      more: ["projects.html", "Read the project story"] }
  ],
  education: [
    { title: "Engineering Degree, Computer Science (Cyber Security)", org: "École Polytechnique de Sousse, Tunisia (EUR-ACE accredited)", dates: "10/2023 – 06/2026" },
    { title: "Exchange student, Computer Science", org: "NTNU, Gjøvik, Norway", dates: "05/2023 – 09/2023" },
    { title: "Bachelor’s, Computer Systems Engineering (Embedded Systems & IoT)", org: "ISSAT Sousse, Tunisia", dates: "09/2020 – 09/2023" }
  ],
  skills: [
    ["Security", "SIEM (Wazuh, Graylog), IDS/IPS (Suricata, Snort), SOAR (TheHive, Cortex, Shuffle, n8n), Burp Suite, Wireshark"],
    ["Software & dev", "Python, C++, JavaScript, MySQL, Arduino"],
    ["Platforms", "Linux, Windows Server, AWS"],
    ["Languages", "English (B2), French (B1), German (A1)"]
  ],

  /* Projects: id = image name (assets/projects/<id>.png). A link only shows if its url is filled. */
  projects: [
    { id: "phis", title: "PHIS/OpenSILEX API security assessment", tag: "NTNU, 2026",
      bullets: ["**Tested** the REST API following the OWASP Web Security Testing Guide.", "**Built** a React dashboard to track vulnerabilities and their status in real time.", "[Add one more highlight]"],
      problem: "[Add: what PHIS/OpenSILEX is and why its API needed a security assessment]",
      approach: "Followed the **OWASP Web Security Testing Guide** against the REST API. [Add: scope, tools, methodology]",
      result: "A React dashboard for real-time vulnerability tracking and status management. [Add: what you can disclose, such as counts by severity, lessons, remediation]",
      stack: ["OWASP WSTG", "REST API", "React", "[Add tools]"], links: [{ label: "GitHub", url: "" }] },
    { id: "barn", title: "Barn movement detection", tag: "NTNU, 2024",
      bullets: ["**Built** a detection pipeline on real barn surveillance footage with EfficientDet-D0.", "**Applied** Barlow Twins self-supervised pre-training.", "**Benchmarked** it against the baseline using COCO metrics."],
      problem: "[Add: what had to be detected in the footage, and why it was hard]",
      approach: "An EfficientDet-D0 pipeline on real-world footage, with Barlow Twins self-supervised pre-training compared to the baseline detector. [Add: data, training setup]",
      result: "[Add: baseline vs Barlow Twins numbers (mAP etc.) and what you concluded]",
      stack: ["EfficientDet-D0", "Barlow Twins", "COCO metrics", "[Add framework]"], links: [{ label: "GitHub", url: "" }] },
    { id: "iot", title: "Wi-Fi vs NB-IoT vs LoRaWAN", tag: "NTNU, 2023, Bachelor’s final project",
      bullets: ["**Designed** a multi-sensor prototype.", "**Measured** throughput and reliability of three protocols.", "Graduated with exceptional honors."],
      problem: "Large industrial and agricultural sensor networks need a protocol that moves high data volumes reliably. [Add: your own framing]",
      approach: "A multi-sensor prototype used to benchmark Wi-Fi, NB-IoT and LoRaWAN under the same conditions. [Add: boards, sensors, test setup]",
      result: "Identified the most viable protocol for large-scale connected sensor networks. [Add: which one won, with numbers]",
      stack: ["Wi-Fi", "NB-IoT", "LoRaWAN", "[Add boards/sensors]"], links: [{ label: "Report", url: "" }] },
    { id: "soc", title: "SOC and SOAR lab", tag: "[Year / context]",
      bullets: ["[Add: what you deployed and how the pieces connect]", "[Add: a detection or automation you built]", "[Add: what you learned]"],
      problem: "[Add: what the lab was meant to simulate or defend]",
      approach: "[Add: architecture, from log sources to SIEM to case management to automation]",
      result: "[Add: attacks detected, response time saved, lessons]",
      stack: ["Wazuh", "Graylog", "Suricata", "TheHive", "Cortex", "Shuffle", "n8n"], links: [{ label: "GitHub", url: "" }] }
  ],

  /* Certifications: id = badge image name (assets/certs/<id>.png). color tints the hover. */
  certs: {
    profile: "", profileLabel: "Credly profile", // paste your badges URL to show the button
    done: [
      { id: "cyberops", name: "Cisco CyberOps Associate", issuer: "Cisco Networking Academy", date: "12/2025", color: "#1ba0d7" },
      { id: "aws-cloudops", name: "AWS Academy Cloud Operations", issuer: "Amazon Web Services", date: "12/2025", color: "#ff9900" }
    ],
    progress: [
      { id: "next", name: "[Next certification]", issuer: "[Issuer]", date: "", color: "#6b7785" }
    ]
  },

  /* Activities: id = photo name (assets/activities/<id>.jpg) */
  activities: [
    { id: "securinets", title: "Technical Manager, SecurinetsEPS", text: "Organized workshops, designed diverse CTF challenges and managed the logistics of the club’s events. [Add a detail you’re proud of]" },
    { id: "ctf", title: "[CTF participation]", text: "[Add: CTFs you played, teams, rankings, write-ups]" },
    { id: "workshops", title: "[Workshops or talks]", text: "[Add: topic, audience, what you taught]" },
    { id: "platforms", title: "[TryHackMe / HackTheBox / other]", text: "[Add: rooms, rank, what you practiced]" }
  ],

  terminal: { welcome: "Welcome. Type <b>help</b> to see what this terminal knows.", flag: "CTF{Y0u_f0UNd_ME!}" }
};
