import { FC, useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams, useSearchParams } from "react-router-dom";
import { observer } from "mobx-react";

import { useStore } from "hooks/useStore.ts";
import { useSetSearchTab } from "hooks/useSetSearchTab.ts";
import { Header, PageWrapper, TProjectInfo } from "components/layout";

import { staticLinks } from "config/routingLinks.ts";
import { contentConfig, getProjectPanelInfo } from "./config.tsx";

import { ProjectTabVariant } from "./types.ts";

import styles from "./styles.module.scss";

export const Project: FC = observer(() => {
  const {isLoading, currentProject, getOne: getProject} = useStore().projectStore;
  const {getAll: getSpheres} = useStore().sphereStore;

  const [currentTab, setCurrentTab] = useState<ProjectTabVariant>(ProjectTabVariant.LIST);
  const [searchParams, setSearchParams] = useSearchParams();
  useSetSearchTab(ProjectTabVariant, setCurrentTab)

  const {id} = useParams()
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    (async function () {
      const projectResponse = await getProject(parseInt(id!))
      getSpheres(parseInt(id!))

      if (projectResponse.status === 404) {
        navigate(staticLinks.notFound)
        return null
      }
    })()
  }, [location.pathname, id]);

  if (!id) {
    navigate(staticLinks.notFound)
    return null
  }

  const setCurrentTabWithSearchParams = (tab: ProjectTabVariant) => {
    setCurrentTab(tab);
    searchParams.set('tab', tab);
    setSearchParams(searchParams);
  }

  const projectInfo: TProjectInfo = {
    project: currentProject,
    isLoading
  }

  const panelInfo = getProjectPanelInfo(currentTab, setCurrentTabWithSearchParams)

  return (
    <PageWrapper>
      <Header projectInfo={projectInfo} panelInfo={panelInfo}/>

      <div className={styles.wrapper}>
        {contentConfig[currentTab]}
      </div>
    </PageWrapper>
  )
});