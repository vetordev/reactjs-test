export default function generateItemId(array_item) {

  array_item = array_item.map((item) => {
    if (item == null)
      return null;
    return item.id;
  });

  let new_id = Math.ceil(Math.random() * (new Date()).getMilliseconds());

  while (array_item.indexOf(new_id) >= 0) {
    new_id = Math.ceil(Math.random() * (new Date()).getMilliseconds());
  }

  return new_id;
}