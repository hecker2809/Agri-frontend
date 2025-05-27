import BASE_URL from "../config";
import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { 
  Leaf, 
  Droplet, 
  Thermometer, 
  Sliders,
  BarChart2,
  Crop
} from 'lucide-react';

type CropPredictionFormData = {
  nitrogen: number;
  phosphorus: number;
  potassium: number;
  temperature: number;
  humidity: number;
  ph: number;
  rainfall: number;
};

const initialFormData: CropPredictionFormData = {
  nitrogen: 50,
  phosphorus: 50,
  potassium: 50,
  temperature: 25,
  humidity: 65,
  ph: 6.5,
  rainfall: 100
};

const CropPrediction = () => {
  const [formData, setFormData] = useState<CropPredictionFormData>(initialFormData);
  const [prediction, setPrediction] = useState<string | null>(null);
  const [isPredicting, setIsPredicting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (field: keyof CropPredictionFormData, value: number) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsPredicting(true);

    try {
      const response = await fetch(`${BASE_URL}/crop-prediction`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          N: formData.nitrogen,
          P: formData.phosphorus,
          K: formData.potassium,
          temperature: formData.temperature,
          humidity: formData.humidity,
          ph: formData.ph,
          rainfall: formData.rainfall,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch crop prediction");
      }

      const data = await response.json();
      setPrediction(data.predicted_crop);

      toast({
        title: "Prediction Complete",
        description: `Based on your inputs, ${data.predicted_crop} would be the best crop to grow.`,
      });

    } catch (error) {
      console.error("Prediction error:", error);
      toast({
        title: "Error",
        description: "There was a problem getting the prediction.",
        variant: "destructive",
      });
    } finally {
      setIsPredicting(false);
    }
  };

  return (
    <Layout>
      <div className="container py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-agriculture mb-4">Crop Prediction</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find the ideal crop for your soil and climate conditions using our AI-powered prediction tool
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <Card className="bg-gradient-to-br from-agriculture/5 to-agriculture/10 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart2 className="text-agriculture h-6 w-6" />
                  How Crop Prediction Works
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Our crop prediction system uses a sophisticated machine learning model trained on thousands of 
                  agricultural datasets from different regions. The model analyzes your inputs and suggests the 
                  most suitable crop for your conditions.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div className="bg-background rounded-lg p-4 border border-agriculture/20">
                    <h4 className="font-medium text-agriculture mb-2 flex items-center gap-2">
                      <Leaf className="h-4 w-4" /> NPK Values
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Nitrogen, Phosphorus, and Potassium are essential nutrients that affect plant growth, 
                      flowering, and fruiting.
                    </p>
                  </div>
                  
                  <div className="bg-background rounded-lg p-4 border border-agriculture/20">
                    <h4 className="font-medium text-agriculture mb-2 flex items-center gap-2">
                      <Thermometer className="h-4 w-4" /> Temperature
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Different crops require different temperature ranges for optimal growth and development.
                    </p>
                  </div>
                  
                  <div className="bg-background rounded-lg p-4 border border-agriculture/20">
                    <h4 className="font-medium text-agriculture mb-2 flex items-center gap-2">
                      <Droplet className="h-4 w-4" /> Humidity & Rainfall
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Water requirements vary significantly among crop types, affecting their ability to thrive.
                    </p>
                  </div>
                  
                  <div className="bg-background rounded-lg p-4 border border-agriculture/20">
                    <h4 className="font-medium text-agriculture mb-2 flex items-center gap-2">
                      <Sliders className="h-4 w-4" /> pH Level
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Soil pH affects nutrient availability, with some crops preferring acidic and others alkaline soils.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {prediction && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="border-agriculture">
                  <CardHeader className="bg-agriculture text-white">
                    <CardTitle>Prediction Result</CardTitle>
                    <CardDescription className="text-white/80">
                      Based on your provided parameters
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="text-center">
                      <Leaf className="h-12 w-12 text-agriculture mx-auto mb-4" />
                      <h3 className="text-2xl font-bold text-agriculture">{prediction}</h3>
                      <p className="text-muted-foreground mt-2">
                        This crop is predicted to thrive under the conditions you specified.
                      </p>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between bg-muted/50 border-t">
                    <p className="text-sm text-muted-foreground">
                      Prediction accuracy: 85-90%
                    </p>
                    <Button variant="outline" onClick={() => setPrediction(null)}>
                      Reset
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            )}
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-6"
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Crop className="text-agriculture h-6 w-6" />
                  Soil & Climate Parameters
                </CardTitle>
                <CardDescription>
                  Enter your soil and climate parameters to get crop recommendations
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* N-P-K Values */}
                  <div className="space-y-4">
                    <h3 className="font-medium text-lg">NPK Values</h3>
                    
                    {/* Nitrogen */}
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <Label htmlFor="nitrogen">Nitrogen (N)</Label>
                        <span className="text-sm text-muted-foreground">{formData.nitrogen} kg/ha</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <Slider 
                          id="nitrogen"
                          min={0} 
                          max={140} 
                          step={1} 
                          value={[formData.nitrogen]}
                          onValueChange={(value) => handleInputChange('nitrogen', value[0])}
                          className="flex-1"
                        />
                        <Input
                          type="number"
                          value={formData.nitrogen}
                          onChange={(e) => handleInputChange('nitrogen', Number(e.target.value))}
                          className="w-20"
                          min={0}
                          max={140}
                        />
                      </div>
                    </div>
                    
                    {/* Phosphorus */}
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <Label htmlFor="phosphorus">Phosphorus (P)</Label>
                        <span className="text-sm text-muted-foreground">{formData.phosphorus} kg/ha</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <Slider 
                          id="phosphorus"
                          min={0} 
                          max={140} 
                          step={1} 
                          value={[formData.phosphorus]}
                          onValueChange={(value) => handleInputChange('phosphorus', value[0])}
                          className="flex-1"
                        />
                        <Input
                          type="number"
                          value={formData.phosphorus}
                          onChange={(e) => handleInputChange('phosphorus', Number(e.target.value))}
                          className="w-20"
                          min={0}
                          max={140}
                        />
                      </div>
                    </div>
                    
                    {/* Potassium */}
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <Label htmlFor="potassium">Potassium (K)</Label>
                        <span className="text-sm text-muted-foreground">{formData.potassium} kg/ha</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <Slider 
                          id="potassium"
                          min={0} 
                          max={140} 
                          step={1} 
                          value={[formData.potassium]}
                          onValueChange={(value) => handleInputChange('potassium', value[0])}
                          className="flex-1"
                        />
                        <Input
                          type="number"
                          value={formData.potassium}
                          onChange={(e) => handleInputChange('potassium', Number(e.target.value))}
                          className="w-20"
                          min={0}
                          max={140}
                        />
                      </div>
                    </div>
                  </div>
                  
                  {/* Climate Parameters */}
                  <div className="space-y-4">
                    <h3 className="font-medium text-lg">Climate Parameters</h3>
                    
                    {/* Temperature */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="temperature" className="flex items-center gap-2">
                          <Thermometer className="h-4 w-4 text-agriculture" />
                          Temperature (°C)
                        </Label>
                        <Input
                          id="temperature"
                          type="number"
                          value={formData.temperature}
                          onChange={(e) => handleInputChange('temperature', Number(e.target.value))}
                          step="0.1"
                          min={0}
                          max={50}
                        />
                      </div>
                      
                      {/* Humidity */}
                      <div className="space-y-2">
                        <Label htmlFor="humidity" className="flex items-center gap-2">
                          <Droplet className="h-4 w-4 text-agriculture" />
                          Humidity (%)
                        </Label>
                        <Input
                          id="humidity"
                          type="number"
                          value={formData.humidity}
                          onChange={(e) => handleInputChange('humidity', Number(e.target.value))}
                          step="0.1"
                          min={0}
                          max={100}
                        />
                      </div>
                    </div>
                    
                    {/* pH */}
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <Label htmlFor="ph" className="flex items-center gap-2">
                          <Sliders className="h-4 w-4 text-agriculture" />
                          pH Value
                        </Label>
                        <span className="text-sm text-muted-foreground">{formData.ph}</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <Slider 
                          id="ph"
                          min={0} 
                          max={14} 
                          step={0.1} 
                          value={[formData.ph]}
                          onValueChange={(value) => handleInputChange('ph', value[0])}
                          className="flex-1"
                        />
                        <Input
                          type="number"
                          value={formData.ph}
                          onChange={(e) => handleInputChange('ph', Number(e.target.value))}
                          className="w-20"
                          step="0.1"
                          min={0}
                          max={14}
                        />
                      </div>
                    </div>
                    
                    {/* Rainfall */}
                    <div className="space-y-2">
                      <Label htmlFor="rainfall" className="flex items-center gap-2">
                        <Droplet className="h-4 w-4 text-agriculture" />
                        Rainfall (mm)
                      </Label>
                      <Input
                        id="rainfall"
                        type="number"
                        value={formData.rainfall}
                        onChange={(e) => handleInputChange('rainfall', Number(e.target.value))}
                        min={0}
                        max={3000}
                      />
                    </div>
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-agriculture hover:bg-agriculture-dark"
                    disabled={isPredicting}
                  >
                    {isPredicting ? "Predicting..." : "Predict Best Crop"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default CropPrediction;
