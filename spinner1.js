for (let i = 0; i < 3; i++) {
  setTimeout(() => {
    process.stdout.write('\r|   ');
  }, i * 1000 + 0);

  setTimeout(() => {
    process.stdout.write('\r/   ');
  }, i * 1000 + 250);

  setTimeout(() => {
    process.stdout.write('\r-   ');
  }, i * 1000 + 500);

  setTimeout(() => {
    // Need to escape the backslash since it's a special character.
    process.stdout.write('\r\\   '); 
  }, i * 1000 + 750);
}
// ... fill in the rest yourself ...