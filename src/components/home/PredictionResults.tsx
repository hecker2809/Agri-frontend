
import React from 'react';
import { Button } from '@/components/ui/button';
import { BarChart, LineChart, DownloadCloud, Share2 } from 'lucide-react';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { ComposedChart, Bar, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface PredictionResultsProps {
  yieldResult: number;
  onReset: () => void;
}

const PredictionResults: React.FC<PredictionResultsProps> = ({ yieldResult, onReset }) => {
  // Calculate confidence range (±10% of the yield)
  const lowerBound = Math.round(yieldResult * 0.9);
  const upperBound = Math.round(yieldResult * 1.1);
  
  // Calculate yield quality based on the value
  let yieldQuality = "Poor";
  let qualityPercentage = 0;
  
  if (yieldResult < 2000) {
    yieldQuality = "Poor";
    qualityPercentage = 25;
  } else if (yieldResult < 3500) {
    yieldQuality = "Average";
    qualityPercentage = 50;
  } else if (yieldResult < 5000) {
    yieldQuality = "Good";
    qualityPercentage = 75;
  } else {
    yieldQuality = "Excellent";
    qualityPercentage = 100;
  }
  
  // Mock data for charts
  const historicalData = [
    { year: '2019', yield: Math.round(yieldResult * 0.85), temperature: 22 },
    { year: '2020', yield: Math.round(yieldResult * 0.90), temperature: 23 },
    { year: '2021', yield: Math.round(yieldResult * 0.95), temperature: 24 },
    { year: '2022', yield: Math.round(yieldResult * 0.97), temperature: 25 },
    { year: '2023', yield: Math.round(yieldResult * 0.99), temperature: 24 },
    { year: '2024', yield: yieldResult, temperature: 25 },
    { year: '2025', yield: Math.round(yieldResult * 1.02), temperature: 26 },
  ];

  return (
    <Card className="w-full prediction-card">
      <CardHeader className="bg-agriculture/5 border-b border-gray-100">
        <CardTitle className="text-2xl">Yield Prediction Results</CardTitle>
        <CardDescription>Based on your input parameters</CardDescription>
      </CardHeader>
      <CardContent className="p-6">
        <div className="mb-8">
          <div className="text-center mb-6">
            <p className="text-sm text-gray-500 mb-1">Predicted Yield</p>
            <h3 className="text-4xl font-bold text-agriculture">{yieldResult.toLocaleString()} kg/ha</h3>
            <p className="text-sm text-gray-500 mt-2">
              Confidence Range: {lowerBound.toLocaleString()} - {upperBound.toLocaleString()} kg/ha
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="text-sm font-medium text-gray-500 mb-1">Yield Quality</h4>
              <p className="text-xl font-semibold">{yieldQuality}</p>
              <Progress value={qualityPercentage} className="h-2 mt-2" />
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="text-sm font-medium text-gray-500 mb-1">Profit Potential</h4>
              <p className="text-xl font-semibold">${Math.round(yieldResult * 0.20).toLocaleString()}/ha</p>
              <p className="text-xs text-gray-500 mt-1">Based on current market prices</p>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="text-sm font-medium text-gray-500 mb-1">Growth Rate</h4>
              <p className="text-xl font-semibold">+3.2%</p>
              <p className="text-xs text-gray-500 mt-1">Compared to previous year</p>
            </div>
          </div>
        </div>
        
        <Tabs defaultValue="chart" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="chart" className="flex items-center">
              <BarChart className="w-4 h-4 mr-2" />
              Yield Chart
            </TabsTrigger>
            <TabsTrigger value="trend" className="flex items-center">
              <LineChart className="w-4 h-4 mr-2" />
              Trend Analysis
            </TabsTrigger>
          </TabsList>
          <TabsContent value="chart" className="pt-4">
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <ComposedChart
                  data={historicalData}
                  margin={{
                    top: 20,
                    right: 20,
                    bottom: 20,
                    left: 20,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="year" />
                  <YAxis yAxisId="left" orientation="left" />
                  <YAxis yAxisId="right" orientation="right" domain={[0, 40]} />
                  <Tooltip />
                  <Legend />
                  <Bar yAxisId="left" dataKey="yield" fill="#2F855A" name="Yield (kg/ha)" />
                  <Line yAxisId="right" type="monotone" dataKey="temperature" stroke="#D97706" name="Temp (°C)" />
                </ComposedChart>
              </ResponsiveContainer>
            </div>
          </TabsContent>
          <TabsContent value="trend" className="pt-4">
            <div className="space-y-4">
              <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-100">
                <h4 className="font-medium text-yellow-800 mb-2">Key Insights</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-yellow-700">
                  <li>Yields have been consistently increasing over the past 5 years</li>
                  <li>Temperature increases correlate with higher yields up to 26°C</li>
                  <li>Predicted yield for next season shows potential 2% increase</li>
                  <li>Current fertilizer application is optimized for maximum yield</li>
                </ul>
              </div>
              
              <div className="p-4 bg-green-50 rounded-lg border border-green-100">
                <h4 className="font-medium text-green-800 mb-2">Recommendations</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-green-700">
                  <li>Consider increasing potassium levels by 5-10% for better resilience</li>
                  <li>Monitor soil moisture closely during key growth stages</li>
                  <li>Plan for harvest in the second week of October for optimal maturity</li>
                  <li>Consider crop rotation next season to improve soil health</li>
                </ul>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
      <CardFooter className="flex flex-col sm:flex-row gap-3 bg-gray-50 border-t border-gray-100">
        <Button variant="outline" onClick={onReset} className="flex-1">
          Start New Prediction
        </Button>
        <Button variant="outline" className="flex-1">
          <DownloadCloud className="w-4 h-4 mr-2" />
          Download Report
        </Button>
        <Button variant="outline" className="flex-1">
          <Share2 className="w-4 h-4 mr-2" />
          Share Results
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PredictionResults;
