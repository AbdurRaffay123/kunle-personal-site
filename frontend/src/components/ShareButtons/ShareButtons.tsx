/**
 * Share buttons component for blog posts
 */

"use client";

import Button from "@/components/UI/Button";

interface ShareButtonsProps {
  postUrl: string;
  postTitle: string;
}

export default function ShareButtons({ postUrl, postTitle }: ShareButtonsProps) {
  const shareUrls = {
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(postUrl)}&text=${encodeURIComponent(postTitle)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(postUrl)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(postUrl)}`,
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(postUrl);
      alert("Link copied to clipboard!");
    } catch (err) {
      console.error("Failed to copy link:", err);
      // Fallback for older browsers
      const textArea = document.createElement("textarea");
      textArea.value = postUrl;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      alert("Link copied to clipboard!");
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <Button
        variant="outline"
        size="sm"
        as="a"
        href={shareUrls.twitter}
        target="_blank"
        rel="noopener noreferrer"
      >
        Share on Twitter
      </Button>
      <Button
        variant="outline"
        size="sm"
        as="a"
        href={shareUrls.linkedin}
        target="_blank"
        rel="noopener noreferrer"
      >
        Share on LinkedIn
      </Button>
      <Button
        variant="outline"
        size="sm"
        onClick={handleCopyLink}
      >
        Copy Link
      </Button>
    </div>
  );
}
