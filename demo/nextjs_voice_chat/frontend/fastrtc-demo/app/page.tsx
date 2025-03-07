import { BackgroundCircleProvider } from "@/components/background-circle-provider";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { ResetChat } from "@/components/ui/reset-chat";
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <BackgroundCircleProvider />
      <div className="absolute top-4 right-4 z-10">
        <ThemeToggle />
      </div>
      <div className="absolute bottom-4 right-4 z-10">
        <ResetChat />
      </div>
    </div>
  );
}
