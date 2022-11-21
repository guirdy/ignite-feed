import { ThumbsUp, Trash } from "phosphor-react";
import React from "react";

import styles from "./Comment.module.css";

export default function Comment() {
  return (
    <div className={styles.comment}>
      <img
        src="https://avatars.githubusercontent.com/u/49107317?v=4"
        alt="Foto de Perfil"
      />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Guilherme Leandro</strong>

              <time
                title="16 de novembro hás 23:28"
                dateTime="2022-11-16 23:28:30"
              >
                Acerca de 1h atrás
              </time>
            </div>

            <button title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>

          <p>Muito bom Devon, parabéns!! 👏👏</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
