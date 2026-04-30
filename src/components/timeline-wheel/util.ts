export const calculateShortestRotation = (currentAngle: number, targetAngle: number) => {
  const diff = (targetAngle - currentAngle) % 360;

  if (diff > 180) {
    return diff - 360;
  }

  if (diff <= -180) {
    return diff + 360;
  }

  return diff;
};
