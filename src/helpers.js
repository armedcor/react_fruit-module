function choice(items) {
  const item = Math.floor(Math.random() * items.length) + 1;
  return items[item];
}

function remove(items, item) {
  if (items.includes(item)) {
    const result = items.indexOf(item);
    items.splice(result, 1);

    return items;
  } else {
    return undefined;
  }
}

export { choice, remove };
