import { FC } from "react";
import { observer } from "mobx-react";

import { useStore } from "hooks/useStore.ts";
import { List } from "components/UI/List";
import { ListTaskItem } from "components/Items/TaskItems";

import { getColorByName } from "utils/getColorByName.ts";

import { TBlockItem } from "components/Layouts/ItemsBlock";
import { TTask } from "types/entities/TTask.ts";

export const ListSection: FC = observer(() => {
  const { spheres } = useStore().taskStore

  const blocks: TBlockItem<TTask>[] = spheres.map(sphere => {
    return {
      statusId: sphere.id,
      header: {
        title: sphere.name,
        color: getColorByName(sphere.color_name)
      },
      items: sphere.tasks,
      renderItem: task => <ListTaskItem item={task} key={task.id}/>,
      emptyItem: <p>Список пуст</p>
    }
  })

  return (
    <List blocks={blocks}/>
  )
})