import { databases } from "@/appwrite";
import { getTodosGroupedByColumn } from "@/lib/getTodosGroupedByColumn";
import { create } from "zustand";

interface BoardStore {
  board: Board;
  getBoard: () => void;
  setBoardState: (board: Board) => void;
  updateTodoInDB: (todo: Todo, columnID: TypedColumn) => void;
}

export const useBoardStore = create<BoardStore>((set) => ({
  board: {
    columns: new Map<TypedColumn, Column>(),
  },

  getBoard: async () => {
    const board = await getTodosGroupedByColumn();
    set({ board });
  },

  setBoardState: (board) => set({ board }),

  updateTodoInDB: async (todo, columnID) => {
    await databases.updateDocument(
      process.env.NEXT_PUBLIC_DATABASE_ID!,
      process.env.NEXT_PUBLIC_TODOS_COLLECTION_ID!,
      todo.$id,
      {
        title : todo.title,
        status: columnID,
      }
    );

  },
}));
