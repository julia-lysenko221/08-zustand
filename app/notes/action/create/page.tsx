import css from './create/CreateNote.module.css';
import NoteForm from '@/components/NoteForm/NoteForm';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: ' Create a note',
  description: 'The page to create a new note',
  openGraph: {
    title: `Create a note`,
    description: 'The page to create a new note',
    url: 'http://localhost:3000/action/create',

    images: [
      {
        url: 'https://ac.goit.global/fullstack/react/notehub-og-meta.jpg',
        width: 1200,
        height: 630,
        alt: 'Create a note',
      },
    ],
  },
};

const CreateNote = async () => {
  return (
    <main className={css.main}>
      <div className={css.container}>
        <h1 className={css.title}>Create note</h1>
        <NoteForm />
      </div>
    </main>
  );
};
export default CreateNote;
