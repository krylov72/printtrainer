import App from './App'

const fetchData = async (): Promise<{ text: string; status: string }> => {
    const response = await fetch(
        'https://fish-text.ru/get?format=json&number=1&type=title'
    )

    return response.json()
}

export default async function Page() {
    try {
        const data = await fetchData()
        return <App text={data.text} />
    } catch (e) {
        console.error(e)
    }
}
