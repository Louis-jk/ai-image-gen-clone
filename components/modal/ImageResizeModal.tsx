import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useState } from "react";
import Image from "next/image";
import pintura from '@pqina/pintura/pintura.module.css';
import pinturaTheme from './index.module.css';
import { PinturaEditor } from '@pqina/react-pintura';

interface ImageResizeModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string;
}

export function ImageResizeModal({ isOpen, onClose, imageUrl }: ImageResizeModalProps) {
  const [width, setWidth] = useState<number>(500);
  const [height, setHeight] = useState<number>(500);
 
  return (    
    <Dialog open={isOpen} onOpenChange={onClose}>      
      <DialogContent className="sm:max-w-[800px] bg-black">
        <PinturaEditor className={`${pintura} ${pinturaTheme}`} />
        <DialogHeader>
          <DialogTitle>Resize Image</DialogTitle>
        </DialogHeader>       
        <div className="flex flex-col gap-4">
          <div className="relative w-full h-[400px]">
            <Image
              src={imageUrl}
              alt="Resizable Image"
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="text-sm font-medium">Width (px)</label>
              <input
                type="number"
                value={width}
                onChange={(e) => setWidth(Number(e.target.value))}
                className="w-full p-2 border rounded-md"
              />
            </div>
            <div className="flex-1">
              <label className="text-sm font-medium">Height (px)</label>
              <input
                type="number"
                value={height}
                onChange={(e) => setHeight(Number(e.target.value))}
                className="w-full p-2 border rounded-md"
              />
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
} 