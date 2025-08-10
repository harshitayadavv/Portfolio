import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Dock from './ReactBits/Dock/Dock';

import AboutIcon from './assets/About.png';
import SkillsIcon from './assets/Skills.png';
import ExperienceIcon from './assets/experience.png';
import ProjectsIcon from './assets/projects.png';
import ContactIcon from './assets/contact.png';

const Navbar = ({ sectionRefs }) => {
  const navigate = useNavigate();
  const location = useLocation();

  // Helper: Scroll to ref if available
  const scrollToRef = ref => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Generic navigation handler
  const handleNavigation = (path, refKey) => {
    if (location.pathname === path && sectionRefs?.[refKey]) {
      scrollToRef(sectionRefs[refKey]);
    } else {
      navigate(path);
      // Increased delay to ensure page is fully loaded
      setTimeout(() => {
        if (sectionRefs?.[refKey]) {
          scrollToRef(sectionRefs[refKey]);
        }
      }, 300);
    }
  };

  const handleAboutClick = () => handleNavigation('/about', 'aboutRef');
  const handleSkillsClick = () => handleNavigation('/skills', 'skillsRef');
  const handleProjectsClick = () => handleNavigation('/projects', 'projectsRef');
  const handleExperienceClick = () => handleNavigation('/experience', 'experienceRef');
  const handleContactClick = () => handleNavigation('/contact', 'contactRef');

  const items = [
    {
      icon: <img src={AboutIcon} alt="About" className="w-6 h-6" />,
      label: 'About',
      onClick: handleAboutClick,
    },
    {
      icon: <img src={SkillsIcon} alt="Skills" className="w-6 h-6" />,
      label: 'Skills',
      onClick: handleSkillsClick,
    },
    {
      icon: <img src={ProjectsIcon} alt="Projects" className="w-6 h-6" />,
      label: 'Projects',
      onClick: handleProjectsClick,
    },
    {
      icon: <img src={ExperienceIcon} alt="Experience" className="w-6 h-6" />,
      label: 'Experience',
      onClick: handleExperienceClick,
    },
    {
      icon: <img src={ContactIcon} alt="Contact" className="w-6 h-6" />,
      label: 'Contact',
      onClick: handleContactClick,
    },
  ];

  return (
    <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
      <Dock
        items={items}
        panelHeight={68}
        baseItemSize={50}
        magnification={70}
      />
    </div>
  );
};

export default Navbar;