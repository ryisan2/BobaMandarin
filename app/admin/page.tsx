import dynamic from "next/dynamic";
import { IsAdmin } from "@/lib/admin";
import { redirect } from "next/navigation";


const App = dynamic(() => import("./app"), { ssr: false })

const AdminPage =  () => {
    if (!IsAdmin()) {
        redirect("/")
    }

    return ( 
        <App />
    );
}
 
export default AdminPage;