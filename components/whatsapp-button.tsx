"use client";

import Link from "next/link";
import whatsappAnimation from "@/app/images/whatsapp.json";
import dynamic from "next/dynamic";

// Dynamically import Lottie with no SSR
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

interface WhatsAppButtonProps {
  phoneNumber: string; // Phone number with country code but without + or spaces
  message?: string; // Optional pre-filled message
}

export function WhatsAppButton({ phoneNumber, message = "Hello! I'm interested in Euro Gulf Tech's HVAC services. Please provide more information and a quote." }: WhatsAppButtonProps) {
  // Encode the message for URL
  const encodedMessage = encodeURIComponent(message);
  
  // Create WhatsApp URL 
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Link 
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-16 h-16 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white p-1"
        aria-label="Chat on WhatsApp"
      >
        <div className="w-full h-full">
          <Lottie
            animationData={whatsappAnimation}
            loop={true}
            autoplay={true}
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      </Link>
    </div>
  );
}