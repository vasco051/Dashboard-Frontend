import {BoardTaskItem, ListTaskItem} from "components/Items/TaskItems";

import {TBlockItem} from "components/Layouts/ItemsBlock";
import {TTask} from "types/entities/TTask.ts";

const todoItems = [
  {
    id: 1,
    title: 'Implement Login',
    description: 'Add Forgot password option when login & send email to reset password',
    category: {
      name: 'Development',
      color: 'var(--Secondary-Glamour-pink-400)'
    },
  },
  {
    id: 2,
    title: 'Design Review',
    description: null,
    category: {
      name: 'Design',
      color: 'var(--Additional-indigo)'
    },
  },
  {
    id: 3,
    title: 'Release 1 MVP',
    description: 'The app should be working and could receive first users',
    category: {
      name: 'Planning',
      color: 'var(--Additional-emerald)'
    },
  },
  {
    id: 4,
    title: 'Implement Login',
    description: 'Add Forgot password option when login & send email to reset password',
    category: {
      name: 'Development',
      color: 'var(--Secondary-Glamour-pink-400)'
    },
  },
  {
    id: 5,
    title: 'Design Review',
    description: null,
    category: {
      name: 'Design',
      color: 'var(--Additional-indigo)'
    },
  },
  {
    id: 6,
    title: 'Release 1 MVP',
    description: 'The app should be working and could receive first users',
    category: {
      name: 'Planning',
      color: 'var(--Additional-emerald)'
    },
  },
  {
    id: 7,
    title: 'Implement Login',
    description: 'Add Forgot password option when login & send email to reset password',
    category: {
      name: 'Development',
      color: 'var(--Secondary-Glamour-pink-400)'
    },
  },
  {
    id: 8,
    title: 'Design Review',
    description: null,
    category: {
      name: 'Design',
      color: 'var(--Additional-indigo)'
    },
  },
  {
    id: 9,
    title: 'Release 1 MVP',
    description: 'The app should be working and could receive first users',
    category: {
      name: 'Planning',
      color: 'var(--Additional-emerald)'
    },
  },
  {
    id: 10,
    title: 'Implement Login',
    description: 'Add Forgot password option when login & send email to reset password',
    category: {
      name: 'Development',
      color: 'var(--Secondary-Glamour-pink-400)'
    },
  },
  {
    id: 11,
    title: 'Design Review',
    description: null,
    category: {
      name: 'Design',
      color: 'var(--Additional-indigo)'
    },
  },
  {
    id: 12,
    title: 'Release 1 MVP',
    description: 'The app should be working and could receive first users',
    category: {
      name: 'Planning',
      color: 'var(--Additional-emerald)'
    },
  },
]

const inProgressItems = [
  {
    id: 1,
    title: 'UI Adjustments',
    description: 'It’s just needs to adapt the UI from what you did before',
    category: {
      name: 'Design',
      color: 'var(--Additional-indigo)'
    },
  },
  {
    id: 2,
    title: 'Dashboard Improvements',
    description: null,
    category: {
      name: 'Design',
      color: 'var(--Additional-indigo)'
    },
  }
]

const inReviewItems = [
  {
    id: 1,
    title: 'Authentication',
    description: null,
    category: {
      name: 'Development',
      color: 'var(--Secondary-Glamour-pink-400)'
    },
  },
  {
    id: 2,
    title: 'Automated Goals',
    description: 'Analytics delivers actionable, industry-ready initiatives each time a business complete their full account',
    category: {
      name: 'Development',
      color: 'var(--Secondary-Glamour-pink-400)'
    },
  },
]

const doneItems = [
  {
    id: 1,
    title: 'Design Landing Page',
    description: 'Design landing page for Hiphonic pellentesque massa quam amet egesta',
    category: {
      name: 'Design',
      color: 'var(--Additional-indigo)'
    },
  },
  {
    id: 2,
    title: 'Competitor Analysis',
    description: 'Analytics delivers actionable, industry-ready initiatives each time a business complete their full account',
    category: {
      name: 'Design',
      color: 'var(--Additional-indigo)'
    },
  },
  {
    id: 3,
    title: 'Setup Projects & Brief',
    description: 'Analytics delivers actionable, industry-ready initiatives each time a business complete their full account',
    category: {
      name: 'Planning',
      color: 'var(--Additional-emerald)'
    },
  },
]

export const listTasksConfig: TBlockItem<TTask>[] = [
  {
    header: {
      title: 'To Do',
      color: ''
    },
    items: todoItems,
    renderItem: (item: TTask) => <ListTaskItem item={item} key={item.id}/>
  },
  {
    header: {
      title: 'In Progress',
      color: 'var(--Primary-600-base)'
    },
    items: inProgressItems,
    renderItem: (item: TTask) => <ListTaskItem item={item} key={item.id}/>
  },
  {
    header: {
      title: 'In Review',
      color: 'var(--Secondary-Amber-400)'
    },
    items: inReviewItems,
    renderItem: (item: TTask) => <ListTaskItem item={item} key={item.id}/>
  },
  {
    header: {
      title: 'Done',
      color: 'var(--Secondary-Algal-fuel-500-base)'
    },
    items: doneItems,
    renderItem: (item: TTask) => <ListTaskItem item={item} key={item.id}/>
  },
]

export const boardTasksConfig: TBlockItem<TTask>[] = [
  {
    header: {
      title: 'To Do',
      color: ''
    },
    items: todoItems,
    renderItem: (item: TTask) => <BoardTaskItem item={item} key={item.id}/>
  },
  {
    header: {
      title: 'In Progress',
      color: 'var(--Primary-600-base)'
    },
    items: inProgressItems,
    renderItem: (item: TTask) => <BoardTaskItem item={item} key={item.id}/>
  },
  {
    header: {
      title: 'In Review',
      color: 'var(--Secondary-Amber-400)'
    },
    items: inReviewItems,
    renderItem: (item: TTask) => <BoardTaskItem item={item} key={item.id}/>
  },
  {
    header: {
      title: 'Done',
      color: 'var(--Secondary-Algal-fuel-500-base)'
    },
    items: doneItems,
    renderItem: (item: TTask) => <BoardTaskItem item={item} key={item.id}/>
  },
]