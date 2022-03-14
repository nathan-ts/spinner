for (let i = 0; i < 8; i++) {
  let spin = ['\r|   ','\r/   ','\r-   ','\r\\   '];
  setTimeout(() => { process.stdout.write(spin[i % 4]); }, i * 250);
}
