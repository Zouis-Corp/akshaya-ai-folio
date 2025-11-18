import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Github, Linkedin, Mail, Instagram, FileText, ExternalLink, Award, BookOpen, Briefcase, Code, Menu } from "lucide-react";
import profileImage from "@/assets/profile.png";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { useState, useEffect } from "react";
import { Particles } from "@/components/Particles";

const Index = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [typedText1, setTypedText1] = useState("");
  const [typedText2, setTypedText2] = useState("");
  const [showCursor1, setShowCursor1] = useState(true);
  const [showCursor2, setShowCursor2] = useState(false);
  
  const text1 = "AI Engineer &";
  const text2 = "Innovation Specialist";
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Typing animation effect
  useEffect(() => {
    let timeout1: NodeJS.Timeout;
    let timeout2: NodeJS.Timeout;
    
    // Type first line
    if (typedText1.length < text1.length) {
      timeout1 = setTimeout(() => {
        setTypedText1(text1.slice(0, typedText1.length + 1));
      }, 100);
    } else {
      // After first line is done, hide its cursor and start second line
      setShowCursor1(false);
      setShowCursor2(true);
      
      if (typedText2.length < text2.length) {
        timeout2 = setTimeout(() => {
          setTypedText2(text2.slice(0, typedText2.length + 1));
        }, 100);
      } else {
        // Hide second cursor after typing is complete
        setTimeout(() => setShowCursor2(false), 500);
      }
    }
    
    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
    };
  }, [typedText1, typedText2]);
  
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const aboutSection = useIntersectionObserver({ threshold: 0.2 });
  const experienceSection = useIntersectionObserver({ threshold: 0.2 });
  const projectsSection = useIntersectionObserver({ threshold: 0.2 });
  const skillsSection = useIntersectionObserver({ threshold: 0.2 });
  const publicationsSection = useIntersectionObserver({ threshold: 0.2 });
  const contactSection = useIntersectionObserver({ threshold: 0.2 });

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-5xl">
        <div className="bg-background/40 backdrop-blur-xl border border-border/50 rounded-2xl shadow-elegant px-4 md:px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Mobile Menu Icon - First on mobile */}
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] bg-background/95 backdrop-blur-xl border-border/50">
                <div className="flex flex-col gap-6 mt-8">
                  <button 
                    onClick={() => scrollToSection('about')} 
                    className="text-lg text-muted-foreground hover:text-foreground transition-smooth text-left py-2"
                  >
                    About
                  </button>
                  <button 
                    onClick={() => scrollToSection('experience')} 
                    className="text-lg text-muted-foreground hover:text-foreground transition-smooth text-left py-2"
                  >
                    Experience
                  </button>
                  <button 
                    onClick={() => scrollToSection('projects')} 
                    className="text-lg text-muted-foreground hover:text-foreground transition-smooth text-left py-2"
                  >
                    Projects
                  </button>
                  <button 
                    onClick={() => scrollToSection('skills')} 
                    className="text-lg text-muted-foreground hover:text-foreground transition-smooth text-left py-2"
                  >
                    Skills
                  </button>
                  <button 
                    onClick={() => scrollToSection('contact')} 
                    className="text-lg text-muted-foreground hover:text-foreground transition-smooth text-left py-2"
                  >
                    Contact
                  </button>
                </div>
              </SheetContent>
            </Sheet>
            
            {/* Name - Center on mobile, left on desktop */}
            <h1 className="text-lg md:text-xl font-bold tracking-tight flex-1 md:flex-none text-center md:text-left">Akshaya Shree</h1>
            
            {/* Social Icons - Mobile only */}
            <div className="flex md:hidden gap-3">
              <a href="https://github.com/akshayashreeya" target="_blank" rel="noopener noreferrer"
                 className="text-muted-foreground hover:text-foreground transition-smooth">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/in/akshaya-shree-b-496b79229/" target="_blank" rel="noopener noreferrer" 
                 className="text-muted-foreground hover:text-foreground transition-smooth">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://instagram.com/justmeakshaya" target="_blank" rel="noopener noreferrer"
                 className="text-muted-foreground hover:text-foreground transition-smooth">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
            
            {/* Desktop Navigation */}
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
      <section className="pt-32 pb-32 md:pb-40 px-4 md:px-6 relative overflow-hidden">
        {/* Particle Background */}
        <Particles />
        
        {/* Profile Image - Behind Waves (Desktop Only) */}
        <div 
          className="hidden md:block absolute right-0 md:right-20 bottom-0 z-0 pointer-events-none max-w-[30rem]"
        >
          <img 
            src={profileImage} 
            alt="Akshaya Shree Baskar - AI Engineer"
            className="w-full h-auto object-contain object-bottom grayscale opacity-70"
          />
        </div>
        
        {/* Animated Wave Background */}
        <div
          className="absolute inset-x-0 bottom-0 h-64 pointer-events-none opacity-10"
        >
          <svg 
            className="absolute bottom-0 w-full h-64 animate-wave" 
            viewBox="0 0 1440 320" 
            preserveAspectRatio="none"
          >
            <path 
              fill="currentColor" 
              className="text-muted-foreground"
              d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,128C960,128,1056,192,1152,197.3C1248,203,1344,149,1392,122.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            />
          </svg>
          <svg 
            className="absolute bottom-0 w-full h-64 animate-wave-slow opacity-50" 
            viewBox="0 0 1440 320" 
            preserveAspectRatio="none"
          >
            <path 
              fill="currentColor" 
              className="text-muted-foreground"
              d="M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,154.7C672,160,768,224,864,234.7C960,245,1056,203,1152,181.3C1248,160,1344,160,1392,160L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            />
          </svg>
          <svg 
            className="absolute bottom-0 w-full h-64 opacity-30" 
            viewBox="0 0 1440 320" 
            preserveAspectRatio="none"
            style={{ animation: 'wave 25s ease-in-out infinite' }}
          >
            <path 
              fill="currentColor" 
              className="text-muted-foreground"
              d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,197.3C672,192,768,160,864,154.7C960,149,1056,171,1152,186.7C1248,203,1344,213,1392,218.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            />
          </svg>
        </div>
        
        <div className="container mx-auto max-w-6xl relative z-10 px-0">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div 
              className="space-y-8"
              style={{ transform: `translateY(${scrollY * 0.1}px)` }}
            >
              <div className="space-y-4 relative">
                <h2 className="text-5xl md:text-7xl font-bold tracking-tight relative group cursor-default">
                  {/* Crosshair effect */}
                  <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <span className="absolute left-1/2 top-0 w-px h-full bg-gradient-to-b from-transparent via-primary/50 to-transparent -translate-x-1/2"></span>
                    <span className="absolute left-0 top-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent -translate-y-1/2"></span>
                  </span>
                  
                  <span className="relative inline-block animate-glow">
                    {typedText1}
                    {showCursor1 && <span className="animate-pulse">|</span>}
                  </span>
                  <br />
                  <span className="text-muted-foreground relative inline-block animate-glow-delayed">
                    {typedText2}
                    {showCursor2 && <span className="animate-pulse">|</span>}
                  </span>
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
              
              {/* Profile Image - Mobile Only */}
              <div className="md:hidden flex justify-center pt-8">
                <img 
                  src={profileImage} 
                  alt="Akshaya Shree Baskar - AI Engineer"
                  className="w-64 h-64 object-cover grayscale opacity-70"
                />
              </div>
            </div>
            
            {/* Empty space for layout balance */}
            <div className="hidden md:block"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section 
        ref={aboutSection.ref as React.RefObject<HTMLElement>}
        id="about" 
        className={`py-20 px-6 bg-gradient-card transition-all duration-1000 ${
          aboutSection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
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
      <section 
        ref={experienceSection.ref as React.RefObject<HTMLElement>}
        id="experience" 
        className={`py-20 px-6 transition-all duration-1000 ${
          experienceSection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
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
      <section 
        ref={projectsSection.ref as React.RefObject<HTMLElement>}
        id="projects" 
        className={`py-20 px-6 bg-gradient-card transition-all duration-1000 ${
          projectsSection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="container mx-auto max-w-6xl">
          <h3 className="text-3xl font-bold mb-12">Featured Projects</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <Card 
              className={`p-6 border-border hover:shadow-glow hover:-translate-y-2 transition-all duration-500 ${
                projectsSection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{
                transitionDelay: projectsSection.isVisible ? '100ms' : '0ms'
              }}
            >
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

            <Card 
              className={`p-6 border-border hover:shadow-glow hover:-translate-y-2 transition-all duration-500 ${
                projectsSection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{
                transitionDelay: projectsSection.isVisible ? '300ms' : '0ms'
              }}
            >
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
      <section 
        ref={skillsSection.ref as React.RefObject<HTMLElement>}
        id="skills" 
        className={`py-20 px-6 transition-all duration-1000 ${
          skillsSection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
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
      <section 
        ref={publicationsSection.ref as React.RefObject<HTMLElement>}
        className={`py-20 px-6 bg-gradient-card transition-all duration-1000 ${
          publicationsSection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
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
      <section 
        ref={contactSection.ref as React.RefObject<HTMLElement>}
        id="contact" 
        className={`py-20 px-6 transition-all duration-1000 ${
          contactSection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
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
