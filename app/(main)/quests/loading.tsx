import { Loader } from "lucide-react";

const Loading =()   => {
    return (
        <div className="flex items-center justify-center h-screen">
        <Loader className="h-10 w-10 text-muted-foreground animate-spin" />
        </div>
    );
    };

    export default Loading;
    
