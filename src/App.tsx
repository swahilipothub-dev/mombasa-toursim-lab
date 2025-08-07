import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Impacts from "./pages/Impacts";
import AfricanFoodTrail from "./pages/innovators/AfricanFoodTrail";
import BigShip from "./pages/innovators/BigShip";
import KLenses from "./pages/innovators/KLenses";
import MombasaCulturalVillage from "./pages/innovators/MombasaCulturalVillage";
import StudioBellaBella from "./pages/innovators/StudioBellaBella";
import UmojaWaPwani from "./pages/innovators/UmojaWaPwani";
import Incubation from "./pages/ourwork/Incubation";
import Linkages from "./pages/ourwork/Linkages";
import SiteVisits from "./pages/ourwork/ScoutingSiteVisits";
import Subgranting from "./pages/ourwork/Subgranting";
import TrainingMentorship from "./pages/ourwork/TrainingMentorship";
import NotFound from "./pages/NotFound";

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
          <Route path="/impacts" element={<Impacts />} />
          <Route path="/innovators/african-food-trail" element={<AfricanFoodTrail />} />
          <Route path="/innovators/big-ship" element={<BigShip />} />
          <Route path="/innovators/k-lenses" element={<KLenses />} />
          <Route path="/innovators/mombasa-cultural-village" element={<MombasaCulturalVillage />} />
          <Route path="/innovators/studio-bella-bella" element={<StudioBellaBella />} />
          <Route path="/innovators/umoja-wa-pwani" element={<UmojaWaPwani />} />
          <Route path="/ourwork/incubation" element={<Incubation />} />
          <Route path="/ourwork/linkages" element={<Linkages />} />
          <Route path="/ourwork/scouting-site-visits" element={<SiteVisits />} />
          <Route path="/ourwork/subgranting" element={<Subgranting />} />
          <Route path="/ourwork/training-mentorship" element={<TrainingMentorship />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
