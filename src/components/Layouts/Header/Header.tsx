import { Hr } from "components/UI/Hr";
import { HeaderPanel } from "./sections/HeaderPanel";
import { HeaderProject } from "./sections/HeaderProject";
import { UserInfo } from "./sections/UserInfo";

import { TPanelInfo } from "./sections/HeaderPanel/types.ts";
import { TProjectInfo } from "./sections/HeaderProject/types.ts";

import styles from './styles.module.scss'

interface IHeaderProps<T> {
  title?: string;
  projectInfo?: TProjectInfo;
  panelInfo?: TPanelInfo<T>;
}

export function Header<T>({ title, panelInfo, projectInfo }: IHeaderProps<T>) {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          {title && <h1 className={styles.title}>{title}</h1>}
          {projectInfo && <HeaderProject info={projectInfo}/>}
        </div>

        <UserInfo/>
      </div>

      {panelInfo && (
        <>
          <Hr/>
          <HeaderPanel panel={panelInfo}/>
        </>
      )}
    </header>
  );
}