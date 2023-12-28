import styles from './Banner.module.css';
import circuloColorido from 'assets/circulo_colorido.png';
import minhaFoto from 'assets/minhaFoto.jpeg'

export default function Banner() {
    return (
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>
                    Olá, Mundo!
                </h1>
                <p className={styles.paragrafo}>
                    Olá, me chamo Guilherme Quintero, sou desenvolvedor front-end e estudante da Alura
                </p>
            </div>
            <div className={styles.imagens}>
                <img 
                    className={styles.imagem}
                    src={circuloColorido}
                    aria-hidden="true"
                    alt="Círculo colorido"
                />
                <img 
                    className={styles.minhaFoto}
                    src={minhaFoto}
                    alt="Foto do autor"
                    aria-hidden="true"
                />
            </div>
        </div>
    )
}