/**
 * PORTFOLIO JAVASCRIPT - PIYUSH KUMAR
 * B.Tech CSE (AI & ML) Student | Emerging Technology Professional
 * Features:
 *  1. Dark/Light theme toggle with localStorage persistence
 *  2. AI/ML Dynamic Typewriter effect
 *  3. Skill Category Filtering
 *  4. Interactive Resume Modal with Print & Download
 *  5. One-Click Copy to Clipboard (Email & Phone) + Toast notification
 *  6. Contact Form Validation, Submission & Mailto Fallback
 *  7. Smooth Scroll, Active Navbar Link Tracking & Mobile Menu
 *  8. Back to Top handler & Auto-updating Year
 */

document.addEventListener('DOMContentLoaded', () => {

  /* =========================================================================
     1. THEME SWITCHER (DARK / LIGHT MODE)
     ========================================================================= */
  const themeToggle = document.getElementById('theme-toggle');
  const htmlRoot = document.documentElement;

  // Retrieve saved theme or default to dark
  const savedTheme = localStorage.getItem('pk_portfolio_theme') || 'dark';
  htmlRoot.setAttribute('data-theme', savedTheme);

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const currentTheme = htmlRoot.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      htmlRoot.setAttribute('data-theme', newTheme);
      localStorage.setItem('pk_portfolio_theme', newTheme);
      showToast(`Switched to ${newTheme === 'dark' ? 'Dark' : 'Light'} Mode`);
    });
  }

  /* =========================================================================
     2. DYNAMIC TYPEWRITER EFFECT (AI/ML & STUDENT TRACKS)
     ========================================================================= */
  const typedTextSpan = document.getElementById('typed-text');
  const roles = [
    "B.Tech CSE (AI & ML) Student",
    "Machine Learning & Data Pipelines",
    "Generative AI & LLM Exploration",
    "Data Structures & Algorithmic Logic",
    "Learning → Building → Experimenting → Improving"
  ];
  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 90;

  function typeEffect() {
    if (!typedTextSpan) return;

    const currentRole = roles[roleIndex];
    
    if (isDeleting) {
      typedTextSpan.textContent = currentRole.substring(0, charIndex - 1);
      charIndex--;
      typingSpeed = 45;
    } else {
      typedTextSpan.textContent = currentRole.substring(0, charIndex + 1);
      charIndex++;
      typingSpeed = 85;
    }

    if (!isDeleting && charIndex === currentRole.length) {
      // Pause at full sentence
      typingSpeed = 1900;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      typingSpeed = 450;
    }

    setTimeout(typeEffect, typingSpeed);
  }

  setTimeout(typeEffect, 500);

  /* =========================================================================
     3. SKILLS CATEGORY FILTERING TABS
     ========================================================================= */
  const filterBtns = document.querySelectorAll('.skills-filter-container .filter-btn');
  const categoryBlocks = document.querySelectorAll('.skill-category-block');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Remove active class from all filter buttons
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      categoryBlocks.forEach(block => {
        const blockCategory = block.getAttribute('data-category');
        if (filterValue === 'all' || filterValue === blockCategory) {
          block.classList.remove('hidden');
          block.style.opacity = '1';
          block.style.transform = 'translateY(0)';
        } else {
          block.classList.add('hidden');
        }
      });
    });
  });

  /* =========================================================================
     4. INTERACTIVE RESUME MODAL HANDLERS
     ========================================================================= */
  const resumeModal = document.getElementById('resume-modal');
  const navResumeBtn = document.getElementById('nav-resume-btn');
  const heroResumeBtn = document.getElementById('hero-resume-btn');
  const resumeCloseBtn = document.getElementById('resume-close-btn');
  const resumeModalClose = document.getElementById('resume-modal-close');
  const resumePrintBtn = document.getElementById('resume-print-btn');
  const resumeDownloadBtn = document.getElementById('resume-download-btn');

  function openResumeModal() {
    if (resumeModal) {
      resumeModal.classList.add('active');
      resumeModal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeResumeModal() {
    if (resumeModal) {
      resumeModal.classList.remove('active');
      resumeModal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = 'auto';
    }
  }

  if (navResumeBtn) navResumeBtn.addEventListener('click', openResumeModal);
  if (heroResumeBtn) heroResumeBtn.addEventListener('click', openResumeModal);
  if (resumeCloseBtn) resumeCloseBtn.addEventListener('click', closeResumeModal);
  if (resumeModalClose) resumeModalClose.addEventListener('click', closeResumeModal);

  // Close modal on backdrop click
  if (resumeModal) {
    resumeModal.addEventListener('click', (e) => {
      if (e.target === resumeModal) {
        closeResumeModal();
      }
    });
  }

  // Print CV
  if (resumePrintBtn) {
    resumePrintBtn.addEventListener('click', () => {
      window.print();
    });
  }

  // Download Resume text/markdown format
  if (resumeDownloadBtn) {
    resumeDownloadBtn.addEventListener('click', () => {
      const resumeContent = `=====================================================
PIYUSH KUMAR - CURRICULUM VITAE
B.Tech CSE (Artificial Intelligence & Machine Learning)
Email: gtk@345gmail.com | Phone: +91 8670XXXXXX | India
=====================================================

EXECUTIVE SUMMARY:
Ambitious B.Tech CSE (AI/ML) undergraduate with a strong foundation in computer science, applied machine learning, and algorithm design. Committed to the philosophy of "Learning → Building → Experimenting → Improving".

EDUCATION:
• Bachelor of Technology (B.Tech) - CSE (AI & ML), 2024 - 2028
• Higher Secondary Education (12th Grade) - Science Stream (PCM)
• Secondary School Examination (10th Grade)

TECHNICAL SKILLS:
• Programming: Python, C, C++ (Foundations), HTML5, CSS3, JavaScript (Basics)
• AI & Machine Learning: Supervised & Unsupervised Learning, Scikit-Learn, Regression, Classification, Neural Networks Basics, Model Evaluation
• Data: NumPy, Pandas, Matplotlib, Seaborn, EDA, Feature Preprocessing
• Tools: Git, GitHub, VS Code, Jupyter Notebooks, Google Colab, Linux CLI
• CS Fundamentals: Data Structures & Algorithms, Object-Oriented Programming (OOP), DBMS / SQL Basics, OS Concepts

STUDENT & ACADEMIC PROJECTS:
1. Predictive Machine Learning Pipeline (Python, Scikit-Learn, Pandas, NumPy)
2. GenAI Document QA & Summarization Prototype (Python, LangChain, Streamlit)
3. Vision Classifier: Multiclass Image Analysis (Python, CNNs, OpenCV)
4. Algorithmic Logic & Memory Management Suite (C Language, Memory Hygiene)

CURRENT AREAS OF EXPLORATION:
Transformer Architectures, Self-Attention, Retrieval-Augmented Generation (RAG), Agentic Workflows, and Local LLM Deployment.
`;

      const blob = new Blob([resumeContent], { type: 'text/plain;charset=utf-8' });
      const downloadLink = document.createElement('a');
      downloadLink.href = URL.createObjectURL(blob);
      downloadLink.download = 'Piyush_Kumar_Resume_AIML.txt';
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
      showToast("Resume format downloaded successfully!");
    });
  }

  // Close modals on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeResumeModal();
      closeSuccessModal();
    }
  });

  /* =========================================================================
     5. ONE-CLICK COPY TO CLIPBOARD + TOAST NOTIFICATIONS
     ========================================================================= */
  const toast = document.getElementById('toast');
  let toastTimeout;

  function showToast(message) {
    if (!toast) return;
    toast.innerHTML = `<i class="fa-solid fa-circle-check" style="color: #34d399;"></i> ${message}`;
    toast.classList.add('show');
    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
      toast.classList.remove('show');
    }, 3200);
  }

  const copyEmailBtn = document.getElementById('copy-email-btn');
  const copyPhoneBtn = document.getElementById('copy-phone-btn');

  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', () => {
      const email = 'gtk@345gmail.com';
      navigator.clipboard.writeText(email).then(() => {
        showToast(`Email copied: ${email}`);
      }).catch(() => {
        showToast(`Email: ${email}`);
      });
    });
  }

  if (copyPhoneBtn) {
    copyPhoneBtn.addEventListener('click', () => {
      const phone = '+91 8670XXXXXX';
      navigator.clipboard.writeText(phone).then(() => {
        showToast(`Phone number copied: ${phone}`);
      }).catch(() => {
        showToast(`Phone: ${phone}`);
      });
    });
  }

  /* =========================================================================
     6. CONTACT FORM VALIDATION & MODAL SUBMISSION
     ========================================================================= */
  const contactForm = document.getElementById('contact-form');
  const nameInput = document.getElementById('sender-name');
  const emailInput = document.getElementById('sender-email');
  const subjectInput = document.getElementById('sender-subject');
  const messageInput = document.getElementById('sender-message');

  const nameError = document.getElementById('name-error');
  const emailError = document.getElementById('email-error');
  const subjectError = document.getElementById('subject-error');
  const messageError = document.getElementById('message-error');

  const submitBtn = document.getElementById('submit-btn');
  const mailtoFallbackBtn = document.getElementById('mailto-fallback-btn');

  const successModal = document.getElementById('success-modal');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const modalConfirmBtn = document.getElementById('modal-confirm-btn');
  const modalUserName = document.getElementById('modal-user-name');
  const modalSummary = document.getElementById('modal-summary');

  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function clearErrors() {
    if (nameError) nameError.textContent = '';
    if (emailError) emailError.textContent = '';
    if (subjectError) subjectError.textContent = '';
    if (messageError) messageError.textContent = '';
  }

  function closeSuccessModal() {
    if (successModal) {
      successModal.classList.remove('active');
      successModal.setAttribute('aria-hidden', 'true');
    }
  }

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeSuccessModal);
  if (modalConfirmBtn) modalConfirmBtn.addEventListener('click', closeSuccessModal);
  if (successModal) {
    successModal.addEventListener('click', (e) => {
      if (e.target === successModal) closeSuccessModal();
    });
  }

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      clearErrors();

      let isValid = true;
      const nameVal = nameInput ? nameInput.value.trim() : '';
      const emailVal = emailInput ? emailInput.value.trim() : '';
      const subjectVal = subjectInput ? subjectInput.value.trim() : '';
      const messageVal = messageInput ? messageInput.value.trim() : '';

      if (!nameVal) {
        if (nameError) nameError.textContent = 'Please enter your name.';
        isValid = false;
      }

      if (!emailVal) {
        if (emailError) emailError.textContent = 'Please enter your email.';
        isValid = false;
      } else if (!validateEmail(emailVal)) {
        if (emailError) emailError.textContent = 'Please provide a valid email address.';
        isValid = false;
      }

      if (!subjectVal) {
        if (subjectError) subjectError.textContent = 'Please enter a subject.';
        isValid = false;
      }

      if (!messageVal) {
        if (messageError) messageError.textContent = 'Please write a brief message.';
        isValid = false;
      } else if (messageVal.length < 10) {
        if (messageError) messageError.textContent = 'Message should be at least 10 characters.';
        isValid = false;
      }

      if (!isValid) return;

      // Simulate sending state
      if (submitBtn) {
        submitBtn.querySelector('.btn-text').style.display = 'none';
        submitBtn.querySelector('.btn-loading').style.display = 'inline-flex';
        submitBtn.disabled = true;
      }

      setTimeout(() => {
        if (submitBtn) {
          submitBtn.querySelector('.btn-text').style.display = 'inline-flex';
          submitBtn.querySelector('.btn-loading').style.display = 'none';
          submitBtn.disabled = false;
        }

        // Show confirmation modal
        if (modalUserName) modalUserName.textContent = nameVal;
        if (modalSummary) {
          modalSummary.innerHTML = `
            <strong>Subject:</strong> ${escapeHtml(subjectVal)}<br>
            <strong>Sender:</strong> ${escapeHtml(emailVal)}<br>
            <strong>Preview:</strong> ${escapeHtml(messageVal.substring(0, 100))}${messageVal.length > 100 ? '...' : ''}
          `;
        }

        if (successModal) {
          successModal.classList.add('active');
          successModal.setAttribute('aria-hidden', 'false');
        }

        contactForm.reset();
      }, 700);
    });
  }

  // Mailto fallback button directly opens mail client
  if (mailtoFallbackBtn) {
    mailtoFallbackBtn.addEventListener('click', () => {
      const subject = subjectInput && subjectInput.value.trim() ? encodeURIComponent(subjectInput.value.trim()) : 'Inquiry for Piyush Kumar';
      const body = messageInput && messageInput.value.trim() ? encodeURIComponent(messageInput.value.trim()) : '';
      window.location.href = `mailto:gtk@345gmail.com?subject=${subject}&body=${body}`;
    });
  }

  function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  /* =========================================================================
     7. NAVBAR SCROLL, ACTIVE LINK SPY & MOBILE MENU
     ========================================================================= */
  const navbar = document.getElementById('navbar');
  const sections = document.querySelectorAll('main section');
  const navLinks = document.querySelectorAll('.nav-link');
  const backToTopBtn = document.getElementById('back-to-top');
  const menuToggle = document.getElementById('menu-toggle');
  const navMenu = document.getElementById('nav-menu');

  // Mobile menu toggle
  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
      menuToggle.classList.toggle('active');
      navMenu.classList.toggle('active');
    });

    // Close mobile menu when nav link is clicked
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        navMenu.classList.remove('active');
      });
    });
  }

  // Scroll spy & navbar styling
  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY;

    // Navbar shrink styling
    if (navbar) {
      if (scrollPos > 40) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }

    // Back to top button visibility
    if (backToTopBtn) {
      if (scrollPos > 400) {
        backToTopBtn.classList.add('show');
      } else {
        backToTopBtn.classList.remove('show');
      }
    }

    // Active Section Spy
    let currentSectionId = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.offsetHeight;
      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        currentSectionId = section.getAttribute('id');
      }
    });

    if (currentSectionId) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSectionId}`) {
          link.classList.add('active');
        }
      });
    }
  });

  // Back to Top click
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  /* =========================================================================
     8. AUTO-UPDATING FOOTER YEAR
     ========================================================================= */
  const currentYearSpan = document.getElementById('current-year');
  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
  }

});
