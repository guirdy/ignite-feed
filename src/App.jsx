import { Header } from './components/Header';

import styles from './App.module.css';
import Sidebar from './components/Sidebar';
import Post from './components/Post';
import Comment from './components/Comment';
import './global.css';

export function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post />
          <Post />
        </main>
      </div>
    </>
  )
}
