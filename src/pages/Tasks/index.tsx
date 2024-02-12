import {FC, useLayoutEffect, useState} from 'react';
import {useSearchParams} from "react-router-dom";

import {PageWrapper} from "components/Layouts/PageWrapper";
import {Header} from "components/Layouts/Header/Header.tsx";
import {List} from "components/UI/List";
import {Board} from "components/UI/Board";

import {TPanelInfo} from "components/Layouts/Header";
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

  const setCurrentTabWithSearchParams = (tab: TasksTabVariant) => {
    setCurrentTab(tab);
    searchParams.set('tab', tab);
    setSearchParams(searchParams);
  }

  const panelInfo: TPanelInfo<TasksTabVariant> = {
    currentTab,
    setCurrentTab: setCurrentTabWithSearchParams,
    tabs: [
      {
        title: 'Список',
        type: TasksTabVariant.LIST
      },
      {
        title: 'Доска',
        type: TasksTabVariant.BOARD
      },
      {
        title: 'Время',
        type: TasksTabVariant.TIME_BOARD
      }
    ]
  }

  const contentConfig: TTasksTabContent = {
    [TasksTabVariant.LIST]: <List blocks={[]}/>,
    [TasksTabVariant.BOARD]: <Board blocks={[]}/>,
    [TasksTabVariant.TIME_BOARD]: <div>time board</div>,
  }

  return (
    <PageWrapper>
      <Header panelInfo={panelInfo} title='Мои задачи'/>

      <div className={styles.wrapper}>
        {contentConfig[currentTab]}
      </div>
    </PageWrapper>
  );
};