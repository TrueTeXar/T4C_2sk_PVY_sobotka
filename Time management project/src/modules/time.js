export function toFormat(ms) {
    const totalInSeconds = Math.floor(ms / 1000);

    const h = Math.floor(totalInSeconds / 3600);
    const m = Math.floor((totalInSeconds % 3600) / 60);
    const s = totalInSeconds % 60;

    return (
        h.toString().padStart(2, '0') + ":" +
            m.toString().padStart(2, '0') + ":" +
            s.toString().padStart(2, '0')
    );
}