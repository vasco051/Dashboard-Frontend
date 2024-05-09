import { Hr } from "components/ui";
import { HeaderPanel } from "./sections/header-panel";
import { HeaderProject } from "./sections/header-project";
import { UserInfo } from "./sections/user-info";

import { TPanelInfo } from "./sections/header-panel/types.ts";
import { TProjectInfo } from "./sections/header-project/types.ts";

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