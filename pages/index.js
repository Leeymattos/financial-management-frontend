import styles from '../styles/Home.module.css'

import Link from 'next/link'
import { FiArrowRightCircle } from 'react-icons/fi'

export default function Home() {
  return (
    <div className={styles.container}>
      <div>

        <h1>Financial Control</h1>
        
        <section>
          <img src="./ilustration.svg" alt="ilustration" />

          <form>
            <h1>Login</h1>

            <div className={styles.inputContainer}>
              <input id="email" type="email" pattern=".+" required />
              <label htmlFor="email">E-mail</label>
            </div>

            <div className={styles.inputContainer}>
              <input id="password" type="password" pattern=".+" required />
              <label htmlFor="password">Senha</label>
            </div>

            <div>
              <button type="submit">Entrar</button>
            </div>

            <div>
              <Link href="/"><a><FiArrowRightCircle />Esqueci minha senha</a></Link>
              <Link href='/register'><a><FiArrowRightCircle />Criar uma conta</a></Link>
            </div>

          </form>

        </section>


      </div>


    </div>
  )
}
