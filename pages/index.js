import styles from '../styles/Home.module.css'

import Link from 'next/link'
import { FiArrowLeftCircle } from 'react-icons/fi'

export default function Home() {
  return (
    <div className={styles.container}>

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

          <Link href='/register'><a><FiArrowLeftCircle />Criar uma conta</a></Link>


        </div>

      </form>


    </div>
  )
}
