function Stats({ items }) {
  if (items.length === 0)
    return (
      <p className="stats">Start adding some items to your packing list 🚀</p>
    );

  const numItems = items.length;
  const packedItems = items.filter((item) => item.packed).length;
  const packedPercentage = Math.round((packedItems / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {packedPercentage === 100
          ? "You are ready to go ✈️"
          : `You have ${numItems} items on your list, and you have packed ${packedItems} (${packedPercentage}%)`}
      </em>
    </footer>
  );
}

export default Stats;