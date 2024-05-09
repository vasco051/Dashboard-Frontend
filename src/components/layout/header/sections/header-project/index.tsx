import { FC } from "react";

import { getColorByName } from "utils/getColorByName.ts";

import { TProjectInfo } from "./types.ts";

import styles from './styles.module.scss'

interface IHeaderProjectProps {
  info: TProjectInfo
}

export const HeaderProject: FC<IHeaderProjectProps> = ({ info }) => {
  const iconStyles = { background: getColorByName(info.project?.color_name ?? '') }

  return (
    <section className={styles.projectInfo}>
      <div style={iconStyles} className={styles.iconWrapper}>
        <div className={styles.icon}></div>
        <div style={iconStyles} className={styles.circle}></div>
      </div>

      <div className={styles.info}>
        {info.isLoading
          ? <div className={styles.skeleton}></div>
          : (
            <>
              <h1 className={styles.title}>{info.project?.name}</h1>
              {info.project?.description && <p className={styles.description}>{info.project?.description}</p>}
            </>
          )
        }
      </div>
    </section>
  );
};