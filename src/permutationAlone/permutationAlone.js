function getAllPermutations(listCharacter) {
    let permutations = [];
    let lastIndex = listCharacter.length - 1;

    for (let selectedIndex = 0; selectedIndex <= lastIndex; selectedIndex++) {
        let copyListCharacter = [...listCharacter];
        let selectedCharacter = copyListCharacter[selectedIndex];
        let prefixPermutation = [selectedCharacter];

        copyListCharacter.splice(selectedIndex, 1);

        if (lastIndex > 0) {
            let recursivePermutation = getAllPermutations(copyListCharacter);

            recursivePermutation.forEach(permutation => {
                let combinedPermutation = prefixPermutation.concat(permutation);

                permutations.push(combinedPermutation);
            });
        } else {
            permutations.push(prefixPermutation);
        }
    }

    return permutations;
}

function permutationAlone(string) {
    let characterList = string.split('');

    if (characterList.length === 0) {
        return [];
    }

    if (characterList.length === 1) {
        return [characterList];
    }

    let allPermutation = getAllPermutations(characterList);

    function hasConsecutiveCharacter(permutation) {
        return permutation.find((character, index) => {
            let nextCharacter = permutation[index + 1];

            if (character === nextCharacter) {
                return true;
            }

            return false;
        });
    }

    let filteredPermutation = allPermutation.filter(
        permutation => !hasConsecutiveCharacter(permutation)
    );

    let stringPermutations = filteredPermutation.map(permutation =>
        permutation.join('')
    );

    return stringPermutations;
}

export { permutationAlone };
