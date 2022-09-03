import styles from './styles.module.css';

type Props = {
    title: string;
    func?: () => void;
}

export const Button = ({ title, func}: Props) => {
    return (
        <button className={styles.button} onClick={func}>{title}</button>
    );
};