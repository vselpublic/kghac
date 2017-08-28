export async function getUserReposData() {
    const response = await fetch('tailhook.json', {});
    const json = await response.json();

    return json;
}
