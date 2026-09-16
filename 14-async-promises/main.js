const mockFetchData = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Andmed käes!"), 1000);
  });
};

async function loadData() {
  console.log("Laadin...");
  const result = await mockFetchData();
  console.log(result);
}

loadData();