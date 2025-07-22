import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

// Work Pages
import Incubation from "./pages/work/Incubation";
import Linkages from "./pages/work/Linkages";
import Scouting from "./pages/work/Scouting";
import SiteVisits from "./pages/work/SiteVisits";
import Subgranting from "./pages/work/Subgranting";
import TrainingMentorship from "./pages/work/TrainingMentorship";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          
          {/* Work Routes */}
          <Route path="/work/incubation" element={<Incubation />} />
          <Route path="/work/linkages" element={<Linkages />} />
          <Route path="/work/scouting" element={<Scouting />} />
          <Route path="/work/site-visits" element={<SiteVisits />} />
          <Route path="/work/subgranting" element={<Subgranting />} />
          <Route path="/work/training-mentorship" element={<TrainingMentorship />} />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
