
import React, { useState } from 'react';
import PredictionForm from './PredictionForm';
import PredictionResults from './PredictionResults';

const PredictionSection: React.FC = () => {
  const [predictionResult, setPredictionResult] = useState<number | null>(null);

  const handlePredictionComplete = (result: number) => {
    setPredictionResult(result);
    
    // Scroll to the results
    setTimeout(() => {
      const resultsElement = document.getElementById('prediction-results');
      if (resultsElement) {
        resultsElement.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const handleReset = () => {
    setPredictionResult(null);
    
    // Scroll back to the form
    const formElement = document.getElementById('predict');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="predict" className="py-20 bg-background border-t border-border">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Predict Your Crop Yield
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Enter your farm details and crop parameters to get an accurate yield prediction using our advanced AI model.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-card p-6 rounded-xl shadow-md border border-border">
          {!predictionResult ? (
            <PredictionForm onPredictionComplete={handlePredictionComplete} />
          ) : (
            <div id="prediction-results">
              <PredictionResults yieldResult={predictionResult} onReset={handleReset} />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default PredictionSection;
