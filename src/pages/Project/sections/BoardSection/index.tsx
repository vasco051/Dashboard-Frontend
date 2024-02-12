import { FC } from "react";
import { observer } from "mobx-react";

import { useStore } from "hooks/useStore.ts";
import { Board } from "components/UI/Board";
import { BoardTaskItem } from "components/Items/TaskItems";
import { EmptyItem } from "components/UI/EmptyItem";

import { getColorByName } from "utils/getColorByName.ts";

import { TBlockItem } from "components/Layouts/ItemsBlock";
import { TTask } from "types/entities/TTask.ts";

export const BoardSection: FC = observer(() => {
  const { spheres, addOne } = useStore().taskStore

  const blocks: TBlockItem<TTask>[] = spheres.map(sphere => ({
    statusId: sphere.id,
    header: {
      title: sphere.name,
      color: getColorByName(sphere.color_name),
      onAddClick: (block: TBlockItem<TTask>) => addOne(block.statusId)
    },
    items: sphere.tasks,
    renderItem: task => <BoardTaskItem item={task} key={task.id}/>,
    emptyItem: <EmptyItem/>
  }))

  return (
    <Board blocks={blocks}/>
  )
})