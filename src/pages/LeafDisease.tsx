import BASE_URL from "../config";
import React, { useState, useRef } from 'react';
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
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import {
  Upload,
  FileImage,
  CheckCircle2,
  Leaf,
  AlertCircle,
  X,
} from 'lucide-react';
import axios from 'axios';

const diseaseInfo: Record<string, { description: string; treatment: string }> = {
  
  "Apple___Apple_scab": {
  "description": "A fungal disease causing olive-green to black velvety spots on leaves and fruit, leading to premature leaf drop and fruit deformities.",
  "treatment": "Apply fungicides such as captan or mancozeb from bud break until wet weather subsides. Practice good sanitation by removing fallen leaves and pruning infected branches. Rotate fungicides to prevent resistance."
},
"Apple___Black_rot": {
  "description": "A fungal disease characterized by dark, sunken lesions on fruit, leaves, and bark, often leading to fruit rot and cankers on branches.",
  "treatment": "Prune out dead or diseased branches and remove mummified fruits. Dispose of infected plant material properly. Maintain tree vigor through proper fertilization and watering."
},
"Apple___Cedar_apple_rust": {
  "description": "A fungal disease causing yellow-orange spots on apple leaves and fruit, with spore-producing structures forming on cedar trees.",
  "treatment": "Apply fungicides like myclobutanil during early leaf development. Remove nearby cedar trees if possible. Use resistant apple varieties to minimize infection."
},
"Apple___healthy": {
  "description": "Apple tree exhibiting vigorous growth with healthy green leaves and unblemished fruit, free from signs of disease or pest infestation.",
  "treatment": "Maintain proper cultural practices, including regular pruning, adequate watering, and balanced fertilization to sustain tree health."
},

"Blueberry___healthy": {
  "description": "Blueberry plant displaying robust growth with vibrant green leaves and abundant fruit production, indicating optimal health.",
  "treatment": "Ensure acidic soil conditions (pH 4.0 to 5.0), provide consistent watering, and apply appropriate fertilizers to maintain plant vigor."
},

"Cherry_(including_sour)___Powdery_mildew": {
  "description": "A fungal disease presenting as white powdery growth on leaves, shoots, and fruit, potentially leading to reduced fruit quality and yield.",
  "treatment": "Implement a fungicide program starting at shuck fall and continue through harvest. Prune to improve air circulation and remove infected plant parts promptly."
},
"Cherry_(including_sour)___healthy": {
  "description": "Cherry tree exhibiting healthy foliage and fruit development without any visible signs of disease or pest damage.",
  "treatment": "Maintain tree health through proper pruning, adequate watering, and timely fertilization."
},

"Corn_(maize)___Cercospora_leaf_spot Gray_leaf_spot": {
  "description": "A fungal disease causing rectangular gray lesions on leaves, which can coalesce and lead to significant leaf area loss.",
  "treatment": "Utilize resistant hybrids, practice crop rotation, and apply foliar fungicides when necessary to manage disease spread."
},
"Corn_(maize)___Common_rust_": {
  "description": "A fungal disease characterized by cinnamon-brown pustules on both leaf surfaces, potentially leading to leaf chlorosis and death under severe conditions.",
  "treatment": "Monitor fields regularly and apply fungicides if disease pressure is high. Use resistant hybrids to minimize impact."
},
"Corn_(maize)___Northern_Leaf_Blight": {
  "description": "A fungal disease presenting as elongated gray-green lesions on leaves, which can expand and cause significant yield loss.",
  "treatment": "Plant resistant hybrids, implement crop rotation, and apply fungicides during early disease stages if necessary."
},
"Corn_(maize)___healthy": {
  "description": "Corn plant showing vigorous growth with healthy green leaves and no signs of disease or pest infestation.",
  "treatment": "Maintain optimal plant health through proper fertilization, irrigation, and pest management practices."
},

"Grape___Black_rot": {
  "description": "A fungal disease causing dark brown lesions on leaves and black, shriveled fruit, leading to significant crop loss.",
  "treatment": "Apply fungicides such as captan or myclobutanil from bud break until four weeks after bloom. Remove and destroy infected plant material."
},
"Grape___Esca_(Black_Measles)": {
  "description": "A complex disease causing interveinal leaf striping and fruit spotting, potentially leading to vine decline.",
  "treatment": "Currently, no effective management strategies exist. Focus on removing infected vines and protecting pruning wounds to prevent infection."
},
"Grape___Leaf_blight_(Isariopsis_Leaf_Spot)": {
  "description": "A fungal disease causing angular brown spots on leaves, which may coalesce and lead to premature leaf drop.",
  "treatment": "Apply appropriate fungicides and practice good canopy management to improve air circulation and reduce humidity."
},
"Grape___healthy": {
  "description": "Grape vine exhibiting healthy foliage and fruit development without any visible signs of disease or pest damage.",
  "treatment": "Maintain vine health through proper pruning, irrigation, and nutrient management."
},

"Orange___Haunglongbing_(Citrus_greening)": {
  "description": "A bacterial disease causing yellowing of leaves, misshapen fruit, and eventual tree decline. Transmitted by the Asian citrus psyllid.",
  "treatment": "No cure exists. Rapid removal of infected trees and control of psyllid populations are critical to prevent disease spread."
},

"Peach___Bacterial_spot": {
  "description": "A bacterial disease causing dark, sunken lesions on leaves and fruit, leading to defoliation and fruit blemishes.",
  "treatment": "Apply bactericides such as oxytetracycline during early leaf development. Implement cultural practices to reduce leaf wetness and avoid overhead irrigation."
},
"Peach___healthy": {
  "description": "Peach tree exhibiting healthy foliage and fruit development without any visible signs of disease or pest damage.",
  "treatment": "Maintain tree health through proper pruning, irrigation, and nutrient management."
},

"Pepper,_bell___Bacterial_spot": {
  "description": "A bacterial disease causing water-soaked spots on leaves and fruit, which may enlarge and become necrotic.",
  "treatment": "Use disease-free seeds, apply copper-based bactericides, and practice crop rotation to manage disease incidence."
},
"Pepper,_bell___healthy": {
  "description": "Bell pepper plant displaying vigorous growth with healthy green leaves and unblemished fruit.",
  "treatment": "Ensure proper spacing, adequate watering, and balanced fertilization to maintain plant health."
},

"Potato___Early_blight": {
  "description": "A fungal disease causing concentric ring lesions on lower leaves, leading to defoliation and reduced yield.",
  "treatment": "Apply foliar fungicides containing fluopyram and practice crop rotation to manage disease pressure."
},
"Potato___Late_blight": {
  "description": "A devastating fungal disease causing dark lesions on leaves and stems, leading to rapid plant collapse.",
  "treatment": "Apply fungicides promptly upon detection, remove infected plants, and avoid overhead irrigation to reduce humidity."
},
"Potato___healthy": {
  "description": "Potato plant exhibiting healthy foliage and tuber development without any visible signs of disease or pest damage.",
  "treatment": "Maintain plant health through proper fertilization, irrigation, and pest management practices."
},

"Strawberry___Leaf_scorch": {
  "description": "A fungal disease causing small, dark purple spots on leaves, which may coalesce and lead to leaf death.",
  "treatment": "Apply appropriate fungicides and remove infected leaves to prevent disease spread."
},
"Strawberry___healthy": {
  "description": "Strawberry plant displaying healthy green leaves and abundant fruit production without any signs of disease.",
  "treatment": "Ensure proper spacing, adequate watering, and balanced fertilization to maintain plant vigor."
},
"Tomato___Bacterial_spot": {
    "description": "A bacterial disease causing small, water-soaked spots on leaves and fruit, which become necrotic and lead to defoliation.",
    "treatment": "Use certified disease-free seeds and transplants. Apply copper-based bactericides. Avoid overhead watering and practice crop rotation."
  },
  "Tomato___Early_blight": {
    "description": "A fungal disease marked by concentric rings on lower leaves, leading to yellowing, defoliation, and reduced yields.",
    "treatment": "Apply fungicides such as chlorothalonil or mancozeb. Rotate crops and remove plant debris to reduce overwintering spores."
  },
  "Tomato___Late_blight": {
    "description": "A destructive fungal-like disease causing dark, greasy lesions on leaves, stems, and fruit, leading to rapid plant collapse.",
    "treatment": "Apply fungicides containing chlorothalonil or metalaxyl. Immediately remove and destroy infected plants. Avoid overhead irrigation."
  },
  "Tomato___Leaf_Mold": {
    "description": "A fungal disease that causes yellow patches on upper leaf surfaces and grayish mold underneath, leading to premature defoliation.",
    "treatment": "Improve air circulation, reduce humidity in greenhouses, and apply fungicides such as copper or chlorothalonil."
  },
  "Tomato___Septoria_leaf_spot": {
    "description": "A fungal disease presenting as small, circular leaf spots with dark borders and light centers, leading to leaf drop.",
    "treatment": "Remove affected leaves, avoid overhead watering, and use fungicides like mancozeb or copper-based sprays."
  },
  "Tomato___Spider_mites Two-spotted_spider_mite": {
    "description": "A pest infestation that causes stippling, yellowing, and bronzing of leaves, with fine webbing visible in severe cases.",
    "treatment": "Spray with insecticidal soap or miticides. Maintain adequate humidity to deter mites and remove heavily infested foliage."
  },
  "Tomato___Target_Spot": {
    "description": "A fungal disease that causes dark, concentric ring spots on leaves and fruit, often surrounded by yellow halos.",
    "treatment": "Apply preventive fungicides and manage humidity. Rotate crops and remove infected plant debris."
  },
  "Tomato___Tomato_Yellow_Leaf_Curl_Virus": {
    "description": "A viral disease transmitted by whiteflies, causing yellowing and upward curling of leaves, stunted growth, and flower drop.",
    "treatment": "Use resistant varieties and control whiteflies with insecticides or reflective mulches. Remove infected plants promptly."
  },
  "Tomato___Tomato_mosaic_virus": {
    "description": "A viral disease causing mottled light and dark green patterns on leaves, with distorted growth and reduced fruit production.",
    "treatment": "Use virus-free seed, disinfect tools, and avoid tobacco contamination. Remove infected plants immediately."
  },
  "Tomato___healthy": {
    "description": "Tomato plant with lush green foliage, healthy stems, and well-formed fruit, free from disease and pest damage.",
    "treatment": "Practice crop rotation, water at the base of the plant, and fertilize regularly to maintain plant vigor."
  }
};

const LeafDisease = () => {
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [prediction, setPrediction] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type.startsWith('image/')) {
      setSelectedFile(file);
      setPrediction(null);
      const reader = new FileReader();
      reader.onload = () => setImagePreview(reader.result as string);
      reader.readAsDataURL(file);
    } else {
      toast({
        title: "Invalid file type",
        description: "Please upload a valid image file.",
        variant: "destructive"
      });
    }
  };

  const analyzeImage = async () => {
    if (!selectedFile) return;

    setLoading(true);
    setPrediction(null);

    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      const response = await axios.post(`${BASE_URL}/leaf-disease`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      const predictionClass = response.data.predicted_class;
      setPrediction(predictionClass);
      toast({
        title: "Analysis Complete",
        description: `Detected: ${predictionClass}`,
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "An error occurred during detection.",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const renderResult = () => {
    if (!prediction) return null;
    const info = diseaseInfo[prediction] || {
      description: "No description available.",
      treatment: "No treatment available."
    };
    const isHealthy = prediction.toLowerCase().includes("healthy");

    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <Card className={`border-${isHealthy ? "green-500" : "amber-500"}`}>
          <CardHeader className={`${isHealthy ? "bg-green-500" : "bg-amber-500"} text-white`}>
            <CardTitle className="flex items-center gap-2">
              {isHealthy ? <CheckCircle2 className="h-5 w-5" /> : <AlertCircle className="h-5 w-5" />}
              {prediction}
            </CardTitle>
            <CardDescription className="text-white/80">AI Prediction</CardDescription>
          </CardHeader>
          <CardContent className="pt-6 space-y-4">
            <div>
              <h4 className="font-semibold mb-1">Description:</h4>
              <p className="text-muted-foreground">{info.description}</p>
            </div>
            <div>
              <h4 className="font-semibold mb-1">Recommended Treatment:</h4>
              <p className="text-muted-foreground">{info.treatment}</p>
            </div>
          </CardContent>
          <CardFooter className="bg-muted/50 border-t">
            <Button variant="outline" onClick={() => {
              setPrediction(null);
              setSelectedFile(null);
              setImagePreview(null);
            }} className="w-full">
              Analyze Another Image
            </Button>
          </CardFooter>
        </Card>
      </motion.div>
    );
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
          <h1 className="text-4xl font-bold text-agriculture mb-4">Leaf Disease Detection</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Upload a leaf image to detect potential plant diseases using AI.
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
                  <Leaf className="text-agriculture h-6 w-6" />
                  How Disease Detection Works
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Our AI model analyzes uploaded images to detect common plant diseases using deep learning.
                </p>
                <div className="grid grid-cols-1 gap-4 mt-4">
                  {["Image Upload", "AI Analysis", "Disease Result"].map((step, i) => (
                    <motion.div
                      key={step}
                      className="bg-background rounded-lg p-4 border border-agriculture/20"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 + i * 0.1 }}
                    >
                      <h4 className="font-medium text-agriculture mb-2">Step {i + 1}: {step}</h4>
                      <p className="text-sm text-muted-foreground">
                        {[
                          "Upload a clear image of the affected leaf.",
                          "The image is processed by our trained AI model.",
                          "The result shows the detected disease and suggestions."
                        ][i]}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {renderResult()}
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
                  <FileImage className="text-agriculture h-6 w-6" />
                  Upload Leaf Image
                </CardTitle>
                <CardDescription>
                  Upload or drag and drop a clear image of the affected leaf.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="border-2 border-dashed rounded-lg p-6 bg-muted/50">
                  {!imagePreview ? (
                    <div className="text-center py-8">
                      <Upload className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                      <p className="text-muted-foreground mb-2">Click below to browse files</p>
                      <Button variant="outline" onClick={() => fileInputRef.current?.click()} className="mx-auto">
                        Browse Files
                      </Button>
                      <input
                        ref={fileInputRef}
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={handleFileChange}
                      />
                    </div>
                  ) : (
                    <div className="relative">
                      <img src={imagePreview} alt="Uploaded leaf" className="w-full h-auto rounded-lg" />
                      <Button
                        variant="destructive"
                        size="icon"
                        className="absolute top-2 right-2 bg-red-500 text-white"
                        onClick={() => {
                          setSelectedFile(null);
                          setImagePreview(null);
                          setPrediction(null);
                        }}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            <Button
              onClick={analyzeImage}
              variant="default"
              disabled={!selectedFile || loading}
              className="w-full"
            >
              {loading ? "Analyzing..." : "Predict"}
            </Button>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default LeafDisease;
