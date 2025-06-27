'use client';

import { useState, useEffect, useMemo, useCallback } from 'react';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { History, ArrowRightLeft, BookOpenCheck, Loader2, Copy } from 'lucide-react';
import { ThemeToggle } from '@/components/theme-toggle';
import { HistoryDialog } from '@/components/history-dialog';
import { useLocalStorage } from '@/hooks/use-local-storage';
import { transliterate, detectAlphabet, ALPHABET_CONFIG, AlphabetId } from '@/lib/transliteration';
import { useToast } from '@/hooks/use-toast';
import { useDebounce } from '@/hooks/use-debounce';
import { Language, languages, translations } from '@/lib/i18n';

function LanguageSelector({ language, setLanguage }: { language: Language, setLanguage: (lang: Language) => void }) {
  return (
    <Select value={language} onValueChange={(value) => setLanguage(value as Language)}>
      <SelectTrigger className="w-auto min-w-[120px] text-sm">
        <SelectValue placeholder="Language" />
      </SelectTrigger>
      <SelectContent>
        {languages.map((lang) => (
          <SelectItem key={lang.id} value={lang.id} dir={lang.id === 'uey' ? 'rtl' : 'ltr'}>
            {lang.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

export default function Home() {
  const [text, setText] = useLocalStorage('inputText', '');
  const [targetAlphabet, setTargetAlphabet] = useLocalStorage<AlphabetId>('targetAlphabet', 'ULY');
  const [history, setHistory] = useLocalStorage<string[]>('translitHistory', []);
  const [isHistoryOpen, setIsHistoryOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [language, setLanguage] = useLocalStorage<Language>('appLanguage', 'uey');

  const [sourceAlphabet, setSourceAlphabet] = useState<AlphabetId>('ULY');
  const [outputText, setOutputText] = useState('');
  
  const { toast } = useToast();
  const debouncedText = useDebounce(text, 500);

  const t = useMemo(() => translations[language], [language]);

  useEffect(() => {
    setIsClient(true);
  }, []);
  
  useEffect(() => {
    if (isClient) {
      document.documentElement.lang = language;
      document.documentElement.dir = language === 'uey' ? 'rtl' : 'ltr';
    }
  }, [language, isClient]);

  // Effect for automatic alphabet detection
  useEffect(() => {
    if (debouncedText) {
        const detected = detectAlphabet(debouncedText);
        setSourceAlphabet(detected);
    } else {
        // Reset to default when text is cleared
        setSourceAlphabet('ULY');
    }
  }, [debouncedText]);

  // Effect for transliteration, now sensitive to manual source alphabet changes
  useEffect(() => {
    if (!debouncedText) {
      setOutputText('');
      return;
    }
    
    try {
      if (sourceAlphabet === targetAlphabet) {
        setOutputText(debouncedText);
        return;
      }

      const result = transliterate(debouncedText, sourceAlphabet, targetAlphabet);
      setOutputText(result);
    } catch (error) {
      console.error("Transliteration error:", error);
      toast({
        variant: "destructive",
        title: t.transliterationError,
        description: t.transliterationErrorDescription,
      });
    }

  }, [debouncedText, sourceAlphabet, targetAlphabet, toast, t]);

  const alphabetOptions = useMemo(() => Object.values(ALPHABET_CONFIG), []);

  const handleSelectFromHistory = useCallback((historyText: string) => {
    setText(historyText);
    setIsHistoryOpen(false);
  }, [setText]);

  const handleInputBlur = () => {
    const trimmedText = text.trim();
    if (trimmedText && !history.includes(trimmedText)) {
      setHistory(prevHistory => [trimmedText, ...prevHistory].slice(0, 100));
    }
  };

  const handleCopy = () => {
    if (!outputText) return;
    navigator.clipboard.writeText(outputText).then(() => {
        toast({
            title: t.copied,
        });
    }).catch(err => {
        console.error("Failed to copy text: ", err);
        toast({
            variant: "destructive",
            title: t.copyFailed,
            description: t.copyFailedDescription,
        });
    });
  };

  const swapAlphabets = () => {
    // The new input text will be the current output text
    setText(outputText);
    // The new target alphabet will be the old source alphabet
    setTargetAlphabet(sourceAlphabet);
    // The detection effect will fire on the new text to set the new source alphabet.
  };

  const handleOutputClick = (e: React.MouseEvent<HTMLTextAreaElement>) => {
    e.currentTarget.select();
  };

  if (!isClient) {
    return (
      <div className="flex min-h-screen w-full items-center justify-center bg-background">
        <Loader2 className="h-16 w-16 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <>
      <div className="flex min-h-screen w-full flex-col font-body">
        <header className="sticky top-0 z-10 border-b bg-background/80 backdrop-blur-md">
          <div className="container mx-auto flex h-16 items-center justify-between px-4">
            <div className="flex items-center gap-2">
              <BookOpenCheck className="h-7 w-7 text-primary" />
              <h1 className="text-xl font-bold tracking-tight sm:text-2xl">{t.title}</h1>
            </div>
            <div className="flex items-center gap-2">
              <LanguageSelector language={language} setLanguage={setLanguage} />
              <Button variant="ghost" size="icon" onClick={() => setIsHistoryOpen(true)}>
                <History className="h-5 w-5" />
                <span className="sr-only">{t.history}</span>
              </Button>
              <ThemeToggle />
            </div>
          </div>
        </header>

        <main className="container mx-auto flex-1 p-4 md:p-8">
          <div className="mx-auto flex max-w-4xl flex-col gap-4">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>{t.input}</span>
                   <Select
                    value={sourceAlphabet}
                    onValueChange={(value) => setSourceAlphabet(value as AlphabetId)}
                  >
                    <SelectTrigger className="w-auto max-w-[180px] sm:max-w-full">
                      <SelectValue placeholder={t.selectAlphabet} />
                    </SelectTrigger>
                    <SelectContent>
                      {alphabetOptions.map((alpha) => (
                        <SelectItem key={alpha.id} value={alpha.id}>
                          {alpha.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Textarea
                  placeholder={t.inputTextareaPlaceholder}
                  className="min-h-[250px] resize-none text-base"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  onBlur={handleInputBlur}
                  dir="auto"
                />
              </CardContent>
            </Card>

            <div className="my-2 flex items-center justify-center gap-2">
              <Button variant="outline" size="icon" onClick={swapAlphabets}>
                <ArrowRightLeft className="h-5 w-5" />
                <span className="sr-only">{t.swapAlphabets}</span>
              </Button>
              <Button variant="outline" size="icon" onClick={handleCopy} disabled={!outputText}>
                <Copy className="h-5 w-5" />
                <span className="sr-only">{t.copyOutput}</span>
              </Button>
            </div>
            
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>{t.output}</span>
                  <Select
                    value={targetAlphabet}
                    onValueChange={(value) => setTargetAlphabet(value as AlphabetId)}
                  >
                    <SelectTrigger className="w-auto max-w-[180px] sm:max-w-full">
                      <SelectValue placeholder={t.selectAlphabet} />
                    </SelectTrigger>
                    <SelectContent>
                      {alphabetOptions.map((alpha) => (
                        <SelectItem key={alpha.id} value={alpha.id}>
                          {alpha.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Textarea
                  placeholder={t.outputTextareaPlaceholder}
                  className="min-h-[250px] resize-none text-base"
                  value={outputText}
                  readOnly
                  dir={ALPHABET_CONFIG[targetAlphabet]?.id === 'UEY' ? 'rtl' : 'ltr'}
                  onClick={handleOutputClick}
                />
              </CardContent>
            </Card>
          </div>
        </main>

        <footer className="py-4 text-center text-sm text-muted-foreground">
          <p>{t.footer}</p>
        </footer>
      </div>
      <HistoryDialog
        isOpen={isHistoryOpen}
        setIsOpen={setIsHistoryOpen}
        history={history}
        onSelect={handleSelectFromHistory}
        t={t}
        dir={language === 'uey' ? 'rtl' : 'ltr'}
      />
    </>
  );
}
