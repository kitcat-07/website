import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
import Header from "components/ui/Header";
import NotFound from "pages/NotFound";
import HomepageQuantumGateway from "pages/homepage-quantum-gateway";
import AboutOriginStoryEcosystem from "pages/about-origin-story-ecosystem";
import RoadmapFutureVisionPortal from "pages/roadmap-future-vision-portal";
import ServicesTechnologySectorsUniverse from "pages/services-technology-sectors-universe";
import PortfolioInnovationLaboratory from "pages/portfolio-innovation-laboratory";
import ContactGlobalPresenceHub from "pages/contact-global-presence-hub";

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <ScrollToTop />
        <Header />
        <RouterRoutes>
          <Route path="/" element={<HomepageQuantumGateway />} />
          <Route path="/homepage-quantum-gateway" element={<HomepageQuantumGateway />} />
          <Route path="/about-origin-story-ecosystem" element={<AboutOriginStoryEcosystem />} />
          <Route path="/roadmap-future-vision-portal" element={<RoadmapFutureVisionPortal />} />
          <Route path="/services-technology-sectors-universe" element={<ServicesTechnologySectorsUniverse />} />
          <Route path="/portfolio-innovation-laboratory" element={<PortfolioInnovationLaboratory />} />
          <Route path="/contact-global-presence-hub" element={<ContactGlobalPresenceHub />} />
          
          <Route path="*" element={<NotFound />} />
        </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;
