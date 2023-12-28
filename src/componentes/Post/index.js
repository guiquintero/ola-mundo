import styles from './Post.module.css';
//import minhaFoto from 'assets/minhaFoto.jpeg'

export default function Post({post}){
    const img = require(`assets/posts/${post.id}/capa.png`);
    return (
        
        <div className={styles.post}>

            <img
                className={styles.capa}
                src={img}
                
                alt="Imagem do post"
            />

            <h2 className={styles.titulo}> {post.titulo}</h2>

            <button className={styles.botaoLer}>Ler</button>
            

        </div>

        
    )
}