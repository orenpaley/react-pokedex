// helper functions to draw randomly from an array
const choice = (items) => {
  const rand = Math.floor(Math.random() * items.length)
  return items[rand] ? items[rand] : undefined
}

const remove = (items, item) => {
  if (items.includes(item)) {
    const spliced = items.splice(items.indexOf(item), 1)
    return spliced[0] || undefined
  }
}

export {choice, remove}
