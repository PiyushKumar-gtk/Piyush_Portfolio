# Piyush Kumar - Personal Developer Portfolio 🚀
## B.Tech CSE (AI & ML) Student | Emerging Technology Professional

A premium, futuristic, and responsive personal portfolio website crafted for **Piyush Kumar**, positioning him as an ambitious early-career technologist specializing in **Artificial Intelligence, Machine Learning, and Generative AI**.

> **Core Philosophy:** *"Learning → Building → Experimenting → Improving."*

---

## 🌟 Sections & Architecture

1. **Hero / Main Character Section**:
   - Identity: **Piyush Kumar — B.Tech CSE (AI/ML) Student**.
   - Dynamic Typewriter: Cycles through AI/ML specialties, CS foundations, and personal philosophy.
   - Core Motto Strip: *"Learning → Building → Experimenting → Improving"*.
   - Primary Action Buttons:
     - `View My Work` (Smooth scroll to projects)
     - `View / Download Resume` (Opens interactive resume modal)
     - `Get In Touch` (Jump to contact)
   - Direct Contact Strip: GitHub, LinkedIn, `gtk@345gmail.com`, and `+91 8670XXXXXX`.
   - Futuristic AI Terminal Card: Python 3.11 developer profile, active status badge, and floating skill chips.
   - Quick Section Jump Cards: Instant navigation to About, Skills, Projects, and Contact.

2. **About Me Section**:
   - Narrative on exploring AI/ML from first principles and mastering software engineering fundamentals.
   - 4 Foundational Pillars:
     - *Curriculum*: B.Tech CSE (AI/ML) coursework.
     - *Mindset*: Curiosity, adaptability, and first-principles thinking.
     - *Collaboration*: Collaborative engineering, Git hygiene, and presentation skills.
     - *Location & Status*: India (IST), open to student internships and hackathons.

3. **Categorized Skills Section (Interactive Filter Tabs)**:
   - Filter by: `All Skills`, `Programming`, `AI / ML`, `Data`, `Tools`, `CS Fundamentals`.
   - **Programming**: Python (Primary AI/ML), C (Low-level systems), C++ (DSA & OOP), HTML/CSS/JS (UI prototyping).
   - **AI / ML**: Supervised & Unsupervised Learning, Scikit-Learn pipelines, Neural Networks basics, Model Evaluation (Confusion Matrix, F1, ROC-AUC).
   - **Data**: NumPy, Pandas, Matplotlib & Seaborn, EDA & Preprocessing pipelines.
   - **Tools**: Git & GitHub, VS Code, Jupyter & Google Colab, Linux CLI.
   - **CS Fundamentals**: Data Structures & Algorithms, Object-Oriented Design (OOP), DBMS & SQL, Operating Systems concepts.

4. **Featured Projects (Structured Problem-Solution Framework)**:
   - Each project is marked with honest **Student Portfolio Project** badges:
     - **Predictive Machine Learning Pipeline**: Supervised regression pipeline with automated imputation, feature scaling, and 5-fold cross-validation.
     - **GenAI Document QA & Summarization Prototype**: RAG exploration system using LangChain, HuggingFace embeddings, and vector similarity search.
     - **Vision Classifier: Multiclass Image Analysis**: CNN pattern recognition pipeline with data augmentation and confusion matrix evaluation.
     - **Algorithmic Logic & Memory Suite**: Benchmarked C implementations of data structures with explicit pointer handling and memory hygiene.

5. **Learning Journey (Milestone Roadmap)**:
   - Chronological vertical timeline:
     - `01. Foundational Phase`: C programming, discrete math, and Git.
     - `02. Transition to Data`: Python, NumPy/Pandas, matrix algebra, and EDA.
     - `03. Machine Learning Core`: Scikit-Learn models, hyperparameter tuning, and validation metrics.
     - `04. Active Focus (Present)`: Neural networks, Generative AI exploration, hackathons, and internship preparation.

6. **Currently Exploring (Forward Horizon)**:
   - **Track 1: AI & ML Frontiers**: Transformers, self-attention mechanisms, vector databases, and model quantization.
   - **Track 2: Generative AI & LLM Systems**: Retrieval-Augmented Generation (RAG), agentic workflows (ReAct), prompt engineering, and local LLM execution (Ollama).

7. **Education & Achievements Section**:
   - **B.Tech CSE (AI & ML)**: 2024–2028 undergraduate degree with active coursework.
   - **12th Standard (Higher Secondary)**: Science stream (PCM) with editable achievement badge.
   - **10th Standard (Secondary School)**: Secondary curriculum with editable achievement badge.
   - **Certificates & Honors**: Honest status tags (`Academic Lab Milestone`, `In Progress`, `Coming Soon`).

8. **Contact Section & Direct Channels**:
   - **Official Email**: `gtk@345gmail.com` (With one-click copy button & mailto link).
   - **Direct Phone**: `+91 8670XXXXXX` (With one-click copy button & tel link).
   - **Interactive Contact Form**: Complete client-side validation, loading animation, confirmation modal, and mailto fallback.

9. **Interactive Resume Modal**:
   - In-browser CV preview with print functionality (`window.print()` with `@media print` clean layout) and download resume text format.

---

## 📂 Project Structure

```
piyush-portfolio/
│
├── index.html       # Semantic HTML5 with all portfolio sections, modals, and metadata
├── style.css        # Dark premium technology stylesheet, CSS variables, glassmorphic UI, responsive queries
├── script.js        # Theme toggle, typewriter animation, skill filters, copy buttons, modals, form validation
└── README.md        # Comprehensive documentation and customization guide
```

---

## 🛠️ How to Customize for Yourself

### 1. Update 10th and 12th Grades:
Open `index.html` and search for `grade-badge`. You will find:
```html
<!-- Class 12th -->
<span class="grade-badge">
  <i class="fa-solid fa-check"></i> Successfully Cleared • Strong Science/Math Base
</span>
```
You can edit this to your exact Board and Percentage, for example:
```html
<span class="grade-badge">
  <i class="fa-solid fa-check"></i> CBSE Board • 88.5%
</span>
```

### 2. Add Your Real Social Links:
Search for `https://github.com` and `https://linkedin.com` in `index.html` and replace them with your actual profiles:
- Replace `https://github.com` with `https://github.com/your-username`
- Replace `https://linkedin.com` with `https://linkedin.com/in/your-profile`

### 3. Attach a Real PDF Resume:
If you have a PDF resume file (e.g., `Piyush_Kumar_Resume.pdf`):
1. Place `Piyush_Kumar_Resume.pdf` inside this folder.
2. In `index.html`, find `#resume-download-btn` or replace the button with:
```html
<a href="Piyush_Kumar_Resume.pdf" download class="btn btn-primary">
  <i class="fa-solid fa-download"></i> Download PDF Resume
</a>
```

---

## 🌐 How to Deploy (Free Hosting)

### Option A: GitHub Pages
1. Create a new repository on GitHub named `portfolio` or `piyush-portfolio`.
2. Push this folder's contents to the repository.
3. Go to **Settings** → **Pages** → under **Branch**, choose `main` / `root` and click **Save**.
4. Your website will be live at `https://<your-username>.github.io/<repo-name>/`.

### Option B: Vercel / Netlify
1. Go to [vercel.com](https://vercel.com) or [netlify.com](https://netlify.com).
2. Drag and drop the `piyush-portfolio` folder or connect your GitHub repository.
3. Your site deploys in under 30 seconds with a free `.vercel.app` or `.netlify.app` domain.
