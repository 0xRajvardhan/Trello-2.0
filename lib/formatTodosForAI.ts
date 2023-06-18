const formatTodosForAI = (board: Board) => {
  const todos = Array.from(board.columns.entries());

  const flatArray = todos.reduce((map, [key, value]) => {
    map[key] = value.todos;
    return map;
  }, {} as { [key in TypedColumn]: Todo[] });

    return flatArray;
};

export default formatTodosForAI;