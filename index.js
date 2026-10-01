const frequencyHash = (corpus) => {
  const count = {};
  let items

  if (typeof corpus === "string") {
    workingCorpus = corpus
      .toLowerCase()
      .replace(/[^\w\s]/g, "")
      .split(/\s+/)
      .filter(Boolean);
  } else if (Array.isArray(corpus)) {
    workingCorpus = corpus;
  } else {
    throw new Error('Argument must be a string or an array');
  }

  for (const word of corpus) {
    count[word] = (count[word] || 0) + 1;
  }

  return count;
}

module.exports = {
  frequencyHash
}