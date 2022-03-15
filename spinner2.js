let spins = 2
for (let i = 0; i < spins * 4; i++) {
  let spin = ['\r|   ','\r/   ','\r-   ','\r\\   '];
  setTimeout(() => { process.stdout.write(spin[i % 4]); }, i * 250);
}
