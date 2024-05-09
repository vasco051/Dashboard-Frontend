import { FC, useState } from "react";
import { useParams } from "react-router-dom";
import { observer } from "mobx-react";

import { useStore } from "hooks/useStore.ts";
import { Board, EmptyItem } from "components/ui";
import { BoardTaskItem } from "components/items";
import { CreateTaskPopup, DeleteTaskPopup } from "../task-popups";

import { getColorByName } from "utils/getColorByName.ts";

import { TBlockItem } from "components/layout";
import { TTask } from "types/entities/TTask.ts";

type TRemovePopupConfig = {
  isOpen: boolean;
  taskId: number | null
}

export const BoardSection: FC = observer(() => {
  const [currentBlock, setCurrentBlock] = useState<TBlockItem<TTask> | null>(null)
  const [isCreatePopupOpen, setIsCreatePopupOpen] = useState(false)
  const [removePopupInfo, setRemovePopupInfo] = useState<TRemovePopupConfig>({isOpen: false, taskId: null})

  const {id} = useParams()
  const {spheres} = useStore().sphereStore
  const {currentProject} = useStore().projectStore

  if (!id) return null

  const blocks: TBlockItem<TTask>[] = spheres.map(sphere => ({
    statusId: sphere.id,
    header: {
      title: sphere.name,
      color: getColorByName(sphere.color_name),
      onAddClick: onOpenCreatePopup
    },
    items: sphere.tasks,
    renderItem: task => <BoardTaskItem item={task} onRemoveItem={onOpenRemovePopup} key={task.id}/>,
    emptyItem: <EmptyItem/>
  }))

  // create popup
  function onOpenCreatePopup(block: TBlockItem<TTask>) {
    setCurrentBlock(block)
    setIsCreatePopupOpen(true)
  }

  function onCloseCreatePopup() {
    setCurrentBlock(null)
    setIsCreatePopupOpen(false)
  }

  // remove popup
  function onOpenRemovePopup(sphereId: number, taskId: number) {
    setCurrentBlock(blocks.find(block => block.statusId === sphereId)!)
    setRemovePopupInfo({isOpen: true, taskId})
  }

  function onCloseRemovePopup() {
    setCurrentBlock(null)
    setRemovePopupInfo({isOpen: false, taskId: null})
  }

  const projectInfo = {
    projectId: parseInt(id),
    projectName: currentProject?.name ?? ''
  }

  return (
    <>
      <Board blocks={blocks}/>

      <CreateTaskPopup
        {...projectInfo}
        blockInfo={currentBlock}
        isOpen={isCreatePopupOpen}
        onClose={onCloseCreatePopup}
      />

      <DeleteTaskPopup
        {...projectInfo}
        taskId={removePopupInfo.taskId}
        blockInfo={currentBlock}
        isOpen={removePopupInfo.isOpen}
        onClose={onCloseRemovePopup}
      />
    </>
  )
})