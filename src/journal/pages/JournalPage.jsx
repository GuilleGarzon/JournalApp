import { JournalLayout } from '../layout/JournalLayout';
import { NoteView, NothingSelectedView } from '../views';

export const JournalPage = () => {
  return (
    <JournalLayout>
      
      {/* <Typgraphy>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque qui quos tempora. Sequi doloremque aspernatur rem enim nulla. Numquam et earum perferendis eum omnis amet quidem sed deserunt soluta corrupti!</Typgraphy> */}

      {/* <NothingSelectedView /> */}
      <NoteView />
    </JournalLayout>
  )
}
