import fs from 'fs'

export async function GET(request) {

    try {
        const jsonData = fs.readFileSync('data/resume.json', 'utf-8') // './resume.json
        const data = JSON.parse(jsonData)
        return new Response(JSON.stringify(data), {
            headers: {
                'Content-Type': 'application/json'
            }
        })
    } catch (error) {
        console.log(error)
        return new Response('Error', {
            status: 500
        })
    }
    
    return new Response('Hello there!')
}