import "./post.css";
import { useParams } from "react-router-dom";
import posts from "json/posts.json";
import PostModelo from "componentes/PostModelo";
import ReactMarkdown from "react-markdown";


export default function Post(){

    
    const parametros = useParams();

    const post = posts.find((post) => {
        return post.id === Number(parametros.id);
    })

    const img = require(`assets/posts/${post.id}/capa.png`);

    return (
        <PostModelo
            fotoCapa={img}
            titulo={post.titulo}
            >
                <div className="post-markdown-container">
                    <ReactMarkdown>
                        {post.texto}    
                    </ReactMarkdown>    
                </div>
            
            

        </PostModelo>
    )
}