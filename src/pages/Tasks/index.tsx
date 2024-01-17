import {FC, useLayoutEffect, useState} from 'react';
import {useSearchParams} from "react-router-dom";

import {PageWrapper} from "components/Layouts/PageWrapper";
import {Header} from "components/Layouts/Header";
import {HeaderPanel} from "./sections/HeaderPanel";
import {List} from "./sections/List";
import {Board} from "./sections/Board";

import {TasksTabVariant, TTasksTabContent} from "./types.ts";

import styles from './styles.module.scss'

export const Tasks: FC = () => {
  const [currentTab, setCurrentTab] = useState<TasksTabVariant>(TasksTabVariant.LIST);
  const [searchParams, setSearchParams] = useSearchParams()

  useLayoutEffect(() => {
    const tab = searchParams.get('tab')

    Object.values(TasksTabVariant).forEach((value) => {
      if (value === tab) setCurrentTab(value)
    })
  }, [searchParams]);

  // todo: to data
  const contentConfig: TTasksTabContent = {
    [TasksTabVariant.LIST]: <List/>,
    [TasksTabVariant.BOARD]: <Board/>,
    [TasksTabVariant.TIME_BOARD]: <div>time board</div>,
  }

  const setCurrentTabWithSearchParams = (tab: TasksTabVariant) => {
    setCurrentTab(tab);
    searchParams.set('tab', tab);
    setSearchParams(searchParams);
  }

  return (
    <PageWrapper>
      <Header
        title='Мои задачи'
        customBottom={
          <HeaderPanel currentTab={currentTab} setCurrentTab={setCurrentTabWithSearchParams}/>
        }
      />

      <div className={styles.wrapper}>
        {contentConfig[currentTab]}
      </div>
    </PageWrapper>
  );
};