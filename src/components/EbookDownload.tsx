import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen, Download, Mail, CheckCircle, AlertCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface EbookDownloadProps {
  title?: string;
  description?: string;
  className?: string;
}

const EbookDownload = ({ 
  title = "Tourism Business Ideas eBook",
  description = "Get our comprehensive guide to starting and scaling tourism businesses in Mombasa",
  className = ""
}: EbookDownloadProps) => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');
  const { toast } = useToast();

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email) {
      setError('Email is required');
      return;
    }

    if (!validateEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);

    try {
      // Here you would integrate with your email service
      // For now, we'll simulate the process
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Store email in localStorage for demo purposes
      const emails = JSON.parse(localStorage.getItem('ebook-emails') || '[]');
      emails.push({ 
        email, 
        timestamp: new Date().toISOString(),
        ebook: title 
      });
      localStorage.setItem('ebook-emails', JSON.stringify(emails));
      
      setIsSuccess(true);
      toast({
        title: "Success!",
        description: "Check your email for the download link.",
      });
    } catch (error) {
      setError('Something went wrong. Please try again.');
      toast({
        title: "Error",
        description: "Failed to send ebook. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDownload = () => {
    // In a real implementation, this would trigger the actual download
    // For demo purposes, we'll just show a success message
    toast({
      title: "Download Started",
      description: "Your ebook download should begin shortly.",
    });
  };

  if (isSuccess) {
    return (
      <Card className={`max-w-md mx-auto ${className}`}>
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <CheckCircle className="h-12 w-12 text-green-600" />
          </div>
          <CardTitle className="text-green-600">Thank You!</CardTitle>
          <CardDescription>
            We've sent the ebook to your email. You can also download it directly below.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button onClick={handleDownload} className="w-full">
            <Download className="mr-2 h-4 w-4" />
            Download eBook Now
          </Button>
          <Button 
            variant="outline" 
            onClick={() => setIsSuccess(false)}
            className="w-full"
          >
            Download Another Copy
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className={`max-w-md mx-auto ${className}`}>
      <CardHeader className="text-center">
        <div className="flex justify-center mb-4">
          <BookOpen className="h-12 w-12 text-primary" />
        </div>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="pl-10"
                disabled={isSubmitting}
              />
            </div>
            {error && (
              <div className="flex items-center gap-2 text-sm text-destructive">
                <AlertCircle className="h-4 w-4" />
                {error}
              </div>
            )}
          </div>
          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                Sending...
              </>
            ) : (
              <>
                <Download className="mr-2 h-4 w-4" />
                Get Free eBook
              </>
            )}
          </Button>
          <p className="text-xs text-muted-foreground text-center">
            We respect your privacy. No spam, unsubscribe at any time.
          </p>
        </form>
      </CardContent>
    </Card>
  );
};

export default EbookDownload;