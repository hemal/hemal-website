
import React from "react";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

interface ContactButtonProps {
  email?: string;
  className?: string;
}

const ContactButton = ({ 
  email = "hello@hem.al",
  className 
}: ContactButtonProps) => {
  const handleEmailClick = () => {
    window.location.href = `mailto:${email}`;
  };

  return (
    <Button 
      onClick={handleEmailClick} 
      className={className}
      variant="outline"
    >
      <Mail className="mr-2 h-4 w-4" />
      Contact Me
    </Button>
  );
};

export default ContactButton;
