import { CreateProjectPopup } from "components/logic";

import IcPlus from 'assets/icons/general/ic_plus.svg?react'
import styles from './styles.module.scss'

export const ProjectsControls = () => {
  return (
    <div className={styles.controls}>
      <CreateProjectPopup>
        <IcPlus className={styles.icon}/>
      </CreateProjectPopup>
    </div>
  )
}