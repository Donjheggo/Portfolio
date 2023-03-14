import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, getDocs, getDoc, } from "firebase/firestore/lite"

const firebaseConfig = {
    apiKey: "AIzaSyABqBdNIdCMf8tbbKQLOgphJvIzW283GKg",
    authDomain: "react-portfolio-4eb6e.firebaseapp.com",
    projectId: "react-portfolio-4eb6e",
    storageBucket: "react-portfolio-4eb6e.appspot.com",
    messagingSenderId: "289236724336",
    appId: "1:289236724336:web:68f4f1f2866c146c14e2b5",
    measurementId: "G-37E72J29H2"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

const projectsCollectionRef = collection(db, "projects")

export const getProjects = () => {
  return new Promise(async(resolve, reject) => {
    setTimeout(async() => {
      try {
        const querySnapShot = await getDocs(projectsCollectionRef);
        const dataArr = querySnapShot.docs.map(doc => ({
          ...doc.data(),
          id: doc.id
        }))
        resolve(dataArr)
      } catch (error) {
        reject(error)
      }
    }, 1000)
  })
}

export const getProjectDetails = async(id) => {
  const docRef = doc(db, "projects", id)
  const projectSnapshot = await getDoc(docRef);
  const data = {...projectSnapshot.data(), id: projectSnapshot.id}
  return data
}

