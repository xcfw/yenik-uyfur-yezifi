'use client';

import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter
} from '@/components/ui/dialog';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';

interface HistoryDialogProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  history: string[];
  onSelect: (text: string) => void;
  t: any;
  dir: 'ltr' | 'rtl';
}

const ITEMS_PER_PAGE = 10;

export function HistoryDialog({ isOpen, setIsOpen, history, onSelect, t, dir }: HistoryDialogProps) {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(history.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentHistory = history.slice(startIndex, endIndex);

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const handlePrevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const truncateText = (text: string, length = 100) => {
    if (text.length <= length) return text;
    return text.substring(0, length) + '...';
  };
  
  const pageText = t.historyDialogPage
    .replace('{currentPage}', currentPage.toString())
    .replace('{totalPages}', totalPages.toString());

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[625px] flex flex-col max-h-[90vh]" dir={dir}>
        <DialogHeader>
          <DialogTitle>{t.historyDialogTitle}</DialogTitle>
          <DialogDescription>
            {t.historyDialogDescription}
          </DialogDescription>
        </DialogHeader>
        <ScrollArea className="flex-grow pr-4 -mr-4">
            {currentHistory.length > 0 ? (
            <Accordion type="single" collapsible className="w-full">
                {currentHistory.map((item, index) => (
                <AccordionItem value={`item-${index}`} key={index}>
                    <AccordionTrigger className="hover:no-underline">
                        <div className="flex items-center justify-between w-full">
                            <span className="text-left font-mono text-sm text-muted-foreground flex-1 truncate pr-4">
                                {truncateText(item, 50)}
                            </span>
                            <Button variant="ghost" size="sm" onClick={(e) => {
                                e.stopPropagation();
                                onSelect(item);
                            }}>
                                {t.historyDialogSelect}
                            </Button>
                        </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-sm text-foreground/80 bg-muted/50 p-4 rounded-md">
                        {item}
                    </AccordionContent>
                </AccordionItem>
                ))}
            </Accordion>
            ) : (
            <div className="text-center text-muted-foreground py-10">
                {t.historyDialogEmpty}
            </div>
            )}
        </ScrollArea>
        {history.length > ITEMS_PER_PAGE && (
            <DialogFooter className="pt-4 border-t">
            <div className="flex items-center justify-between w-full">
              <Button variant="outline" onClick={handlePrevPage} disabled={currentPage === 1}>
                {t.historyDialogPrevious}
              </Button>
              <span className="text-sm text-muted-foreground">
                {pageText}
              </span>
              <Button variant="outline" onClick={handleNextPage} disabled={currentPage === totalPages}>
                {t.historyDialogNext}
              </Button>
            </div>
          </DialogFooter>
        )}
      </DialogContent>
    </Dialog>
  );
}
