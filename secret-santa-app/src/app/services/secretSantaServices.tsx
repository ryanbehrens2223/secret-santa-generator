export const generateSecretSantaPairs = (participants: string[]) => {
  if (participants.length < 2) {
    throw new Error("At least two participants are required.");
  }

  const shuffled = [...participants].sort(() => Math.random() - 0.5);
  const pairs = shuffled.map((participant, index) => {
    const recipient = shuffled[(index + 1) % shuffled.length];
    return { giver: participant, receiver: recipient };
  });

  return pairs;
};