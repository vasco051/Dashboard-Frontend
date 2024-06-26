import { FC } from "react";
import { observer } from "mobx-react";

import { useStore } from "hooks/useStore.ts";
import { List } from "components/ui";
import { ListTaskItem } from "components/items";

import { getColorByName } from "utils/getColorByName.ts";

import { TBlockItem } from "components/layout";
import { TTask } from "types/entities/TTask.ts";

export const ListSection: FC = observer(() => {
  const {spheres} = useStore().sphereStore

  const blocks: TBlockItem<TTask>[] = spheres.map(sphere => ({
    statusId: sphere.id,
    header: {
      title: sphere.name,
      color: getColorByName(sphere.color_name)
    },
    items: sphere.tasks,
    renderItem: task => <ListTaskItem item={task} key={task.id}/>,
    emptyItem: <p>Список пуст</p>
  }))

  return (
    <List blocks={blocks}/>
  )
})