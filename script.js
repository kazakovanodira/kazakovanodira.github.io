const rights = [
    {
      title: "Digital Privacy",
      content:
        "I have the right to keep my devices private and not share access to them with my partner. It doesn’t mean I don’t trust my partner, but it means I deserve personal privacy and space.",
      mics: "(Trust / Separate Identities)",
    },
    {
      title: "Social Media Freedom",
      content:
        "I have the right to choose what social media content I post and participate in because it represents my own personality and separate identity. I should not be pressured to change my online behavior to please my partner.",
      mics: "(Separate Identities / Mutual Respect)",
    },
    {
      title: "Respectful Communication",
      content:
        "I have the right to be talked to and treated respectfully no matter the circumstances or mistakes, as long as I am not intentionally doing harm. Every person deserves to be treated with dignity and mutual respect.",
      mics: "(Mutual Respect / Communication)",
    },
    {
      title: "Freedom of Interests",
      content:
        "I have the right to pursue my own hobbies and interests without needing permission or approval from my partner because I am my own person with unique passions and identity.",
      mics: "(Separate Identities / Fairness-Equality)",
    },
    {
      title: "Emotional Expression",
      content:
        "I have the right to express my emotions and needs openly without being judged, mocked, or punished because honest communication is essential for a healthy relationship.",
      mics: "(Communication / Support)",
    },
    {
      title: "Maintaining Relationships",
      content:
        "I have the right to maintain my relationships with friends and family without jealousy or control from my partner because trust and independence are necessary for balance.",
      mics: "(Trust / Support)",
    },
    {
      title: "Physical Safety",
      content:
        "I have the right to feel safe from any physical harm or violence in all circumstances because love should never cause fear or pain. Mutual respect and safety are non-negotiable.",
      mics: "(Mutual Respect / Support)",
    },
    {
      title: "Consent and Boundaries",
      content:
        "I have the right to give or withdraw consent at any time without fear of being shamed, pressured, or punished. My body and comfort always come first.",
      mics: "(Mutual Respect / Fairness-Equality)",
    },
    {
      title: "Sexual Expression",
      content:
        "I have the right to express my sexual interests or boundaries freely without being humiliated or forced. My partner and I both deserve respect for our personal limits.",
      mics: "(Separate Identities / Communication)",
    },
    {
      title: "Financial Independence",
      content:
        "I have the right to earn, save, and spend my own money as I choose because I am an independent individual with my own needs and responsibilities.",
      mics: "(Fairness-Equality / Separate Identities)",
    },
  ];
  
  let current = 0;
  
  const title = document.getElementById("title");
  const content = document.getElementById("content");
  const mics = document.getElementById("mics");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const listBtn = document.getElementById("listBtn");
  const listView = document.getElementById("listView");
  const slide = document.getElementById("slide");
  const allRights = document.getElementById("allRights");
  const backToSlide = document.getElementById("backToSlide");
  
  function showRight(index) {
    const r = rights[index];
    title.textContent = r.title;
    content.textContent = r.content;
    mics.textContent = r.mics;
  
    prevBtn.disabled = index === 0;
    nextBtn.disabled = index === rights.length - 1;
  }
  
  function showListView() {
    slide.style.display = "none";
    listView.style.display = "block";
    allRights.innerHTML = rights
      .map(
        (r, i) =>
          `<h3>${i + 1}. ${r.title}</h3>
           <p>${r.content}</p>
           <p class="mics"><strong>${r.mics}</strong></p>`
      )
      .join("");
  }
  
  function backToSlides() {
    listView.style.display = "none";
    slide.style.display = "block";
  }
  
  prevBtn.addEventListener("click", () => {
    if (current > 0) {
      current--;
      showRight(current);
    }
  });
  
  nextBtn.addEventListener("click", () => {
    if (current < rights.length - 1) {
      current++;
      showRight(current);
    }
  });
  
  listBtn.addEventListener("click", showListView);
  backToSlide.addEventListener("click", backToSlides);
  
  showRight(current);
  