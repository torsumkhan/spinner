process.stdout.write('hello from spinner1.js... \rheyyy\n');

const spinnerArray = ['\r|   ','\r/   ','\r-   ','\r\\   ','\r|   ','\r-   ','\r/   ']

let delay = 0;
for (let i = 0; i < spinnerArray.length; i++) {
    setTimeout(() => process.stdout.write(spinnerArray[i]), delay);
    delay += 200;
}

