import { Link } from 'react-router-dom';
import styles from './PostCard.module.css';
import BotaoPrincipal from 'componentes/BotaoPrincipal';
//import minhaFoto from 'assets/minhaFoto.jpeg'

export default function PostCard({post}){
    const img = require(`assets/posts/${post.id}/capa.png`);
    return (
        <Link to={`/post/${post.id}`}>
            <div className={styles.post}>
                <img
                    className={styles.capa}
                    src={img}
                    alt="Imagem do post"
                />

                <h2 className={styles.titulo}> {post.titulo}</h2>

                <BotaoPrincipal>Ler</BotaoPrincipal>  
            
            </div>
        </Link>
        

        
    )
}