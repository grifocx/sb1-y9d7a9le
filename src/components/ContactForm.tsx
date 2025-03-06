import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { useForm } from 'react-hook-form';
import { useToast } from './ui/use-toast';
import { Loader2 } from 'lucide-react';

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
};

type ContactMessage = {
  first_name: string;
  last_name: string;
  email: string;
  subject: string;
  message: string;
};

// Mock function to simulate form submission
async function submitContactForm(formData: ContactMessage) {
  // Simulate a delay to mimic network request
  await new Promise(resolve => setTimeout(resolve, 800));
  
  // Log the form data to console
  console.log('Form submission:', formData);
  
  // Return a mock successful response
  return { 
    data: { id: 'mock-id-' + Date.now() }, 
    error: null 
  };
}

export function ContactForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<FormData>({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      subject: '',
      message: ''
    }
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    try {
      // Mock submission - simulate API call
      await submitContactForm({
        first_name: data.firstName,
        last_name: data.lastName,
        email: data.email,
        subject: data.subject,
        message: data.message
      });
      
      // Success
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you as soon as possible.",
        variant: "default"
      });
      
      // Reset the form
      reset();
      
    } catch (error) {
      console.error('Form submission error:', error);
      toast({
        title: "Something went wrong",
        description: "Please try again later or contact us directly by phone.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Send us a Message</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="firstName" className={errors.firstName ? "text-destructive" : ""}>
                First Name
              </Label>
              <Input
                id="firstName"
                {...register('firstName', { required: "First name is required" })}
                placeholder="John"
                className={`min-h-[48px] ${errors.firstName ? "border-destructive" : ""}`}
                disabled={isSubmitting}
              />
              {errors.firstName && (
                <p className="text-sm text-destructive">{errors.firstName.message}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName" className={errors.lastName ? "text-destructive" : ""}>
                Last Name
              </Label>
              <Input
                id="lastName"
                {...register('lastName', { required: "Last name is required" })}
                placeholder="Doe"
                className={`min-h-[48px] ${errors.lastName ? "border-destructive" : ""}`}
                disabled={isSubmitting}
              />
              {errors.lastName && (
                <p className="text-sm text-destructive">{errors.lastName.message}</p>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className={errors.email ? "text-destructive" : ""}>
              Email
            </Label>
            <Input
              id="email"
              type="email"
              {...register('email', { 
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address"
                }
              })}
              placeholder="john@example.com"
              className={`min-h-[48px] ${errors.email ? "border-destructive" : ""}`}
              disabled={isSubmitting}
            />
            {errors.email && (
              <p className="text-sm text-destructive">{errors.email.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="subject" className={errors.subject ? "text-destructive" : ""}>
              Subject
            </Label>
            <select
              id="subject"
              {...register('subject', { required: "Please select a subject" })}
              className={`flex h-12 w-full rounded-md border ${errors.subject ? "border-destructive" : "border-input"} bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50`}
              disabled={isSubmitting}
            >
              <option value="" disabled>Select a subject</option>
              <option value="sales">Sales Inquiry</option>
              <option value="service">Service Question</option>
              <option value="fitting">Bike Fitting</option>
              <option value="events">Events & Group Rides</option>
              <option value="other">Other</option>
            </select>
            {errors.subject && (
              <p className="text-sm text-destructive">{errors.subject.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className={errors.message ? "text-destructive" : ""}>
              Message
            </Label>
            <Textarea
              id="message"
              {...register('message', { 
                required: "Please enter your message",
                minLength: {
                  value: 10,
                  message: "Message must be at least 10 characters"
                }
              })}
              placeholder="How can we help you?"
              className={`min-h-[150px] ${errors.message ? "border-destructive" : ""}`}
              disabled={isSubmitting}
            />
            {errors.message && (
              <p className="text-sm text-destructive">{errors.message.message}</p>
            )}
          </div>

          <Button 
            type="submit" 
            className="w-full min-h-[48px]"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Sending...
              </>
            ) : (
              "Send Message"
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}