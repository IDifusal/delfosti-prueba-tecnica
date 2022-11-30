import { computed } from "vue"
import { collection, getDocs, deleteDoc, doc, addDoc, updateDoc } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider,signOut } from "firebase/auth";
import { initializeApp } from "firebase/app"
import { getFirestore } from 'firebase/firestore';
import type { Product } from '../interfaces/Product';
import type { User } from '../interfaces/User';
const firebaseConfig = {
    apiKey: "AIzaSyC1T37d59hUIhAhbrhyztUOSQhz-okGnNc",
    authDomain: "ong-andes-sur.firebaseapp.com",
    projectId: "ong-andes-sur",
    storageBucket: "ong-andes-sur.appspot.com",
    messagingSenderId: "319024319197",
    appId: "1:319024319197:web:3c393892bb23d9d056e934",
}
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const isLoading = ref(false)
const isModal = ref(false)
const user = ref({})
const isUserLoged = ref(false)
const errorMessage = ref('')
const listProducts = ref([])
const saveProduct = async (obj: {}) => {
    isLoading.value = true
    const docRef = await addDoc(collection(db, "delfosti"), obj);
    const newRef = doc(db, "delfosti", docRef.id);
    await updateDoc(newRef, {
        id: docRef.id
    });
    obj['id'] = docRef.id
    listProducts.value.push(obj)
    isLoading.value = false
    //listProducts.value.push('')
}
const getListProducts = async () => {
    isLoading.value = true
    const querySnapshot = await getDocs(collection(db, "delfosti"));
    querySnapshot.forEach((doc) => {
        listProducts.value.push(doc.data());
    });
    localStorage.setItem('products',JSON.stringify(listProducts.value))
    isLoading.value = false
}
const createUser = (obj: User) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, obj.email, obj.password)
        .then((userCredential) => {
            isUserLoged.value = true
            user.value = userCredential.user;
        })
        .catch((error) => {
            errorMessage.value = error.message
        });
}
const loginUser = (obj: User) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, obj.email, obj.password)
        .then((userCredential) => {
            isUserLoged.value = true
            user.value = userCredential.user;
            localStorage.setItem('user',JSON.stringify(userCredential.user))
        })
        .catch((error) => {
            errorMessage.value = error.message
        });
}
const loginWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    signInWithPopup(auth, provider)
        .then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            user.value = result.user;
            isUserLoged.value = true

        }).catch((error) => {
            errorMessage.value = error.message;
        });
}
const deleteProduct = (obj: Product) => {
    isLoading.value = true
    const docRef = doc(db, "delfosti", obj.id!);
    deleteDoc(docRef)
        .then(() => {
            let index = listProducts.value.indexOf(obj)
            if (index > -1) {
                listProducts.value.splice(index, 1);
            }
            console.log("Entire Document has been deleted successfully.")
            isLoading.value = false
        })
        .catch(error => {
            console.log(error);
        })
}
const updateFavorite = async (obj: Product, value: boolean) => {
    let docRef = doc(db, "delfosti", obj.id!);
    await updateDoc(docRef, {
        isFavorite: value
    });

}
const logOut = () => {
    const auth = getAuth();
    signOut(auth).then(() => {
        isUserLoged.value = false
    }).catch((error) => {
        console.log(error)
    });
}
const useProductsModule = () => {

    return {
        isLoading,
        isModal,
        saveProduct,
        getListProducts,
        updateFavorite,
        deleteProduct,
        createUser,
        loginUser,
        errorMessage,
        loginWithGoogle,
        logOut,
        products: computed(() => listProducts.value),
        user: computed(() => user),
        isUserLoged: computed(() => isUserLoged.value)
    }
}
export default useProductsModule