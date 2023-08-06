let votes = {
    candidate1: 0,
    candidate2: 0,
    candidate3: 0
};

let electionOver = false;

function castVote() {
    if (electionOver) {
        alert("The election is over. You cannot vote anymore.");
        return;
    }

    const selectedCandidate = document.querySelector('input[name="candidate"]:checked');

    if (!selectedCandidate) {
        alert("Please select a candidate before voting.");
        return;
    }

    const voteValue = selectedCandidate.value;
    votes[voteValue]++;
    alert("Vote cast successfully!");
    selectedCandidate.checked = false;
}

function showResults() {
    electionOver = true;
    const voteResultsDiv = document.getElementById("voteResults");
    voteResultsDiv.innerHTML = "";

    for (const candidate in votes) {
        const voteCount = votes[candidate];
        const candidateDiv = document.createElement("div");
        candidateDiv.textContent = `${candidate}: ${voteCount} votes`;
        voteResultsDiv.appendChild(candidateDiv);
    }

    const winnerDiv = document.getElementById("winner");
    const winner = getWinner();
    winnerDiv.textContent = `Winner: ${winner}`;
}

function getWinner() {
    let winner = null;
    let maxVotes = 0;

    for (const candidate in votes) {
        const voteCount = votes[candidate];
        if (voteCount > maxVotes) {
            maxVotes = voteCount;
            winner = candidate;
        } else if (voteCount === maxVotes) {
            winner = "Tie";
        }
    }
    return winner;
}

