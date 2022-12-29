import { FaHtml5 } from 'react-icons/fa';
import { FaReact} from 'react-icons/fa';
import { FaCss3Alt } from 'react-icons/fa';
import { FaJs } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import styles from './Footer.module.css'

function Footer() {

    const git= "https://github.com/analuizadev";
    const linkdin = 'https://www.linkedin.com/in/ana-luiza-de-castro-6580081b7/';

    return(
        <footer className={styles.footer}>
            <ul className={styles.lang_list}>
                <li>
                    <FaHtml5 />
                </li>
                <li>
                    <FaCss3Alt />
                </li>
                <li>
                    <FaJs />
                </li>
                <li>
                    <FaReact />
                </li>
            </ul>
            <ul className={styles.social_list}>
                <li> <a href={git}><FaGithub /></a> </li>
                <li> <a href={linkdin}><FaLinkedin /></a> </li>
            </ul>
            <p>
                <span>Costs</span> &copy; 2022
            </p>
        </footer>
    )
}

export default Footer