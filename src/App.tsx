import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Team from "./pages/Team";
import { ThemeProvider } from "./context/ThemeContext";
import Predict from "./pages/Predict";
import CropPrediction from "./pages/CropPrediction";
import LeafDisease from "./pages/LeafDisease";
import About from "./pages/About";
import RouteScroller from "@/components/layout/RouteScroller"; // ✅ Import here
import { ChatBox } from "./pages/chatbox";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <RouteScroller /> {/* ✅ Ensures scroll-to-top on route change */}
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/team" element={<Team />} />
            <Route path="/predict" element={<Predict />} />
            <Route path="/crop-prediction" element={<CropPrediction />} />
            <Route path="/leaf-disease" element={<LeafDisease />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <ChatBox />
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
