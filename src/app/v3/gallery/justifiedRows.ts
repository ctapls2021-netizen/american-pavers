export interface GalleryPhoto {
  src: string;
  width: number;
  height: number;
}

export function justifiedRows(photos: GalleryPhoto[]): GalleryPhoto[][] {
  if (photos.length < 2) return [photos];

  const ratios = photos.map((photo) => photo.width / photo.height);
  const sums = [0];
  for (const ratio of ratios) sums.push(sums[sums.length - 1] + ratio);
  const total = sums[photos.length];
  const rowCount = Math.min(Math.ceil(total / 3), Math.floor(photos.length / 2));
  const target = total / rowCount;
  const costs = Array.from({ length: rowCount + 1 }, () => Array(photos.length + 1).fill(Infinity));
  const splits = Array.from({ length: rowCount + 1 }, () => Array(photos.length + 1).fill(0));
  costs[0][0] = 0;

  // Balance the proportions across full rows, with at least two photos per row.
  for (let row = 1; row <= rowCount; row++) {
    for (let end = row * 2; end <= photos.length; end++) {
      for (let start = (row - 1) * 2; start <= end - 2; start++) {
        const cost = costs[row - 1][start] + (sums[end] - sums[start] - target) ** 2;
        if (cost < costs[row][end]) {
          costs[row][end] = cost;
          splits[row][end] = start;
        }
      }
    }
  }

  const rows: GalleryPhoto[][] = [];
  let end = photos.length;
  for (let row = rowCount; row > 0; row--) {
    const start = splits[row][end];
    rows.unshift(photos.slice(start, end));
    end = start;
  }
  return rows;
}
