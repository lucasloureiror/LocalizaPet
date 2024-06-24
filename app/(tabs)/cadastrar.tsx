import { useRouter } from "expo-router";

export default function AddPetScreen(){    
    const router = useRouter();

    return(
        router.replace("/screens/Registro1")
    );
}