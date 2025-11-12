import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail, Instagram, FileText, ExternalLink, Award, BookOpen, Briefcase, Code } from "lucide-react";
import profileImage from "@/assets/profile.jpg";

const Index = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold tracking-tight">Akshaya Shree</h1>
            <div className="hidden md:flex gap-8">
              <button onClick={() => scrollToSection('about')} className="text-muted-foreground hover:text-foreground transition-smooth">About</button>
              <button onClick={() => scrollToSection('experience')} className="text-muted-foreground hover:text-foreground transition-smooth">Experience</button>
              <button onClick={() => scrollToSection('projects')} className="text-muted-foreground hover:text-foreground transition-smooth">Projects</button>
              <button onClick={() => scrollToSection('skills')} className="text-muted-foreground hover:text-foreground transition-smooth">Skills</button>
              <button onClick={() => scrollToSection('contact')} className="text-muted-foreground hover:text-foreground transition-smooth">Contact</button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        {/* Wave Background */}
        <div className="absolute inset-0 pointer-events-none opacity-10">
          <svg className="absolute bottom-0 w-full h-64" viewBox="0 0 1440 320" preserveAspectRatio="none">
            <path 
              fill="currentColor" 
              className="text-muted-foreground"
              d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,128C960,128,1056,192,1152,197.3C1248,203,1344,149,1392,122.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            />
          </svg>
        </div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-5xl md:text-7xl font-bold tracking-tight">
                  AI Engineer &
                  <br />
                  <span className="text-muted-foreground">Innovation Specialist</span>
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl">
                  Building human-centered AI applications with expertise in Generative AI, Computer Vision, and LLMs. 
                  Currently delivering AI solutions at NIMIR Corporation.
                </p>
              </div>
            
            <div className="flex flex-wrap gap-4">
              <Button variant="default" size="lg" asChild>
                <a href="#contact">Get in Touch</a>
              </Button>
              <Button variant="secondary" size="lg" asChild>
                <a href="https://medium.com/@Akshaya-TechandThoughts" target="_blank" rel="noopener noreferrer">
                  <FileText className="mr-2 h-5 w-5" />
                  Read Blog
                </a>
              </Button>
            </div>

              <div className="flex gap-4 pt-4">
                <a href="https://www.linkedin.com/in/akshaya-shree-b-496b79229/" target="_blank" rel="noopener noreferrer" 
                   className="text-muted-foreground hover:text-foreground transition-smooth">
                  <Linkedin className="h-6 w-6" />
                </a>
                <a href="https://github.com/akshayashreeya" target="_blank" rel="noopener noreferrer"
                   className="text-muted-foreground hover:text-foreground transition-smooth">
                  <Github className="h-6 w-6" />
                </a>
                <a href="https://instagram.com/justmeakshaya" target="_blank" rel="noopener noreferrer"
                   className="text-muted-foreground hover:text-foreground transition-smooth">
                  <Instagram className="h-6 w-6" />
                </a>
                <a href="mailto:akshayashreebaskar.ai@gmail.com"
                   className="text-muted-foreground hover:text-foreground transition-smooth">
                  <Mail className="h-6 w-6" />
                </a>
              </div>
            </div>
            
            {/* Profile Photo */}
            <div className="flex justify-center md:justify-end">
              <div className="relative">
                <img 
                  src={profileImage} 
                  alt="Akshaya Shree Baskar - AI Engineer"
                  className="w-80 h-80 object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-500 shadow-elegant"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-gradient-card">
        <div className="container mx-auto max-w-6xl">
          <h3 className="text-3xl font-bold mb-8">About Me</h3>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-4 text-muted-foreground">
              <p>
                I'm an AI Engineer specializing in Generative AI, LLMs, and Computer Vision, with a passion for building 
                human-centered AI applications and scalable ML pipelines. My work spans vision systems, RAG pipelines, 
                and natural language understanding.
              </p>
              <p>
                With contributions to patent research and published works, I focus on deploying AI-driven solutions 
                in enterprise automation and intelligent systems. Currently at NIMIR Corporation, I'm working on 
                cutting-edge AI solutions that bridge the gap between research and production.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Award className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Patent Contributor</h4>
                  <p className="text-sm text-muted-foreground">Filed patents in gesture-controlled AI systems</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <BookOpen className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Published Author</h4>
                  <p className="text-sm text-muted-foreground">Research published in AI and Computer Vision</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Code className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Open Source</h4>
                  <p className="text-sm text-muted-foreground">Active contributor on GitHub</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h3 className="text-3xl font-bold mb-12">Experience</h3>
          <div className="space-y-8">
            {/* NIMIR */}
            <Card className="p-6 border-border hover:shadow-glow transition-smooth">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div>
                  <h4 className="text-xl font-semibold">AI Engineer</h4>
                  <p className="text-primary">NIMIR Corporation</p>
                </div>
                <Badge variant="secondary">2025 – Present</Badge>
              </div>
              <ul className="space-y-2 text-muted-foreground list-disc list-inside">
                <li>Designing and deploying LLM-powered enterprise automation tools</li>
                <li>Building RAG-based AI pipelines for information retrieval and knowledge assistants</li>
                <li>Developing vision-based systems for accessibility and workplace automation</li>
                <li>Collaborating with global teams on AI ethics and scalable deployment</li>
              </ul>
            </Card>

            {/* RNTBCI */}
            <Card className="p-6 border-border hover:shadow-glow transition-smooth">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div>
                  <h4 className="text-xl font-semibold">AI Research Intern</h4>
                  <p className="text-primary">Renault Nissan Technology & Business Center India</p>
                </div>
                <Badge variant="secondary">2024 – 2025</Badge>
              </div>
              <ul className="space-y-2 text-muted-foreground list-disc list-inside">
                <li>Researched and documented prior art for patent development</li>
                <li>Built prototypes for gesture and fatigue detection using time-of-flight sensors</li>
                <li>Worked on audio system integration for in-cabin AI applications</li>
                <li>Contributed to patented gesture-controlled AI systems for smart cockpits</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-gradient-card">
        <div className="container mx-auto max-w-6xl">
          <h3 className="text-3xl font-bold mb-12">Featured Projects</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6 border-border hover:shadow-glow transition-smooth">
              <div className="flex items-start justify-between mb-4">
                <h4 className="text-xl font-semibold">AirREALM</h4>
                <Badge>Patent Filed</Badge>
              </div>
              <p className="text-muted-foreground mb-4">
                Gesture-control AI application achieving 97% accuracy for hands-free PC control using OpenCV & Mediapipe. 
                Revolutionary interface for accessibility and productivity.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Computer Vision</Badge>
                <Badge variant="secondary">OpenCV</Badge>
                <Badge variant="secondary">Mediapipe</Badge>
              </div>
            </Card>

            <Card className="p-6 border-border hover:shadow-glow transition-smooth">
              <div className="flex items-start justify-between mb-4">
                <h4 className="text-xl font-semibold">Blog Generator</h4>
                <Badge>AI/LLM</Badge>
              </div>
              <p className="text-muted-foreground mb-4">
                Context-aware blog generation tool built with LangChain & LLaMA-2, improving content creation 
                efficiency by 35%. Integrated RAG for enhanced contextual understanding.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">LangChain</Badge>
                <Badge variant="secondary">LLaMA-2</Badge>
                <Badge variant="secondary">RAG</Badge>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h3 className="text-3xl font-bold mb-12">Technical Skills</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div>
              <h4 className="font-semibold mb-4 text-primary">Machine Learning & AI</h4>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">PyTorch</Badge>
                <Badge variant="secondary">TensorFlow</Badge>
                <Badge variant="secondary">Keras</Badge>
                <Badge variant="secondary">Scikit-learn</Badge>
                <Badge variant="secondary">Hugging Face</Badge>
                <Badge variant="secondary">LangChain</Badge>
                <Badge variant="secondary">RAG</Badge>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-primary">Computer Vision</h4>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">OpenCV</Badge>
                <Badge variant="secondary">Mediapipe</Badge>
                <Badge variant="secondary">Image Processing</Badge>
                <Badge variant="secondary">Gesture Recognition</Badge>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-primary">Deployment & Tools</h4>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">FastAPI</Badge>
                <Badge variant="secondary">Streamlit</Badge>
                <Badge variant="secondary">Docker</Badge>
                <Badge variant="secondary">AWS</Badge>
                <Badge variant="secondary">GCP</Badge>
                <Badge variant="secondary">Git</Badge>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-primary">Data & Analytics</h4>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Matplotlib</Badge>
                <Badge variant="secondary">Seaborn</Badge>
                <Badge variant="secondary">Power BI</Badge>
                <Badge variant="secondary">MongoDB</Badge>
                <Badge variant="secondary">PostgreSQL</Badge>
              </div>
            </div>

            <div className="lg:col-span-2">
              <h4 className="font-semibold mb-4 text-primary">Certifications</h4>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">NVIDIA Deep Learning</Badge>
                <Badge variant="outline">IBM AI Engineering</Badge>
                <Badge variant="outline">Helsinki University - Elements of AI</Badge>
                <Badge variant="outline">Google AI & ML Foundations</Badge>
                <Badge variant="outline">Oracle Foundation</Badge>
                <Badge variant="outline">HackerRank Python</Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Publications */}
      <section className="py-20 px-6 bg-gradient-card">
        <div className="container mx-auto max-w-6xl">
          <h3 className="text-3xl font-bold mb-8">Publications & Patents</h3>
          <Card className="p-6 border-border">
            <div className="flex items-start gap-4">
              <BookOpen className="h-8 w-8 text-primary mt-1" />
              <div>
                <h4 className="text-xl font-semibold mb-2">AirREALM: Gesture-Controlled AI Desktop App</h4>
                <p className="text-muted-foreground mb-4">
                  Published research and patent filing for an innovative gesture-controlled desktop interface 
                  using computer vision and machine learning techniques.
                </p>
                <Badge>Published</Badge>
                <Badge variant="secondary" className="ml-2">Patent Filed</Badge>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h3 className="text-3xl font-bold mb-4">Let's Connect</h3>
          <p className="text-xl text-muted-foreground mb-12">
            I'm always interested in hearing about new opportunities, collaborations, and innovative AI projects.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <Card className="p-6 border-border hover:shadow-glow transition-smooth">
              <Mail className="h-8 w-8 text-primary mx-auto mb-4" />
              <h4 className="font-semibold mb-2">Email</h4>
              <a href="mailto:akshayashreebaskar.ai@gmail.com" className="text-muted-foreground hover:text-foreground">
                akshayashreebaskar.ai@gmail.com
              </a>
            </Card>

            <Card className="p-6 border-border hover:shadow-glow transition-smooth">
              <Briefcase className="h-8 w-8 text-primary mx-auto mb-4" />
              <h4 className="font-semibold mb-2">Location</h4>
              <p className="text-muted-foreground">Tiruchirappalli, Tamil Nadu</p>
            </Card>
          </div>

          <div className="flex justify-center gap-4">
            <Button variant="default" size="lg" asChild>
              <a href="https://www.linkedin.com/in/akshaya-shree-b-496b79229/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-5 w-5" />
                LinkedIn
              </a>
            </Button>
            <Button variant="secondary" size="lg" asChild>
              <a href="https://github.com/akshayashreeya" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-5 w-5" />
                GitHub
              </a>
            </Button>
            <Button variant="secondary" size="lg" asChild>
              <a href="https://medium.com/@Akshaya-TechandThoughts" target="_blank" rel="noopener noreferrer">
                <FileText className="mr-2 h-5 w-5" />
                Blog
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
              © 2025 Akshaya Shree Baskar. All rights reserved.
            </p>
            <div className="flex gap-4">
              <a href="https://www.linkedin.com/in/akshaya-shree-b-496b79229/" target="_blank" rel="noopener noreferrer"
                 className="text-muted-foreground hover:text-foreground transition-smooth">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://github.com/akshayashreeya" target="_blank" rel="noopener noreferrer"
                 className="text-muted-foreground hover:text-foreground transition-smooth">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://instagram.com/justmeakshaya" target="_blank" rel="noopener noreferrer"
                 className="text-muted-foreground hover:text-foreground transition-smooth">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="mailto:akshayashreebaskar.ai@gmail.com"
                 className="text-muted-foreground hover:text-foreground transition-smooth">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
