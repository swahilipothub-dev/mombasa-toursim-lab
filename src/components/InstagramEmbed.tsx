import { useState, useEffect } from 'react';
import { ExternalLink, Instagram, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface InstagramEmbedProps {
  url: string;
  className?: string;
}

const InstagramEmbed = ({ url, className = "" }: InstagramEmbedProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [embedHtml, setEmbedHtml] = useState<string | null>(null);

  // Extract Instagram post ID from URL
  const getPostId = (url: string) => {
    const match = url.match(/\/p\/([^\/\?]+)/) || url.match(/\/reel\/([^\/\?]+)/);
    return match ? match[1] : null;
  };

  const postId = getPostId(url);

  useEffect(() => {
    const loadInstagramEmbed = async () => {
      if (!postId) {
        setHasError(true);
        setIsLoading(false);
        return;
      }

      try {
        // Create iframe-based embed
        const embedUrl = `https://www.instagram.com/p/${postId}/embed/`;
        setEmbedHtml(embedUrl);
        setIsLoading(false);
      } catch (error) {
        console.error('Error loading Instagram embed:', error);
        setHasError(true);
        setIsLoading(false);
      }
    };

    loadInstagramEmbed();
  }, [postId]);

  if (isLoading) {
    return (
      <div className={`bg-muted rounded-lg border border-border overflow-hidden ${className}`}>
        <div className="aspect-square flex items-center justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
        </div>
      </div>
    );
  }

  if (hasError || !embedHtml) {
    return (
      <div className={`bg-muted rounded-lg border border-border overflow-hidden ${className}`}>
        <div className="aspect-square flex flex-col items-center justify-center p-6 text-center">
          <Instagram className="h-12 w-12 text-muted-foreground mb-4" />
          <p className="text-muted-foreground mb-4">Unable to load Instagram content</p>
          <Button variant="outline" size="sm" asChild>
            <a href={url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <ExternalLink className="h-4 w-4" />
              View on Instagram
            </a>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className={`bg-background rounded-lg border border-border overflow-hidden shadow-sm hover:shadow-md transition-shadow ${className}`}>
      <div className="aspect-square">
        <iframe
          src={embedHtml}
          className="w-full h-full border-0"
          scrolling="no"
          allowTransparency={true}
          onLoad={() => setIsLoading(false)}
          onError={() => setHasError(true)}
        />
      </div>
      <div className="p-3 border-t border-border">
        <Button variant="ghost" size="sm" asChild className="w-full justify-start">
          <a href={url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
            <Instagram className="h-4 w-4" />
            View on Instagram
            <ExternalLink className="h-3 w-3 ml-auto" />
          </a>
        </Button>
      </div>
    </div>
  );
};

export default InstagramEmbed;