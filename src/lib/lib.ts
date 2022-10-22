export function refresh(): void {
    window.location.reload();
}

export function initLocalStorageVariables(): void {
    const variables: string[] = ["search-key", ""];

    for(let i: number = 0; i <= variables.length - 1; i += 2) {
        sessionStorage.setItem(variables[i], variables[i + 1]);
    }
}