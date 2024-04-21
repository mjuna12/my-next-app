import { collection, doc, getDocs, getDoc, getFirestore, query, where, addDoc } from "firebase/firestore";
import app from "./firebase";
import bcyrpt from "bcrypt"

const firestore = getFirestore(app);

export async function retriveData(collectionName: string) {
    const snapshot = await getDocs(collection(firestore, collectionName));
    const data = snapshot.docs.map((doc)=>({
        id: doc.id,
        ...doc.data()
    }))
    
    return data;
}

export async function retriveDataById(collectionName: string, id: string) {
    const snapshot = await getDoc(doc(firestore, collectionName, id))
    const data = snapshot.data();
    return data;
}

export async function signUp(
    userData: {
        email:string; 
        fullname:string; 
        password:string;
        role?:string;
    }, 
        callback: Function) {
    const q = query(
        collection(firestore, "users"),
        where("email", "==", userData.email)
    );
const snapshot = await getDocs(q);
const data = snapshot.docs.map((doc)=>({
    id: doc.id,
    ...doc.data()
}));
if(data.length > 0){
    console.log(data)
    callback({status:false, message:"Email Already Exist"});
}else{
    userData.password = await bcyrpt.hash(userData.password, 10)
    userData.role = "member";
    await addDoc(collection(firestore, "users"), userData).then(()=>{
        callback({status:true, message:"Register Success"});
    }).catch((error) => {
        callback({
            status: false,
            message: error
        })
    })
}
}
