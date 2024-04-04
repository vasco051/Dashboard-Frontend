import { FC, useState } from "react";
import { observer } from "mobx-react";

import { useStore } from "hooks/useStore.ts";
import { Board } from "components/UI/Board";
import { BoardTaskItem } from "components/Items/TaskItems";
import { EmptyItem } from "components/UI/EmptyItem";
import { CreateTaskPopup } from "../CreateTaskPopup";

import { getColorByName } from "utils/getColorByName.ts";

import { TBlockItem } from "components/Layouts/ItemsBlock";
import { TTask } from "types/entities/TTask.ts";
import { useParams } from "react-router-dom";

type TCreateInfo = {
  isOpen: boolean;
  currentBlock: TBlockItem<TTask> | null
}

export const BoardSection: FC = observer(() => {
  const [createPopupInfo, setCreatePopupInfo] = useState<TCreateInfo>({ isOpen: false, currentBlock: null })

  const { currentProject } = useStore().projectStore
  const { spheres } = useStore().taskStore
  const { id } = useParams()

  if (!parseInt(id!)) return null

  const blocks: TBlockItem<TTask>[] = spheres.map(sphere => ({
    statusId: sphere.id,
    header: {
      title: sphere.name,
      color: getColorByName(sphere.color_name),
      onAddClick: (block: TBlockItem<TTask>) => setCreatePopupInfo({ isOpen: true, currentBlock: block })
    },
    items: sphere.tasks,
    renderItem: task => <BoardTaskItem item={task} key={task.id}/>,
    emptyItem: <EmptyItem/>
  }))

  const onClosePopup = () => setCreatePopupInfo({ isOpen: false, currentBlock: null })

  return (
    <>
      <Board blocks={blocks}/>

      <CreateTaskPopup
        projectId={parseInt(id!)}
        projectName={currentProject?.name ?? ''}
        blockInfo={createPopupInfo.currentBlock}
        isOpen={createPopupInfo.isOpen}
        onClose={onClosePopup}
      />
    </>
  )
})