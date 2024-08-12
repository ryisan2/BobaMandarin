import { Button } from "../../components/ui/button"
export const Footer = () => {
  return (
    <footer className="hidden lg:block h-20 w-full border-t-2 border-slate-200 p-2" >
      <div className="max-w-screen-lg mx-auto flex items-center 
      justify-evenly h-full">
        <Button size='lg' variant='ghost' className='-w-full' >
          <img className="mr-4 rounded-md" src='Simplified.svg' height={24} width={32} alt='simplified'/>
          Simplified Chinese
        </Button>
        <Button size='lg' variant='ghost' className='-w-full' >
          <img className="mr-4 rounded-md" src='Traditional.svg' height={24} width={32} alt='simplified'/>
            Traditional Chinese
        </Button>
        <Button size='lg' variant='ghost' className='-w-full' >
          <img className="mr-4 rounded-md" src='english.svg' height={24} width={32} alt='english'/>
            English
        </Button>
      </div>
    </footer>
  );
};
