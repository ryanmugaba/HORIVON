export async function createBasiqUser(userId: string) {
  return { userId, status: "created", message: "HORIVON Basiq user placeholder." };
}

export async function getBasiqJobStatus(jobId: string) {
  return { jobId, status: "pending" };
}

export async function fetchTransactions(basiqUserId: string) {
  return [{ date: "2026-06-01", description: "Sample transaction", amount: 1200, category: "sales" }];
}
