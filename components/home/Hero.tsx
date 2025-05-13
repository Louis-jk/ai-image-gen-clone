"use client";

import { Button } from "@/components/ui/button";
import { Loader2 } from 'lucide-react';
import Image from 'next/image';
import { useState } from "react";
import { API_CONFIG } from "@/lib/api-config";

export default function Hero() {

  const [prompt, setPrompt] = useState<string>("");
  const [image, setImage] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  

  const handleImageGeneration = async () => {
    if (!prompt) return;
    setLoading(true);

    const options = {
      method: 'POST',
      headers: API_CONFIG.headers,
      body: JSON.stringify({
        inputs: prompt
      })
    };

    try {
      const response = await fetch(API_CONFIG.url, options);
      const result = await response.text();
      console.log(result);
      if(result.includes('url')) {
        const url = JSON.parse(result).url;
        setImage(url);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className="w-[95%] min-h-screen mx-auto relative mt-[20vh]">
        <div className="relative z-10 text-white flex flex-col items-center justify-center">
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-center bg-gradient-to-r from-orange-300 to-cyan-500 text-transparent bg-clip-text">
                Create Beautiful Images with AI<br />Artificial Intelligence
            </h1>
            <div className="h-11 md:h-16 w-[95%] sm:w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%] bg-white rounded-lg mt-12 px-4 ml:px-6 flex items-center justify-between">
              <input
                  type="text"
                  placeholder="Generate Your Dream Image"
                  className="w-full h-full outline-none rounded-lg text-black block flex-1 placeholder:text-xs sm:placeholder:text-base"
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
              />
              <Button className="cursor-pointer" onClick={handleImageGeneration}>Generate</Button>
            </div>

            {/* Tags */}
            <div className="flex items-center mt-6 space-x-4 flex-wrap">
                <p>Popular Tag : </p>
                <Button variant="secondary">Creative</Button>
                <Button variant="secondary">Hyper reality</Button>
                <Button variant="secondary">Steampunk</Button>
                <Button variant="secondary">Animation</Button>
                <Button variant="secondary">Business</Button>                
            </div>

            {/* Image */}
            {loading && (
              <div className="w-4/6 min-h-[300px] my-12 flex items-center justify-center">                
                  <Loader2 className="w-10 h-10 animate-spin" />
              </div>
            )}
            {!loading && image && (
              <div className="w-4/6 h-auto bg-white rounded-lg my-12">
                {image && <Image src={image} width={500} height={500} alt="Generated Image" className="w-full h-auto object-cover" />}
              </div>
            )}
        </div>
    </div>
  );
}
