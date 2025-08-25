import { fetchNotes } from '@/lib/api';
import NotesClient from './Notes.client';

type Props = {
  params: Promise<{ slug: string[] }>;
};

const NotesByTags = async ({ params }: Props) => {
  const { slug } = await params;
  const page = 1;
  const perPage = 12;
  const search = '';
  const tag = slug[0] === 'all' ? undefined : slug[0];

  const data = await fetchNotes(page, perPage, search, tag);

  return <NotesClient initialData={data} tag={tag || 'All'} />;
};

export default NotesByTags;
