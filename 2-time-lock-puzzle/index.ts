import Puzzle from "crypto-puzzle";

async function main() {
    const puzzle = await Puzzle.generate({
        opsPerSecond: 3_300_000,
        duration: 10_000,
        message: 'What is 2+2' 
    });

    const solution = await Puzzle.solve(puzzle);
    console.log(solution);

}

main();