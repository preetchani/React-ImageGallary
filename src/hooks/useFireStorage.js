import { useState,useEffect } from "react";
import { projectFireStorage } from "../firebase/config";

const useFireStorage = (collection)=>{
    const [docs,setDocs] = useState([]);

    useEffect(()=>{
        const unsub=projectFireStorage.collection(collection).orderBy('createdAt','desc')
        .onSnapshot((snap)=>{
            let documents = [];
            snap.forEach(doc=>{
                documents.push({...doc.data(), id: doc.id})
            });
            setDocs(documents);
        });
        //remove this collection when there is no use of ImageGrid component or we can say when we are not uploading anything
        return ()=> unsub();
    },[collection])
    return {docs};

}

export default useFireStorage;

