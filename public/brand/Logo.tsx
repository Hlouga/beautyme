import Link from "next/link";
import Image from "next/image";

export function Logo({ 
  className = "h-10", // Default size for the header
  src = "/logo.png"   // Your actual logo file in the public folder
}: { 
  className?: string;
  src?: string;
}) {
  return (
    <Link href="/" className="flex items-center group transition-opacity hover:opacity-80">
      <Image 
        src={src} 
        alt="BeautyMe" 
        width={450}     // Base width (Next.js will scale it based on the height class)
        height={150}     // Base height
        priority        
        // The className here controls the height, and w-auto keeps the aspect ratio perfect
        className={`object-contain w-auto ${className}`} 
      />
    </Link>
  );
}