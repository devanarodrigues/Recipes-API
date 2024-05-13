import { AiOutlineLoading } from 'react-icons/ai'
import { motion } from 'framer-motion'
import styles from './Loading.module.css'

const Loading = () => {

    return (
        <>
            <motion.div
                className={styles.loading}
                animate={{ transition: { duration: 1, repeat: Infinity, ease: "linear" }, rotateZ: 360 }}
            >
                <AiOutlineLoading size={'2.5em'} color={'white'} />
            </motion.div>
        </>
    )
}

export default Loading