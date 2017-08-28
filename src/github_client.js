export async function getUserReposData(username) {
    const response = await fetch(`${username}.json`, {});
    return response.json();
}
