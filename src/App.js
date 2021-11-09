import Cards from "./components/Cards/Cards";
import { imagesGallery } from "./statics/data";
import styles from "./App.module.css"



function App() {
  return (
    <div className={styles.App}>
      <Cards images={imagesGallery}/>
    </div>
  );
}

export default App;
