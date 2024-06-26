import { TBlockItem } from "components/layout/sidebar/sections/block/types.ts";

import { staticLinks } from "config/routingLinks.ts";

import IcDashboard from 'assets/icons/sidebar/ic_dashboard.svg?react'
import IcCompleted from 'assets/icons/sidebar/ic_completed.svg?react'
import IcMessage from 'assets/icons/sidebar/ic_message.svg?react'
import IcGoal from 'assets/icons/sidebar/ic_goal.svg?react'

export const menu: TBlockItem = {
  title: 'Меню',
  items: [
    {
      id: 1,
      text: 'Личный кабинет',
      icon: <IcDashboard/>,
      link: staticLinks.main
    },
    {
      id: 2,
      text: 'Мои задачи',
      icon: <IcCompleted/>,
      link: staticLinks.tasks
    },
    {
      id: 3,
      text: 'Сообщения',
      icon: <IcMessage/>,
      link: staticLinks.notFound
    },
    {
      id: 4,
      text: 'Цели',
      icon: <IcGoal/>,
      link: staticLinks.notFound
    },
  ]
}