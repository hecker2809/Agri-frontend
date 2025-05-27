import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import BASE_URL from "../../config";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Loader2 } from 'lucide-react';
import { toast } from 'sonner';

const cropCategories = [
  "Arecanut", "Arhar/Tur", "Bajra", "Banana", "Barley", "Black pepper", "Cardamom",
  "Cashewnut", "Castor seed", "Coconut", "Coriander", "Cotton(lint)", "Cowpea(Lobia)",
  "Dry chillies", "Garlic", "Ginger", "Gram", "Groundnut", "Guar seed", "Horse-gram",
  "Jowar", "Jute", "Khesari", "Linseed", "Maize", "Masoor", "Mesta", "Moong(Green Gram)",
  "Moth", "Niger seed", "Oilseeds total", "Onion", "Other  Rabi pulses", "Other Cereals",
  "Other Kharif pulses", "Other Summer Pulses", "Peas & beans (Pulses)", "Potato", "Ragi",
  "Rapeseed &Mustard", "Rice", "Safflower", "Sannhamp", "Sesamum", "Small millets",
  "Soyabean", "Sugarcane", "Sunflower", "Sweet potato", "Tapioca", "Tobacco", "Turmeric",
  "Urad", "Wheat", "other oilseeds"
];

const seasonCategories = ["Autumn", "Kharif", "Rabi", "Summer", "Whole Year", "Winter"];

const stateCategories = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Delhi", "Goa",
  "Gujarat", "Haryana", "Himachal Pradesh", "Jammu and Kashmir", "Jharkhand", "Karnataka",
  "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland",
  "Odisha", "Puducherry", "Punjab", "Sikkim", "Tamil Nadu", "Telangana", "Tripura",
  "Uttar Pradesh", "Uttarakhand", "West Bengal", "Rajasthan"
];

const formSchema = z.object({
  crop: z.string().min(1, { message: 'Please select a crop' }),
  season: z.string().min(1, { message: 'Please select a season' }),
  state: z.string().min(1, { message: 'Please select a state' }),
  rainfall: z.coerce.number().nonnegative({ message: 'Rainfall must be a positive number' }),
  area: z.coerce.number().positive({ message: 'Area must be a positive number' }),
  production: z.coerce.number().nonnegative({ message: 'Production must be a positive number' }),
  fertilizer: z.coerce.number().nonnegative({ message: 'Fertilizer must be a positive number' }),
  pesticide: z.coerce.number().nonnegative({ message: 'Pesticide must be a positive number' }),
});

type FormValues = z.infer<typeof formSchema>;

const PredictionForm: React.FC<{ onPredictionComplete: (result: number) => void }> = ({
  onPredictionComplete,
}) => {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      crop: '',
      season: '',
      state: '',
      rainfall: 1000,
      area: 1,
      production: 500,
      fertilizer: 100,
      pesticide: 10,
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsLoading(true);
    try {
      const response = await fetch(`${BASE_URL}/predict`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
  
      if (!response.ok) throw new Error("Prediction failed");
  
      const result = await response.json();
      onPredictionComplete(result.predicted_yield);
      toast.success("Prediction completed!");
    } catch (error) {
      toast.error("Failed to fetch prediction");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };
  

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="crop"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Crop</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select crop" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {cropCategories.map((crop) => (
                      <SelectItem key={crop} value={crop}>
                        {crop}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="season"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Season</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select season" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {seasonCategories.map((season) => (
                      <SelectItem key={season} value={season}>
                        {season}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="state"
            render={({ field }) => (
              <FormItem>
                <FormLabel>State</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select state" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {stateCategories.map((state) => (
                      <SelectItem key={state} value={state}>
                        {state}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          {["rainfall", "area", "production", "fertilizer", "pesticide"].map((fieldName) => (
            <FormField
              key={fieldName}
              control={form.control}
              name={fieldName as keyof FormValues}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    {{
                      rainfall: "Annual Rainfall (mm)",
                      area: "Area (in hectares)",
                      production: "Production (Metric Ton)",
                      fertilizer: "Fertilizer (kg)",
                      pesticide: "Pesticide (kg)",
                    }[fieldName as keyof FormValues]}
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      step="0.1"
                      {...field}
                      onChange={(e) => field.onChange(parseFloat(e.target.value))}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          ))}
        </div>
        <Button type="submit" disabled={isLoading} className="w-full bg-agriculture hover:bg-agriculture-dark">
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Generating Prediction...
            </>
          ) : (
            "Generate Prediction"
          )}
        </Button>
      </form>
    </Form>
  );
};

export default PredictionForm;
